import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { services, images } from "@/lib/site";

export function Services() {
  return (
    <section id="sessions" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
              Four ways to work with me.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">
              All in person, in Pune, or wherever I am travelling.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal as="article" index={i % 2} key={s.id}>
              <div
                className={`group flex h-full flex-col overflow-hidden rounded-card border transition-colors ${
                  s.featured
                    ? "border-accent/40 bg-surface"
                    : "border-border bg-bg-elevated hover:border-border-strong"
                }`}
              >
                {s.featured && (
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={images.delivering}
                      alt="Bhavesh delivering an Access Bars session"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-on-accent">
                      Most booked
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="font-display text-2xl font-normal leading-snug text-text">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-[1.02rem] leading-relaxed text-text-muted">
                    {s.what}
                  </p>

                  <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[0.92rem]">
                    <div>
                      <dt className="text-text-muted">Length</dt>
                      <dd className="mt-0.5 text-text">{s.length}</dd>
                    </div>
                    <div>
                      <dt className="text-text-muted">Price</dt>
                      <dd className="mt-0.5 text-text">{s.price}</dd>
                    </div>
                  </dl>

                  <Link
                    href={s.ctaHref}
                    className="mt-7 inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-[0.95rem] font-medium text-text transition-colors hover:text-accent"
                  >
                    {s.cta}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-[0.9rem] italic text-text-muted">
            All prices shown as &ldquo;starting from&rdquo;. Exact pricing
            confirmed at booking.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
