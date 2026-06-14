import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { classesPage } from "@/lib/classes";
import { site, ctas, images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Access Bars and Access Energetic Facelift certification classes in Pune, and across India on request.",
};

const statusStyles: Record<string, string> = {
  Open: "text-accent border-accent/40",
  "Few seats": "text-text border-border-strong",
  Waitlist: "text-text-muted border-border",
};

export default function ClassesPage() {
  const { intro, offerings, schedule } = classesPage;

  return (
    <>
      <Nav />
      <main>
        {/* Intro */}
        <section className="border-b border-border pb-20 pt-32 lg:pb-24">
          <Container>
            <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <Reveal>
                  <Eyebrow>{intro.label}</Eyebrow>
                  <h1 className="mt-6 font-display text-5xl font-light leading-[1.05] tracking-[-0.02em] text-text sm:text-6xl">
                    {intro.heading}
                  </h1>
                  <p className="mt-7 max-w-lg text-lg leading-relaxed text-text-muted">
                    {intro.body}
                  </p>
                </Reveal>
              </div>
              <Reveal index={1}>
                <div className="relative aspect-[7/5] w-full overflow-hidden rounded-card bg-surface">
                  <Image
                    src={images.classroom}
                    alt="A class in session"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Offerings */}
        <section className="py-24 lg:py-28">
          <Container>
            <div className="grid gap-5 lg:grid-cols-2">
              {offerings.map((o, i) => (
                <Reveal as="article" index={i} key={o.id}>
                  <div className="flex h-full flex-col rounded-card border border-border bg-bg-elevated p-8 lg:p-10">
                    <div className="flex items-baseline justify-between gap-4">
                      <h2 className="font-display text-3xl font-normal leading-tight text-text">
                        {o.name}
                      </h2>
                    </div>
                    <p className="mt-4 text-[1.05rem] leading-relaxed text-text-muted">
                      {o.summary}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-x-10 gap-y-2 border-y border-border py-5 text-[0.95rem]">
                      <div>
                        <p className="text-text-muted">Duration</p>
                        <p className="mt-0.5 text-text">{o.duration}</p>
                      </div>
                      <div>
                        <p className="text-text-muted">Investment</p>
                        <p className="mt-0.5 text-text">{o.price}</p>
                      </div>
                    </div>

                    <ul className="mt-7 flex-1 space-y-3">
                      {o.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-3">
                          <Check
                            size={18}
                            weight="bold"
                            className="mt-1 shrink-0 text-accent"
                          />
                          <span className="text-[1rem] leading-relaxed text-text-muted">
                            {inc}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <ButtonLink
                      href={site.whatsapp.link}
                      variant="secondary"
                      className="mt-8 self-start"
                    >
                      Ask about this class
                    </ButtonLink>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Schedule */}
        <section className="border-t border-border bg-surface py-24 lg:py-28">
          <Container>
            <Reveal>
              <h2 className="font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
                Upcoming dates
              </h2>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-text-muted">
                New dates are added regularly. If nothing below suits you,
                message me and we will find a time.
              </p>
            </Reveal>

            <ul className="mt-12 border-t border-border-strong">
              {schedule.map((row, i) => (
                <Reveal as="li" index={i} key={`${row.city}-${row.klass}-${i}`}>
                  <div className="flex flex-col gap-3 border-b border-border py-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-baseline gap-5">
                      <span className="w-28 font-display text-xl text-text">
                        {row.city}
                      </span>
                      <span className="text-[0.95rem] text-text-muted">
                        Access {row.klass} Class
                      </span>
                    </div>
                    <div className="flex items-center gap-5">
                      <span className="text-[0.95rem] text-text-muted">
                        {row.dateLabel}
                      </span>
                      <span
                        className={`rounded-full border px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.12em] ${statusStyles[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal>
              <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/#booking">{ctas.primary}</ButtonLink>
                <ButtonLink href={site.whatsapp.link} variant="secondary">
                  {ctas.whatsapp}
                </ButtonLink>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
