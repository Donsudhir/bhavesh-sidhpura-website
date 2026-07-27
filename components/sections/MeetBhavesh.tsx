import Image from "next/image";
import { ArrowRight, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { Container, Eyebrow } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";
import { meetBhavesh, images } from "@/lib/site";

export function MeetBhavesh() {
  return (
    <section
      id="meet"
      className="scroll-mt-24 border-t border-border py-24 lg:py-32"
    >
      <Container>
        {/* Intro: portrait + who he is */}
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(58%_58%_at_50%_45%,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_70%)] blur-2xl"
              />
              <div className="rounded-[1.75rem] border border-border bg-bg-elevated p-2 shadow-soft">
                <div className="relative aspect-4/5 overflow-hidden rounded-[1.25rem] bg-surface">
                  <Image
                    src={images.meetBhavesh}
                    alt="Bhavesh Sidhpura"
                    fill
                    sizes="(max-width: 1024px) 90vw, 34vw"
                    className="object-cover object-top img-editorial"
                  />
                </div>
              </div>
              {/* Facts chip */}
              <dl className="mt-5 grid grid-cols-2 gap-3">
                {meetBhavesh.facts.map((f) => (
                  <div
                    key={f.k}
                    className="rounded-xl border border-border bg-bg-elevated px-3 py-3"
                  >
                    <dt className="text-[0.62rem] uppercase tracking-[0.16em] text-text-muted">
                      {f.k}
                    </dt>
                    <dd className="mt-1 text-[0.86rem] leading-snug text-text">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>{meetBhavesh.kicker}</Eyebrow>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-6 text-balance font-display text-4xl font-light leading-[1.08] tracking-[-0.02em] text-text sm:text-5xl">
                {meetBhavesh.heading}{" "}
                <span className="font-light text-text">
                  {meetBhavesh.emphasis}
                </span>
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-text-muted">
                {meetBhavesh.lead}
              </p>
            </Reveal>

            <Reveal index={3}>
              <blockquote className="mt-8 border-l-2 border-accent pl-5">
                <p className="font-display text-2xl font-light italic leading-snug text-text">
                  {meetBhavesh.pull}
                </p>
              </blockquote>
            </Reveal>

            <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed text-text-muted">
              {meetBhavesh.body.map((p, i) => (
                <Reveal as="div" index={i} key={i}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal index={1}>
              <div className="mt-9">
                <ButtonLink
                  href={meetBhavesh.ctaHref}
                  variant="secondary"
                  icon={<ArrowRight size={16} weight="bold" />}
                >
                  {meetBhavesh.cta}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Qualifications + Journey */}
        <div className="mt-20 grid gap-14 border-t border-border pt-16 lg:grid-cols-2 lg:gap-20">
          {/* Qualifications */}
          <div>
            <Reveal>
              <Eyebrow>{meetBhavesh.qualifications.label}</Eyebrow>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {meetBhavesh.qualifications.items.map((q, i) => (
                <Reveal as="div" index={i % 2} key={q.name}>
                  <div className="spotlight flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-5 transition-shadow duration-300 hover:shadow-soft">
                    <SealCheck
                      size={26}
                      weight="fill"
                      className="text-accent"
                    />
                    <p className="mt-4 font-display text-[1.15rem] font-normal leading-snug text-text">
                      {q.name}
                    </p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-text-muted">
                      {q.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Journey */}
          <div>
            <Reveal>
              <Eyebrow>{meetBhavesh.journey.label}</Eyebrow>
            </Reveal>
            <ol className="mt-8 space-y-0">
              {meetBhavesh.journey.items.map((it, i) => (
                <Reveal as="li" index={i} key={it.marker}>
                  <div className="relative flex gap-5 pb-8 pl-6 last:pb-0">
                    {/* rail */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-2 h-full w-px bg-border last:hidden"
                    />
                    <span
                      aria-hidden
                      className="absolute -left-0.75 top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-bg"
                    />
                    <div>
                      <p className="font-display text-lg font-light text-text">
                        {it.marker}
                      </p>
                      <p className="mt-1.5 max-w-md text-[0.98rem] leading-relaxed text-text-muted">
                        {it.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
