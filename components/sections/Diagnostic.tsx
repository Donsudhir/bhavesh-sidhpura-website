"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, LockSimple } from "@phosphor-icons/react";
import { Container, Eyebrow } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { diagnostic, type PatternKey } from "@/lib/site";

type Stage = "intro" | "quiz" | "result";

export function Diagnostic() {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [tally, setTally] = useState<Record<PatternKey, number>>({
    control: 0,
    worth: 0,
    belonging: 0,
  });

  const total = diagnostic.questions.length;

  function choose(weight: PatternKey) {
    const next = { ...tally, [weight]: tally[weight] + 1 };
    setTally(next);
    if (step + 1 < total) {
      setStep(step + 1);
    } else {
      setStage("result");
    }
  }

  function restart() {
    setTally({ control: 0, worth: 0, belonging: 0 });
    setStep(0);
    setStage("intro");
  }

  const dominant = (Object.keys(tally) as PatternKey[]).reduce((a, b) =>
    tally[a] >= tally[b] ? a : b,
  );
  const pattern = diagnostic.patterns[dominant];

  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section
      id="diagnostic"
      className="scroll-mt-24 border-t border-border py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            {stage === "intro" && (
              <motion.div key="intro" {...fade} className="text-center">
                <div className="flex justify-center">
                  <Eyebrow>{diagnostic.label}</Eyebrow>
                </div>
                <h2 className="mt-6 text-balance font-display text-4xl font-light leading-[1.12] tracking-[-0.02em] text-text sm:text-5xl">
                  {diagnostic.heading}
                </h2>
                <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-text-muted">
                  {diagnostic.intro}
                </p>
                <button
                  type="button"
                  onClick={() => setStage("quiz")}
                  className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-btn-bg px-7 py-3.5 text-[0.95rem] font-medium text-btn-fg transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.98]"
                >
                  {diagnostic.start}
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            )}

            {stage === "quiz" && (
              <motion.div key={`q-${step}`} {...fade}>
                <div className="flex items-center justify-between">
                  <span className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-text-muted">
                    {String(step + 1).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </span>
                  <div className="flex gap-1 sm:gap-1.5" aria-hidden>
                    {diagnostic.questions.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1 w-5 rounded-full transition-colors duration-300 sm:w-6 ${
                          i <= step ? "bg-accent" : "bg-border-strong"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="mt-8 text-balance font-display text-[1.7rem] font-light leading-[1.2] tracking-[-0.01em] text-text sm:text-4xl sm:leading-[1.18]">
                  {diagnostic.questions[step].text}
                </h3>

                <div className="mt-9 flex flex-col gap-3">
                  {diagnostic.questions[step].options.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => choose(opt.weight)}
                      className="group flex items-center justify-between gap-4 rounded-card border border-border bg-bg-elevated px-6 py-5 text-left text-[1.08rem] leading-snug text-text transition-colors duration-200 hover:border-accent hover:bg-surface"
                    >
                      <span>{opt.label}</span>
                      <ArrowRight
                        size={18}
                        className="shrink-0 text-text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:text-accent"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {stage === "result" && (
              <motion.div key="result" {...fade}>
                <div className="flex justify-center">
                  <Eyebrow>What surfaced</Eyebrow>
                </div>
                <h3 className="mt-6 text-balance text-center font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
                  {pattern.name}
                </h3>
                <p className="mx-auto mt-7 max-w-xl text-center text-lg leading-relaxed text-text-muted">
                  {pattern.reveal}
                </p>

                <blockquote className="mx-auto mt-10 max-w-xl border-l-2 border-accent pl-6">
                  <p className="font-display text-2xl font-light italic leading-snug text-text">
                    {pattern.question}
                  </p>
                </blockquote>

                <div className="mx-auto mt-10 max-w-xl rounded-card border border-dashed border-border-strong bg-surface p-7">
                  <div className="flex items-start gap-3">
                    <LockSimple
                      size={20}
                      className="mt-0.5 shrink-0 text-accent"
                      weight="fill"
                    />
                    <p className="text-[1.02rem] leading-relaxed text-text-muted">
                      {diagnostic.lockedTeaser}
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <ButtonLink href="/book">
                    {diagnostic.resultCta}
                  </ButtonLink>
                  <button
                    type="button"
                    onClick={restart}
                    className="text-[0.95rem] font-medium text-text-muted transition-colors hover:text-text"
                  >
                    {diagnostic.restart}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
