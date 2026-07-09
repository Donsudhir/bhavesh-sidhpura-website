import { Hero } from "@/components/sections/Hero";
import { MeetBhavesh } from "@/components/sections/MeetBhavesh";
import { Recognition } from "@/components/sections/Recognition";
import { Services } from "@/components/sections/Services";
import { Steps } from "@/components/sections/Steps";
import { Transformations } from "@/components/sections/Transformations";
import { MostNeverTry } from "@/components/sections/MostNeverTry";
import { Circle } from "@/components/sections/Circle";
import { ExperienceTeaser } from "@/components/sections/ExperienceTeaser";
import { ClosingCta } from "@/components/sections/ClosingCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <MeetBhavesh />
      <Recognition />
      <Services />
      <Steps />
      <Transformations />
      <MostNeverTry />
      <Circle />
      <ExperienceTeaser />
      <ClosingCta />
    </main>
  );
}
