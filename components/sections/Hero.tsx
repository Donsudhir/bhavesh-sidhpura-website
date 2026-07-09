import Image from "next/image";
import {
  ArrowUpRight,
  CalendarBlank,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Marquee } from "../ui/Marquee";
import { hero, heroTrust, images } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Warm doorway glow, top-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_-8%,color-mix(in_oklab,var(--accent)_16%,transparent),transparent_68%)]"
      />

      <Container className="grid min-h-[calc(100dvh-72px)] grid-cols-1 items-center gap-14 pb-16 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-20">
        {/* Left — the message */}
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-elevated/60 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-text-muted backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {hero.kicker}
            </span>
          </Reveal>

          <Reveal index={1}>
            <h1 className="mt-7 text-balance font-display text-[2.5rem] font-light leading-[1.05] tracking-[-0.02em] text-text sm:text-5xl lg:text-[3.9rem] lg:leading-[1.03]">
              {hero.question}{" "}
              <span className="italic text-accent">
                {hero.questionEmphasis}
              </span>
            </h1>
          </Reveal>

          <Reveal index={2}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-text-muted">
              {hero.subhead}
            </p>
          </Reveal>

          <Reveal index={3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href="/experience"
                icon={<ArrowUpRight size={16} weight="bold" />}
              >
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink href="/book" variant="secondary" className="gap-2">
                <CalendarBlank size={16} />
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal index={4}>
            <div className="mt-10 flex items-center gap-3 border-t border-border pt-7">
              <SealCheck
                size={22}
                weight="fill"
                className="shrink-0 text-accent"
              />
              <p className="text-[0.9rem] leading-snug text-text-muted">
                Certified by Access Consciousness.{" "}
                <span className="text-text">
                  Sessions &amp; classes in Pune, India.
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right — the portrait, framed like machined hardware */}
        <Reveal index={2} className="relative mx-auto w-full max-w-md lg:mx-0">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.75rem] bg-[radial-gradient(58%_58%_at_50%_42%,color-mix(in_oklab,var(--accent)_30%,transparent),transparent_70%)] blur-2xl"
          />
          <div className="rounded-4xl border border-border bg-bg-elevated p-2 shadow-lift">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-surface">
              <Image
                src={images.heroPortrait}
                alt="Portrait of Bhavesh Sidhpura"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-top img-editorial"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent"
              />
            </div>
          </div>

          {/* Floating whisper chip */}
          <div className="absolute -bottom-5 left-4 max-w-60 rounded-2xl border border-border bg-bg-elevated/90 px-4 py-3 shadow-soft backdrop-blur-sm sm:left-6">
            <p className="font-display text-[0.98rem] font-light italic leading-snug text-text">
              &ldquo;{hero.whisper}&rdquo;
            </p>
          </div>
        </Reveal>
      </Container>

      {/* Trust ticker — a quiet, flashy underline to the hero */}
      <div className="border-y border-border bg-surface/60 py-4">
        <Marquee>
          {heroTrust.map((t) => (
            <span
              key={t}
              className="mx-6 inline-flex items-center gap-6 text-[0.82rem] uppercase tracking-[0.16em] text-text-muted"
            >
              {t}
              <span className="h-1 w-1 rounded-full bg-accent/60" aria-hidden />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
