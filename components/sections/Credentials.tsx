import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { credentials } from "@/lib/site";

export function Credentials() {
  return (
    <section className="border-t border-border py-16">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <SealCheck
                size={32}
                weight="regular"
                className="mt-0.5 shrink-0 text-accent"
              />
              <div>
                <p className="font-display text-xl font-normal text-text">
                  {credentials.heading}
                </p>
                <p className="mt-1.5 max-w-md text-[0.95rem] leading-relaxed text-text-muted">
                  {credentials.directory}
                </p>
              </div>
            </div>

            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {credentials.certs.map((c) => (
                <li
                  key={c}
                  className="text-[0.95rem] text-text-muted [&:not(:first-child)]:border-l [&:not(:first-child)]:border-border [&:not(:first-child)]:pl-8"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
