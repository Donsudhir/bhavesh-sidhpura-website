import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CalendlyEmbed } from "../ui/CalendlyEmbed";
import { EnquiryForm } from "../ui/EnquiryForm";
import { booking, site, images } from "@/lib/site";

export function Booking() {
  return (
    <section id="booking" className="scroll-mt-24 bg-surface py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-4xl">
                A 1:1 session, or just a hello.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-text-muted">
                {booking.body}
              </p>
            </Reveal>

            <Reveal index={1}>
              <div className="relative mt-9 aspect-4/5 w-full max-w-sm overflow-hidden rounded-card bg-bg">
                <Image
                  src={images.warm}
                  alt="Bhavesh Sidhpura"
                  fill
                  sizes="(max-width: 1024px) 90vw, 32vw"
                  className="object-cover object-top img-editorial"
                />
              </div>
            </Reveal>

            <Reveal index={2}>
              <a
                href={site.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-border-strong bg-bg px-6 py-3.5 text-[0.95rem] font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                <WhatsappLogo size={20} weight="fill" className="text-accent" />
                {booking.whatsappPrompt}
              </a>
            </Reveal>
          </div>

          <Reveal index={1}>
            <CalendlyEmbed url={site.calendly} />
          </Reveal>
        </div>

        <Reveal index={1}>
          <div className="mt-8 lg:mt-12 lg:ml-auto lg:max-w-2xl">
            <EnquiryForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
