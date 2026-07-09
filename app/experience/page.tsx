import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Diagnostic } from "@/components/sections/Diagnostic";
import { PossibilityMap } from "@/components/sections/PossibilityMap";
import { Transformations } from "@/components/sections/Transformations";
import { Observatory } from "@/components/sections/Observatory";
import { ClosingCta } from "@/components/sections/ClosingCta";

export const metadata: Metadata = {
  title: "The Experience",
  description:
    "Before you book, feel it. A reality diagnostic, a possibility map, and a quiet room most visitors never open — explore the work without leaving the page.",
};

export default function ExperiencePage() {
  return (
    <main>
      <PageHero
        kicker="The Experience"
        heading="Before you book,"
        emphasis="feel it."
        lead="Three ways in. Name a pattern you have never seen named. Follow one question down to where it actually begins. Then step into the room most people never open."
      />
      <Diagnostic />
      <PossibilityMap />
      <Transformations />
      <Observatory />
      <ClosingCta primaryLabel="Book a session" secondaryLabel="Read sessions" secondaryHref="/sessions" />
    </main>
  );
}
