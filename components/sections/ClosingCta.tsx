import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
/* A quiet, premium closing band. One clear next step.
   Reused at the end of most pages so every journey ends with a doorway. */
export function ClosingCta({
  heading = "When you are ready, there is a door.",
  body = "No pitch, no pressure. A first session, or a message to ask anything at all.",
  primaryLabel = "Book a session",
  primaryHref = "/book",
  secondaryLabel = "About Bhavesh",
  secondaryHref = "/about",
}: {
  heading?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-balance font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
              {heading}
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-text-muted">
              {body}
            </p>
          </Reveal>
          <Reveal index={2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={primaryHref}
                icon={<ArrowRight size={16} weight="bold" />}
              >
                {primaryLabel}
              </ButtonLink>
              <ButtonLink href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
