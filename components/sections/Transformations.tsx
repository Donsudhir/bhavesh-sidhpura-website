import { Container, Eyebrow } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { transformations } from "@/lib/site";

export function Transformations() {
  return (
    <section
      id="transformations"
      className="scroll-mt-24 border-t border-border py-24 lg:py-32"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>{transformations.label}</Eyebrow>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-6 text-balance font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
                {transformations.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal index={2}>
            <p className="max-w-sm text-[0.98rem] leading-relaxed text-text-muted">
              {transformations.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {transformations.explorers.map((ex, i) => (
            <Reveal as="article" index={i} key={ex.id}>
              <article className="flex h-full flex-col rounded-card border border-border bg-bg-elevated p-7 lg:p-8">
                <header className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-normal text-text">
                    {ex.label}
                  </h3>
                  <span className="font-display text-3xl font-light text-accent/40">
                    #{ex.id}
                  </span>
                </header>
                <p className="mt-1 text-[0.8rem] uppercase tracking-[0.18em] text-text-muted">
                  {ex.context}
                </p>

                <ol className="relative mt-8 flex-1 space-y-7 border-l border-border pl-6">
                  {ex.timeline.map((t) => (
                    <li key={t.day} className="relative">
                      <span
                        aria-hidden
                        className="absolute left-[-1.6rem] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-bg-elevated"
                      />
                      <p className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-accent">
                        {t.day}
                      </p>
                      <p className="mt-1.5 text-[1.02rem] leading-relaxed text-text">
                        {t.note}
                      </p>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal index={1}>
          <p className="mt-10 text-[0.85rem] italic leading-relaxed text-text-muted">
            {transformations.disclaimer}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
