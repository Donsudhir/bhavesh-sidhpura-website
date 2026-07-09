import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container, Eyebrow } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { circle } from "@/lib/site";

export function Circle() {
  return (
    <section
      id="circle"
      className="scroll-mt-24 border-t border-border bg-surface py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>{circle.label}</Eyebrow>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-6 text-balance font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
                {circle.heading}
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-text-muted">
                {circle.body}
              </p>
            </Reveal>
            <Reveal index={3}>
              <p className="mt-10 font-display text-base font-light italic text-text-muted/80">
                {circle.whisper}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center">
            <ul className="space-y-px overflow-hidden rounded-card border border-border bg-border">
              {circle.values.map((v, i) => (
                <Reveal as="li" index={i} key={i}>
                  <div className="flex items-start gap-4 bg-bg p-7">
                    <span className="mt-1 font-display text-base font-light text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[1.08rem] leading-relaxed text-text">
                      {v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal index={1}>
              <div className="mt-9 rounded-card border border-accent/30 bg-bg-elevated p-8">
                <p className="font-display text-xl font-light leading-snug text-text">
                  {circle.invitation}
                </p>
                <div className="mt-6">
                  <ButtonLink
                    href="/book"
                    icon={<ArrowRight size={16} weight="bold" />}
                  >
                    {circle.cta}
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
