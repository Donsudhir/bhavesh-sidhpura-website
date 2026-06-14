"use client";

import { useState, type FormEvent } from "react";
import { Check } from "@phosphor-icons/react";
import { booking } from "@/lib/site";

const f = booking.form;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setState("error");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "enquiry",
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          company,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-card border border-accent/30 bg-bg-elevated p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/12">
          <Check size={20} weight="bold" className="text-accent" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-light text-text">
          {f.successHeading}
        </h3>
        <p className="mt-3 text-[1.02rem] leading-relaxed text-text-muted">
          {f.successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-card border border-border bg-bg-elevated p-7 lg:p-8"
    >
      <h3 className="font-display text-2xl font-light text-text">{f.heading}</h3>
      <p className="mt-2 text-[0.98rem] leading-relaxed text-text-muted">{f.body}</p>

      {/* Honeypot — visually hidden, ignored by humans */}
      <div className="sr-only" aria-hidden>
        <label>
          Company
          <input
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="enq-name" className="block text-[0.85rem] text-text-muted">
            {f.nameLabel}
          </label>
          <input
            id="enq-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={f.namePlaceholder}
            className="mt-2 w-full rounded-card border border-border bg-bg px-4 py-3 text-[0.98rem] text-text outline-none transition-colors placeholder:text-text-muted/60 focus-visible:border-accent"
          />
        </div>

        <div>
          <label htmlFor="enq-email" className="block text-[0.85rem] text-text-muted">
            {f.emailLabel}
          </label>
          <input
            id="enq-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (state === "error") setState("idle");
            }}
            placeholder={f.emailPlaceholder}
            className="mt-2 w-full rounded-card border border-border bg-bg px-4 py-3 text-[0.98rem] text-text outline-none transition-colors placeholder:text-text-muted/60 focus-visible:border-accent"
          />
        </div>

        <div>
          <label htmlFor="enq-message" className="block text-[0.85rem] text-text-muted">
            {f.messageLabel}
          </label>
          <textarea
            id="enq-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={f.messagePlaceholder}
            className="mt-2 w-full resize-none rounded-card border border-border bg-bg px-4 py-3 text-[0.98rem] text-text outline-none transition-colors placeholder:text-text-muted/60 focus-visible:border-accent"
          />
        </div>
      </div>

      {state === "error" && (
        <p className="mt-4 text-[0.88rem] text-red-500">{f.error}</p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-btn-bg px-6 py-3.5 text-[0.95rem] font-medium text-btn-fg transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" ? f.sending : f.submit}
      </button>
    </form>
  );
}
