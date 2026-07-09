import { ArrowUpRight, Compass } from "@phosphor-icons/react/dist/ssr";
import { Container, Eyebrow } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";
import { experienceTeaser } from "@/lib/site";

export function ExperienceTeaser() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_0%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_70%)]"
      />
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>{experienceTeaser.kicker}</Eyebrow>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-6 text-balance font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
                {experienceTeaser.heading}
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
                {experienceTeaser.body}
              </p>
            </Reveal>
          </div>
          <Reveal index={2}>
            <ButtonLink
              href={experienceTeaser.ctaHref}
              icon={<ArrowUpRight size={16} weight="bold" />}
            >
              {experienceTeaser.cta}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {experienceTeaser.items.map((it, i) => (
            <Reveal as="article" index={i} key={it.title}>
              <div className="spotlight group flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-7 transition-shadow duration-300 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <Compass size={24} weight="light" className="text-accent" />
                  <span className="font-display text-sm font-light text-text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[1.3rem] font-normal leading-snug text-text">
                  {it.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-text-muted">
                  {it.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
