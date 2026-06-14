"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { LockKey, LockKeyOpen, Check } from "@phosphor-icons/react";
import { Container, Eyebrow } from "../ui/Container";
import { observatory } from "@/lib/site";

export function Observatory() {
  const reduce = useReducedMotion();
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "subscribe", email: email.trim() }),
      });
    } catch {
      // The unlock is the reward; never block the visitor on a network hiccup.
    } finally {
      setSubmitting(false);
      setUnlocked(true);
    }
  }

  return (
    <section
      id="observatory"
      className="relative scroll-mt-24 overflow-hidden border-t border-border bg-[#14120e] py-24 text-[#f3efe6] lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(55%_55%_at_50%_30%,color-mix(in_oklab,#cba56e_16%,transparent),transparent_70%)]"
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#cba56e]">
              <span className="h-px w-7 bg-[#cba56e]" aria-hidden />
              {observatory.label}
              <span className="h-px w-7 bg-[#cba56e]" aria-hidden />
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!unlocked ? (
              <motion.div
                key="locked"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mt-7 flex justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#cba56e]/40 bg-[#cba56e]/10">
                    <LockKey size={24} className="text-[#cba56e]" />
                  </span>
                </div>

                <h2 className="mt-7 text-balance font-display text-[2rem] font-light leading-[1.14] tracking-[-0.02em] sm:text-5xl">
                  {observatory.heading}
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#a39c8c]">
                  {observatory.body}
                </p>

                <div className="mx-auto mt-10 max-w-md rounded-card border border-[#f3efe6]/12 bg-[#1c1a14]/60 p-7 text-left backdrop-blur-sm">
                  <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#cba56e]">
                    {observatory.lockedHint}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {observatory.contents.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-3 text-[1rem] leading-snug text-[#f3efe6]/80"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#cba56e]"
                        />
                        <span className="blur-[3px] select-none">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={submit} className="mx-auto mt-8 max-w-md">
                  <label
                    htmlFor="observatory-email"
                    className="block text-[0.9rem] text-[#a39c8c]"
                  >
                    {observatory.formLabel}
                  </label>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                    <input
                      id="observatory-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(false);
                      }}
                      placeholder={observatory.placeholder}
                      aria-invalid={error}
                      className={`min-w-0 flex-1 rounded-full border bg-[#14120e] px-5 py-3.5 text-[0.95rem] text-[#f3efe6] outline-none transition-colors placeholder:text-[#a39c8c]/60 focus-visible:border-[#cba56e] ${
                        error ? "border-red-400/70" : "border-[#f3efe6]/18"
                      }`}
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="shrink-0 rounded-full bg-[#f3efe6] px-6 py-3.5 text-[0.95rem] font-medium text-[#14120e] transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
                    >
                      {submitting ? "Unlocking…" : observatory.submit}
                    </button>
                  </div>
                  {error && (
                    <p className="mt-2 text-left text-[0.85rem] text-red-400/90">
                      Please enter a valid email so your key reaches you.
                    </p>
                  )}
                  <p className="mt-3 text-left text-[0.82rem] leading-relaxed text-[#a39c8c]">
                    {observatory.consent}
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="unlocked"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mt-7 flex justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#cba56e]/40 bg-[#cba56e]/10">
                    <LockKeyOpen size={24} className="text-[#cba56e]" />
                  </span>
                </div>

                <h2 className="mt-7 text-balance font-display text-[2rem] font-light leading-[1.14] tracking-[-0.02em] sm:text-5xl">
                  {observatory.successHeading}
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#a39c8c]">
                  {observatory.successBody}
                </p>

                <div className="mx-auto mt-9 max-w-xl rounded-card border border-[#cba56e]/30 bg-[#1c1a14]/70 p-8">
                  <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#cba56e]">
                    Question one of seven
                  </p>
                  <p className="mt-4 font-display text-2xl font-light italic leading-snug text-[#f3efe6] sm:text-[1.7rem]">
                    &ldquo;{observatory.firstQuestion}&rdquo;
                  </p>
                </div>

                <p className="mx-auto mt-7 flex max-w-md items-center justify-center gap-2 text-[0.9rem] leading-relaxed text-[#a39c8c]">
                  <Check size={15} className="shrink-0 text-[#cba56e]" />
                  {observatory.successNote}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
