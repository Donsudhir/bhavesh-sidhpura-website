import { Container } from "./Container";
import { Reveal } from "./Reveal";

/* Premium, consistent page header for sub-pages.
   Quiet, editorial, generous whitespace. One serif headline + optional lead.
   Shares the pill-badge kicker language with the home hero. */
export function PageHero({
  kicker,
  heading,
  emphasis,
  lead,
}: {
  kicker: string;
  heading: string;
  emphasis?: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_-10%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_72%)]"
      />
      <Container className="pb-16 pt-32 lg:pb-20 lg:pt-40">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-elevated/60 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-text-muted backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {kicker}
            </span>
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-7 text-balance font-display text-[2.5rem] font-light leading-[1.05] tracking-[-0.02em] text-text sm:text-6xl lg:text-[4.25rem]">
              {heading}
              {emphasis ? <span className="italic text-accent"> {emphasis}</span> : null}
            </h1>
          </Reveal>
          {lead ? (
            <Reveal index={2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-muted">
                {lead}
              </p>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
