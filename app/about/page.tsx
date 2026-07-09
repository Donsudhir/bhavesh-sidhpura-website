import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { ButtonLink } from "@/components/ui/Button";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { about, images } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bhavesh Sidhpura — a Pune businessman who found another way, now a certified Access Consciousness facilitator. His qualifications, journey, and the man behind the work.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero kicker={about.kicker} heading={about.heading} lead={about.lead} />

      {/* Bio + portrait + facts */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-28">
              <div className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(58%_58%_at_50%_42%,color-mix(in_oklab,var(--accent)_20%,transparent),transparent_70%)] blur-2xl"
                />
                <div className="rounded-[1.75rem] border border-border bg-bg-elevated p-2 shadow-soft">
                  <PhotoSlot
                    src={images.aboutPortrait}
                    alt="Bhavesh Sidhpura, businessman and Access Consciousness facilitator"
                    label="Main portrait — editorial B&W, calm, eye to camera"
                    ratio="3/4"
                    priority
                    sizes="(max-width: 1024px) 90vw, 38vw"
                  />
                </div>
              </div>
            </Reveal>
            <div className="max-w-[60ch]">
              {about.bio.map((p, i) => (
                <Reveal as="div" index={i} key={i}>
                  <p
                    className={`text-lg leading-relaxed text-text-muted ${i === 0 ? "font-display text-2xl font-light leading-snug text-text sm:text-[1.7rem]" : "mt-6"}`}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}

              <Reveal index={2}>
                <blockquote className="mt-8 border-l-2 border-accent pl-5">
                  <p className="font-display text-xl font-light italic leading-snug text-text sm:text-2xl">
                    {about.pullQuote}
                  </p>
                </blockquote>
              </Reveal>

              <Reveal index={2}>
                <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-border pt-10">
                  {about.facts.map((f) => (
                    <div key={f.k}>
                      <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-text-muted">
                        {f.k}
                      </dt>
                      <dd className="mt-1.5 font-display text-lg text-text">
                        {f.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Qualifications & certifications */}
      <section className="border-t border-border bg-surface py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <Eyebrow>{about.qualifications.label}</Eyebrow>
              </Reveal>
              <Reveal index={1}>
                <h2 className="mt-6 text-balance font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-[2.7rem]">
                  {about.qualifications.heading}
                </h2>
              </Reveal>
              <Reveal index={2}>
                <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-text-muted">
                  {about.qualifications.intro}
                </p>
              </Reveal>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {about.qualifications.items.map((q, i) => (
                  <Reveal as="div" index={i % 2} key={q.name}>
                    <div className="spotlight flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-6 transition-shadow duration-300 hover:shadow-soft">
                      <SealCheck size={28} weight="fill" className="text-accent" />
                      <p className="mt-4 font-display text-[1.2rem] font-normal leading-snug text-text">
                        {q.name}
                      </p>
                      <p className="mt-2 text-[0.92rem] leading-relaxed text-text-muted">
                        {q.note}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal index={1}>
                <div className="mt-4 flex flex-col gap-5 rounded-2xl border border-accent/30 bg-bg-elevated p-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-[0.98rem] leading-relaxed text-text-muted">
                    {about.qualifications.directory}
                  </p>
                  <ButtonLink
                    href={about.qualifications.directoryHref}
                    variant="secondary"
                    icon={<ArrowUpRight size={16} weight="bold" />}
                    className="shrink-0"
                  >
                    {about.qualifications.directoryCta}
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Beliefs */}
      <section className="border-t border-border py-24 lg:py-28">
        <Container>
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
              {about.beliefHeading}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-3">
            {about.beliefs.map((b, i) => (
              <Reveal as="div" index={i} key={b.title}>
                <div className="flex h-full flex-col bg-bg p-8 lg:p-10">
                  <span className="font-display text-base font-light text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-6 font-display text-[1.4rem] font-light leading-[1.3] text-text">
                    {b.title}
                  </p>
                  <p className="mt-4 text-[1rem] leading-relaxed text-text-muted">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Journey timeline */}
      <section className="border-t border-border bg-surface py-24 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>{about.journey.label}</Eyebrow>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-6 text-balance font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
                {about.journey.heading}
              </h2>
            </Reveal>
          </div>

          <ol className="mt-14">
            {about.journey.items.map((it, i) => (
              <Reveal as="li" index={i} key={it.marker}>
                <div className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8">
                  <div className="pt-1 sm:text-right">
                    <span className="font-display text-xl font-light text-accent">
                      {it.marker}
                    </span>
                  </div>
                  <div className="relative border-l border-border pb-10 pl-6 last:pb-0">
                    <span
                      aria-hidden
                      className="absolute -left-1.25 top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-surface"
                    />
                    <p className="max-w-2xl text-[1.05rem] leading-relaxed text-text-muted">
                      {it.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal index={1}>
            <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="font-display text-2xl font-light text-text">
                {about.ctaHeading}
              </p>
              <ButtonLink
                href="/experience"
                variant="secondary"
                icon={<ArrowRight size={16} weight="bold" />}
              >
                Explore the work
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <ClosingCta secondaryLabel="See sessions" secondaryHref="/sessions" />
    </main>
  );
}
