import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { mostNeverTry } from "@/lib/site";

export function MostNeverTry() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-[#14120e] py-28 text-[#f3efe6] lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_60%_at_50%_40%,color-mix(in_oklab,#cba56e_18%,transparent),transparent_70%)]"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#cba56e]">
              <span className="h-px w-7 bg-[#cba56e]" aria-hidden />
              {mostNeverTry.label}
              <span className="h-px w-7 bg-[#cba56e]" aria-hidden />
            </span>
          </Reveal>

          <Reveal index={1}>
            <h2 className="mt-7 text-balance font-display text-[2rem] font-light leading-[1.14] tracking-[-0.02em] sm:text-5xl">
              {mostNeverTry.heading}
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#a39c8c]">
            {mostNeverTry.body.map((p, i) => (
              <Reveal as="div" index={i} key={i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal index={1}>
            <p className="mx-auto mt-12 max-w-2xl font-display text-2xl font-light italic leading-snug text-[#f3efe6] sm:text-[1.8rem]">
              &ldquo;{mostNeverTry.pull}&rdquo;
            </p>
          </Reveal>

          <Reveal index={2}>
            <div className="mt-12">
              <ButtonLink
                href="/about"
                className="bg-[#f3efe6] text-[#14120e] hover:opacity-90"
              >
                {mostNeverTry.cta}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
