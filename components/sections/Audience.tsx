import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { audience } from "@/lib/site";

export function Audience() {
  return (
    <section className="border-t border-border bg-surface py-24 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
            {audience.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-3">
          {audience.columns.map((c, i) => (
            <Reveal as="div" index={i} key={c.title}>
              <div className="flex h-full flex-col bg-bg p-8 lg:p-10">
                <span className="font-display text-2xl font-light text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-normal leading-snug text-text">
                  {c.title}
                </h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-text-muted">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
