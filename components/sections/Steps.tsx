import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { steps } from "@/lib/site";

export function Steps() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <Container>
        <Reveal>
          <Eyebrow>{steps.label}</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
            {steps.heading}
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.items.map((step, i) => (
            <Reveal as="li" index={i} key={step.title}>
              <div className="border-t border-border-strong pt-6">
                <span className="font-display text-5xl font-extralight text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-normal text-text">
                  {step.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
