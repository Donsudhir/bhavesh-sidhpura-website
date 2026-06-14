"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Container";
import { faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{faqs.label}</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
              The honest answers.
            </h2>
          </div>

          <ul className="border-t border-border">
            {faqs.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl font-normal leading-snug text-text">
                      {item.q}
                    </span>
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-accent">
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[58ch] pb-7 pr-12 text-[1.05rem] leading-relaxed text-text-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
