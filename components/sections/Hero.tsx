import Image from "next/image";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { hero, images } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft radial glow behind the question — the "doorway" feeling */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(75%_55%_at_50%_0%,color-mix(in_oklab,var(--accent)_14%,transparent),transparent_70%)]"
      />

      <Container className="grid min-h-dvh grid-cols-1 items-center gap-10 pb-16 pt-28 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-20 lg:pt-24">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-text-muted">
              <span className="h-px w-7 bg-accent" aria-hidden />
              {hero.kicker}
            </span>
          </Reveal>

          <Reveal index={1}>
            <h1 className="mt-6 text-balance font-display text-[2.15rem] font-light leading-[1.08] tracking-[-0.02em] text-text sm:mt-7 sm:text-5xl lg:text-[4.1rem] lg:leading-[1.06]">
              {hero.question}{" "}
              <span className="italic text-accent">
                {hero.questionEmphasis}
              </span>
            </h1>
          </Reveal>

          <Reveal index={2}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-text-muted">
              {hero.subhead}
            </p>
          </Reveal>

          <Reveal index={3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/#recognition">{hero.primaryCta}</ButtonLink>
              <ButtonLink href="/#booking" variant="secondary" className="gap-2">
                {hero.secondaryCta}
                <CalendarBlank size={16} />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal index={4}>
            <div className="mt-12 max-w-md border-l-2 border-accent/40 pl-5">
              <p className="text-[0.97rem] leading-relaxed text-text-muted">
                {hero.hint}
              </p>
              <p className="mt-4 font-display text-base font-light italic text-text-muted/80">
                {hero.whisper}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal index={2} className="relative">
          <div className="relative aspect-4/5 w-full max-h-[60vh] overflow-hidden rounded-card bg-surface sm:max-h-none">
            <Image
              src={images.heroPortrait}
              alt="Portrait of Bhavesh Sidhpura"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
