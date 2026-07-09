import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Audience } from "@/components/sections/Audience";
import { Services } from "@/components/sections/Services";
import { Steps } from "@/components/sections/Steps";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "Access Bars and Body Process sessions in Pune. What to expect, who it is for, what it costs, and answers to the questions everyone asks first.",
};

export default function SessionsPage() {
  return (
    <main>
      <PageHero
        kicker="Sessions"
        heading="The work, in person."
        emphasis="One quiet hour at a time."
        lead="No belief required, no spiritual performance. You lie back, fully clothed, and let something underneath the decisions begin to move. Here is exactly how it works."
      />
      <Audience />
      <Services />
      <Steps />
      <Faq />
      <ClosingCta secondaryLabel="See class dates" secondaryHref="/classes" />
    </main>
  );
}
