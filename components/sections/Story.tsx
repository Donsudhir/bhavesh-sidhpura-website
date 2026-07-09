import Image from "next/image";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { AudioPlayer } from "../ui/AudioPlayer";
import { story, images } from "@/lib/site";

export function Story() {
  const [first, ...rest] = story.paragraphs;
  const beforeQuote = rest.slice(0, 3);
  const afterQuote = rest.slice(3);

  return (
    <section id="story" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>{story.label}</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] tracking-[-0.02em] text-text sm:text-5xl">
                {story.heading}
              </h2>
            </Reveal>
            <Reveal index={1}>
              <div className="relative mt-10 aspect-4/5 w-full max-w-sm overflow-hidden rounded-card bg-surface">
                <Image
                  src={images.contemplative}
                  alt="Bhavesh Sidhpura, looking away"
                  fill
                  sizes="(max-width: 1024px) 90vw, 32vw"
                  className="object-cover object-top img-editorial"
                />
              </div>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-8">
                {story.audioSrc ? (
                  <AudioPlayer src={story.audioSrc} label={story.audioLabel} />
                ) : null}
              </div>
            </Reveal>
          </div>

          <div className="max-w-[60ch]">
            <Reveal>
              <p className="font-display text-2xl font-light leading-snug text-text sm:text-[1.7rem]">
                {first}
              </p>
            </Reveal>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-text-muted">
              {beforeQuote.map((p, i) => (
                <Reveal as="div" index={i} key={i}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <blockquote className="my-12 border-l-2 border-accent pl-6">
                <p className="font-display text-3xl font-light italic leading-[1.25] tracking-[-0.01em] text-text sm:text-[2.1rem]">
                  &ldquo;{story.pullQuote}&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <div className="space-y-6 text-lg leading-relaxed text-text-muted">
              {afterQuote.map((p, i) => (
                <Reveal as="div" index={i} key={i}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
