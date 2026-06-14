import { Container, Eyebrow } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { recognition } from "@/lib/site";

export function Recognition() {
  return (
    <section
      id="recognition"
      className="scroll-mt-24 border-t border-border py-24 lg:py-32"
    >
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{recognition.label}</Eyebrow>
          </Reveal>
          <Reveal index={1}>
            <h2 className="mt-6 text-balance font-display text-4xl font-light leading-[1.12] tracking-[-0.02em] text-text sm:text-5xl">
              {recognition.heading}
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-text-muted">
              {recognition.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-3">
          {recognition.questions.map((item, i) => (
            <Reveal as="div" index={i} key={item.area}>
              <div className="group flex h-full flex-col bg-bg p-8 transition-colors duration-500 hover:bg-bg-elevated lg:p-10">
                <span className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-accent">
                  {item.area}
                </span>
                <p className="mt-6 font-display text-[1.45rem] font-light leading-[1.3] text-text">
                  {item.q}
                </p>
                <span
                  aria-hidden
                  className="mt-8 h-px w-10 bg-border-strong transition-all duration-500 group-hover:w-full group-hover:bg-accent"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal index={1}>
          <p className="mx-auto mt-16 max-w-2xl text-balance text-center font-display text-[1.6rem] font-light italic leading-snug text-text sm:text-[1.7rem]">
            {recognition.closer}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
