import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Recognition } from "@/components/sections/Recognition";
import { Diagnostic } from "@/components/sections/Diagnostic";
import { Story } from "@/components/sections/Story";
import { PossibilityMap } from "@/components/sections/PossibilityMap";
import { Services } from "@/components/sections/Services";
import { Audience } from "@/components/sections/Audience";
import { Steps } from "@/components/sections/Steps";
import { Transformations } from "@/components/sections/Transformations";
import { MostNeverTry } from "@/components/sections/MostNeverTry";
import { Circle } from "@/components/sections/Circle";
import { Observatory } from "@/components/sections/Observatory";
import { Credentials } from "@/components/sections/Credentials";
import { Faq } from "@/components/sections/Faq";
import { Booking } from "@/components/sections/Booking";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Recognition />
        <Diagnostic />
        <Story />
        <PossibilityMap />
        <Transformations />
        <MostNeverTry />
        <Audience />
        <Steps />
        <Services />
        <Circle />
        <Observatory />
        <Credentials />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
