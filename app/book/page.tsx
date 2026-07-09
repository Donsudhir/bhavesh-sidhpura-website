import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Booking } from "@/components/sections/Booking";
import { bookPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book a 1:1 Access Bars session in Pune, or send a note. No long forms, no pressure.",
};

export default function BookPage() {
  return (
    <main>
      <PageHero kicker={bookPage.kicker} heading={bookPage.heading} lead={bookPage.lead} />
      <Booking />
    </main>
  );
}
