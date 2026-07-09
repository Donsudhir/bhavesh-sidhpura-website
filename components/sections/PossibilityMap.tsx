"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUUpLeft, CaretDown } from "@phosphor-icons/react";
import { Container, Eyebrow } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { possibilityMap, type MapNode } from "@/lib/site";

export function PossibilityMap() {
  const reduce = useReducedMotion();
  // path is the chain of chosen nodes from a top-level domain downward
  const [path, setPath] = useState<MapNode[]>([]);

  const current = path[path.length - 1];
  const options: MapNode[] =
    path.length === 0 ? possibilityMap.domains : (current?.children ?? []);
  const atEnd =
    path.length > 0 && (!current?.children || current.children.length === 0);

  function descend(node: MapNode) {
    setPath([...path, node]);
  }
  function back() {
    setPath(path.slice(0, -1));
  }
  function reset() {
    setPath([]);
  }

  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -14 },
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section
      id="map"
      className="scroll-mt-24 border-t border-border bg-surface py-24 lg:py-32"
    >
      <Container>
        <div className="max-w-3xl">
          <div>
            <Eyebrow>{possibilityMap.label}</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
              {possibilityMap.heading}
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-text-muted">
              {possibilityMap.intro}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left: breadcrumb trail of the descent */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-text-muted">
              {path.length === 0 ? possibilityMap.prompt : "Your descent"}
            </p>
            <ol className="mt-5 space-y-2">
              {path.map((node, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="font-display text-sm font-light text-accent"
                    style={{ paddingLeft: i * 14 }}
                  >
                    {i === 0 ? "" : "\u2193"}
                  </span>
                  <span className="font-display text-lg font-light text-text">
                    {node.label}
                  </span>
                </li>
              ))}
              {path.length === 0 && (
                <li className="text-[1.05rem] italic leading-relaxed text-text-muted">
                  Choose a door to begin your descent.
                </li>
              )}
            </ol>

            {path.length > 0 && (
              <div className="mt-7 flex items-center gap-4">
                <button
                  type="button"
                  onClick={back}
                  className="inline-flex items-center gap-2 text-[0.9rem] font-medium text-text-muted transition-colors hover:text-text"
                >
                  <ArrowUUpLeft size={15} /> Up one layer
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="text-[0.9rem] font-medium text-text-muted transition-colors hover:text-text"
                >
                  {possibilityMap.reset}
                </button>
              </div>
            )}
          </div>

          {/* Right: current insight + next doors */}
          <div className="min-h-80">
            <AnimatePresence mode="wait">
              {current && (
                <motion.div
                  key={`insight-${path.length}`}
                  {...fade}
                  className="rounded-card border border-border bg-bg-elevated p-7 lg:p-8"
                >
                  <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-accent">
                    {current.label}
                  </p>
                  <p className="mt-4 font-display text-2xl font-light leading-snug text-text">
                    {current.insight}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {!atEnd && (
              <div className="mt-6">
                {current && (
                  <p className="mb-4 flex items-center gap-2 text-[0.85rem] uppercase tracking-[0.16em] text-text-muted">
                    <CaretDown size={14} /> Go deeper
                  </p>
                )}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`opts-${path.length}`}
                    {...fade}
                    className="flex flex-col gap-3"
                  >
                    {options.map((node) => (
                      <button
                        key={node.label}
                        type="button"
                        onClick={() => descend(node)}
                        className="group flex items-center justify-between gap-4 rounded-card border border-border bg-bg px-6 py-5 text-left transition-colors duration-200 hover:border-accent hover:bg-bg-elevated"
                      >
                        <span className="font-display text-lg font-light text-text">
                          {node.label}
                        </span>
                        <ArrowRight
                          size={18}
                          className="shrink-0 text-text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:text-accent"
                        />
                      </button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            {atEnd && (
              <motion.div
                {...fade}
                className="mt-6 rounded-card border border-accent/30 bg-bg-elevated p-8"
              >
                <p className="text-[1.05rem] leading-relaxed text-text-muted">
                  {possibilityMap.endNote}
                </p>
                <div className="mt-6">
                  <ButtonLink href="/book" className="gap-2">
                    {possibilityMap.endCta}
                    <ArrowRight size={16} />
                  </ButtonLink>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
