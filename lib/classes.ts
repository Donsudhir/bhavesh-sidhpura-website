/* Classes sub-page content. Dates are PLACEHOLDER until confirmed. */

export type ClassDate = {
  city: string;
  dateLabel: string;
  klass: "Bars" | "Facelift";
  status: "Open" | "Few seats" | "Waitlist";
};

export const classesPage = {
  intro: {
    label: "Classes",
    heading: "Learn to run the work yourself.",
    body: "A class is different from a session. In a session I run the work on you. In a class, you walk out certified and able to give it to anyone, including yourself.",
  },
  offerings: [
    {
      id: "bars",
      name: "Access Bars Class",
      duration: "One full day",
      price: "Starting from Rs 28,000",
      includes: [
        "Internationally recognised certification",
        "Printed manual and your Bars chart",
        "Two full Bars sessions, given and received",
        "Lifetime ability to gift Bars to family and friends",
      ],
      summary:
        "The foundational class. You learn the 32 points by hand, the theory behind them, and you both give and receive a full session on the day.",
    },
    {
      id: "facelift",
      name: "Access Energetic Facelift Class",
      duration: "One full day",
      price: "Starting from Rs 36,000",
      includes: [
        "Certificate of completion",
        "The full Facelift hand process",
        "Practice rounds, given and received",
        "A process you can repeat at home for yourself and others",
      ],
      summary:
        "A gentle, hands-on process for the face and body. You learn to give the Facelift and to receive it, and you leave able to repeat it on your own.",
    },
  ],
  // PLACEHOLDER schedule. Replace with confirmed dates.
  schedule: [
    { city: "Pune", dateLabel: "Dates announced soon", klass: "Bars", status: "Waitlist" },
    { city: "Pune", dateLabel: "Dates announced soon", klass: "Facelift", status: "Waitlist" },
    { city: "Mumbai", dateLabel: "On request", klass: "Bars", status: "Open" },
  ] as ClassDate[],
};
