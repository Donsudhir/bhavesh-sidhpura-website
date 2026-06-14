import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/* ---------------------------------------------------------------------------
   Lead capture endpoint  ·  handles both the Observatory email unlock
   ("subscribe") and the Booking enquiry form ("enquiry").

   Delivery uses Resend's REST API via fetch, so NO extra dependency is needed.
   To go live, the client sets two env vars (see .env.example):
     RESEND_API_KEY   – from resend.com
     LEAD_TO_EMAIL    – inbox that should receive leads (defaults to site.email)
     LEAD_FROM_EMAIL  – a verified sender on the client's domain

   If RESEND_API_KEY is absent (e.g. local dev / pre-launch), the request is
   accepted and logged so the UI works end to end without breaking.
--------------------------------------------------------------------------- */

type Payload = {
  type?: "subscribe" | "enquiry";
  name?: string;
  email?: string;
  message?: string;
  // honeypot: real users never fill this
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Spam honeypot — silently accept and drop.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const type = body.type === "enquiry" ? "enquiry" : "subscribe";
  const email = (body.email ?? "").trim();
  const name = (body.name ?? "").trim().slice(0, 120);
  const message = (body.message ?? "").trim().slice(0, 2000);

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || site.email;
  const from = process.env.LEAD_FROM_EMAIL || "Website <onboarding@resend.dev>";

  const subject =
    type === "enquiry"
      ? `New enquiry from ${name || email}`
      : `New Observatory signup: ${email}`;

  const lines =
    type === "enquiry"
      ? [
          `Name: ${name || "(not given)"}`,
          `Email: ${email}`,
          "",
          "Message:",
          message || "(no message)",
        ]
      : [`A visitor unlocked the Observatory.`, `Email: ${email}`];

  const text = lines.join("\n");

  // Pre-launch / no key: accept gracefully so the experience still works.
  if (!apiKey) {
    console.info(`[lead:${type}] (no RESEND_API_KEY set) ->`, { email, name, message });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[lead] Resend error", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "Could not send right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[lead] network error", err);
    return NextResponse.json(
      { ok: false, error: "Could not send right now." },
      { status: 502 },
    );
  }
}
