/* Classes sub-page content. Dates are PLACEHOLDER until confirmed. */

export type ClassDate = {
  city: string;
  dateLabel: string;
  klass: "Bars" | "Facelift" | "Body Processes";
  status: "Open" | "Few seats" | "Waitlist";
};

export const classesPage = {
  intro: {
    label: "Classes",
    heading: "Learn to run the work yourself.",
    body: "A class is different from a session. In a session he runs the work on you. In a class, you walk out certified and able to give it to anyone, including yourself.",
  },
  offerings: [
    {
      id: "bars",
      name: "Access Bars",
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
      name: "Access Facelift",
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
    {
      id: "body",
      name: "Access Body Processes",
      duration: "By class format",
      price: "On enquiry",
      includes: [
        "Hands-on training in Access Body Processes",
        "Practice rounds, given and received",
        "Tools for specific patterns in the body",
        "Ability to facilitate the processes for others",
      ],
      summary:
        "Learn the Access Body Processes for targeted patterns — money, sleep, pain, and more — so you can run them for yourself and others.",
    },
  ],
  // PLACEHOLDER schedule. Replace with confirmed dates.
  schedule: [
    { city: "Pune", dateLabel: "Dates announced soon", klass: "Bars", status: "Waitlist" },
    { city: "Pune", dateLabel: "Dates announced soon", klass: "Facelift", status: "Waitlist" },
    { city: "Pune", dateLabel: "Dates announced soon", klass: "Body Processes", status: "Waitlist" },
    { city: "Mumbai", dateLabel: "On request", klass: "Bars", status: "Open" },
  ] as ClassDate[],
};
