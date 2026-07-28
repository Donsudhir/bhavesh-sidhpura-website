import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { services, servicesHeading } from "@/lib/site";

export function Services() {
  return (
    <section id="sessions" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
              {servicesHeading.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">
              {servicesHeading.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="article" index={i % 3} key={s.id}>
              <div className="group flex h-full flex-col">
                <span className="font-display text-base font-light text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-2xl font-normal leading-snug text-text sm:text-[1.65rem]">
                  {s.name}
                </h3>
                <p className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-text-muted">
                  {s.what}
                </p>

                <p className="mt-6 text-[0.9rem] text-text-muted">
                  <span className="uppercase tracking-[0.14em] text-text-muted/80">
                    Length
                  </span>
                  <span className="mt-1 block text-text">{s.length}</span>
                </p>

                <Link
                  href={s.ctaHref}
                  className="mt-8 inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-[0.95rem] font-medium text-text transition-colors hover:text-accent"
                >
                  {s.cta}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
