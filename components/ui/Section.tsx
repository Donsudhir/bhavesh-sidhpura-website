import type { ReactNode } from "react";
import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";

type Rhythm = "compact" | "default" | "roomy";
type Tone = "bg" | "surface" | "ink";

const rhythmY: Record<Rhythm, string> = {
  compact: "py-16 lg:py-20",
  default: "py-24 lg:py-32",
  roomy: "py-28 lg:py-40",
};

const toneClass: Record<Tone, string> = {
  bg: "bg-bg text-text",
  surface: "bg-surface text-text",
  ink: "bg-[#14120e] text-[#f3efe6]",
};

/* One consistent section wrapper so every band on the site shares the same
   horizontal padding, max-width and vertical rhythm. Alignment stops drifting. */
export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  rhythm = "default",
  tone = "bg",
  divider = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  rhythm?: Rhythm;
  tone?: Tone;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative ${id ? "scroll-mt-24 " : ""}${
        divider ? "border-t border-border " : ""
      }${toneClass[tone]} ${rhythmY[rhythm]} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/* A consistent, left-aligned section header. Keeps eyebrow → heading → lead
   rhythm identical everywhere. `align="center"` for the few centered beats. */
export function SectionHeader({
  eyebrow,
  heading,
  emphasis,
  lead,
  align = "start",
  className = "",
  headingClassName = "",
}: {
  eyebrow?: string;
  heading: ReactNode;
  emphasis?: string;
  lead?: ReactNode;
  align?: "start" | "center";
  className?: string;
  headingClassName?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow ? (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal index={eyebrow ? 1 : 0}>
        <h2
          className={`${eyebrow ? "mt-6 " : ""}text-balance font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl ${headingClassName}`}
        >
          {heading}
          {emphasis ? (
            <span className="italic text-accent"> {emphasis}</span>
          ) : null}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal index={eyebrow ? 2 : 1}>
          <p
            className={`mt-6 ${centered ? "mx-auto" : ""} max-w-xl text-lg leading-relaxed text-text-muted`}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
