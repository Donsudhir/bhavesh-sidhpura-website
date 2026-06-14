/* ---------------------------------------------------------------------------
   SITE CONFIG  ·  Bhavesh Sidhpura
   Single source of truth for copy, services, and swappable placeholders.
   Everything marked PLACEHOLDER is safe to edit here without touching markup.
--------------------------------------------------------------------------- */

export const site = {
  name: "Bhavesh Sidhpura",
  role: "Access Consciousness Facilitator",
  // PLACEHOLDER: domain not yet decided
  domain: "https://bhaveshsidhpura.com",
  title: "Bhavesh Sidhpura, Access Consciousness Facilitator",
  description:
    "A businessman who found another way. Access Bars, Facelift and Body Process sessions and classes in Pune, and across India on request.",
  location: "Pune, India",
  // PLACEHOLDER contact details (use Bhavesh's public number, not the agency's)
  whatsapp: {
    display: "+91 00000 00000",
    link: "https://wa.me/910000000000",
  },
  email: "hello@bhaveshsidhpura.com",
  instagram: {
    handle: "@bhaveshsidhpura",
    link: "https://instagram.com/bhaveshsidhpura",
  },
  // PLACEHOLDER social profiles. Set link to "" to hide a channel in the UI.
  social: {
    instagram: "https://instagram.com/bhaveshsidhpura",
    facebook: "https://facebook.com/bhaveshsidhpura",
    youtube: "https://youtube.com/@bhaveshsidhpura",
    linkedin: "https://www.linkedin.com/in/bhaveshsidhpura",
  },
  // PLACEHOLDER Calendly inline URL
  calendly: "https://calendly.com/your-handle/session",
  // PLACEHOLDER session area shown publicly; exact address shared on booking
  area: "Koregaon Park area, Pune",
} as const;

export const ctas = {
  primary: "Book a session",
  secondary: "Discover what's possible",
  whatsapp: "Message on WhatsApp",
} as const;

export const nav = [
  { label: "Diagnostic", href: "/#diagnostic" },
  { label: "The Map", href: "/#map" },
  { label: "Stories", href: "/#transformations" },
  { label: "The Circle", href: "/#circle" },
  { label: "Classes", href: "/classes" },
] as const;

/* The hook. A question, not a pitch. The visitor should feel seen
   before they are sold anything. */
export const hero = {
  kicker: "For the curious ones",
  question: "What if the problem you keep trying to solve",
  questionEmphasis: "was never the real problem?",
  subhead:
    "The answers about money, relationships, and life you have been chasing outside are not out there. They are already in you, right now. This is the doorway in.",
  hint: "Guided by Bhavesh Sidhpura, a Pune businessman who kept doing everything right and still hit a wall, until he found another way to run his work and his life. Now he helps others find it through Access Consciousness.",
  primaryCta: "Discover what's possible",
  secondaryCta: "Book a session",
  whisper: "How does it get any better than this?",
};

export const story = {
  label: "My story",
  heading: "The turning point",
  audioLabel: "Hear it in my voice, 40 sec",
  // PLACEHOLDER: Bhavesh's own-voice recording. Drop the file in /public/audio/
  // and set this path (e.g. "/audio/story.mp3"). Empty = player hidden.
  audioSrc: "",
  pullQuote: "I never left business. I changed how I run it.",
  paragraphs: [
    "There came a year my business was bleeding money.",
    "I had done everything a businessman is supposed to do. Worked harder, cut costs, took advice from every mentor and consultant I could find. Nothing was working. The stress was eating my sleep, my health, my time with my family.",
    "I came across Access Consciousness almost by accident. I saw it, I was curious, and I tried it, mostly to prove it would not work. I was a businessman, not a spiritual type.",
    "When I finally sat with it, something I cannot fully explain in words shifted. Not the market. Not my numbers, not yet. Something in me. The decisions I made after were different. The conversations were different. The money started moving again.",
    "I never left business. I still run one today. What changed is how I run it, and who I became while doing it.",
    "Today I help other business owners and professionals find what I found. Not as a replacement for hard work, but as the missing piece underneath it.",
  ],
};

/* THE RECOGNITION — the "this is exactly me" moment.
   Three questions that read like the visitor's own private diary.
   No answers given here. Only mirrors. */
export const recognition = {
  label: "The recognition",
  heading:
    "You already know the questions. You have just never been asked them out loud.",
  intro:
    "Not the questions for a guru. The ones that wake you at 3am. Read slowly. Notice which one your body answers first.",
  questions: [
    {
      area: "Money",
      q: "What if you have done everything right with money, and the thing still missing was never on the spreadsheet?",
    },
    {
      area: "Relationships",
      q: "What if the distance you feel from the people closest to you began as a distance from yourself?",
    },
    {
      area: "Life",
      q: "If no one would judge you for the next 24 hours, what would you finally choose?",
    },
  ],
  closer:
    "If something in you went quiet just now, that is not a coincidence. That is the part of you that already knows.",
};

/* TRANSFORMATION DASHBOARD — replaces invented testimonials honestly.
   Clearly labelled as illustrative until real, consent-signed stories exist. */
export const transformations = {
  label: "The explorers",
  heading: "What a shift actually looks like.",
  intro:
    "Real change is rarely a thunderclap. It is a slow turning of the wheel. These journeys are illustrative composites, shared to show the shape of the work, not as named testimonials.",
  disclaimer:
    "Illustrative. Real, consent-signed stories replace these before any are presented as identified clients.",
  explorers: [
    {
      id: "147",
      label: "Anonymous Explorer #147",
      context: "Business owner",
      timeline: [
        {
          day: "Day 1",
          note: "Successful on paper. Hollow underneath. Could not say why.",
        },
        {
          day: "Day 14",
          note: "Stopped trying to fix the business. Started asking a different question.",
        },
        {
          day: "Day 60",
          note: "Made one decision I had avoided for two years.",
        },
        {
          day: "Day 180",
          note: "Same company. Completely different man running it.",
        },
      ],
    },
    {
      id: "092",
      label: "Anonymous Explorer #092",
      context: "Family-business member",
      timeline: [
        {
          day: "Day 1",
          note: "Carrying decisions and expectations I never chose.",
        },
        {
          day: "Day 21",
          note: "Realised most of the weight was never even mine.",
        },
        {
          day: "Day 90",
          note: "Spoke a truth at the family table I had swallowed for years.",
        },
        {
          day: "Day 180",
          note: "Lighter. Clearer. Still in the business, no longer buried by it.",
        },
      ],
    },
    {
      id: "203",
      label: "Anonymous Explorer #203",
      context: "Founder",
      timeline: [
        {
          day: "Day 1",
          note: "Optimised everything outside. Empty everywhere inside.",
        },
        {
          day: "Day 30",
          note: "Began to notice the patterns instead of being run by them.",
        },
        {
          day: "Day 120",
          note: "Changed direction. Not from fear. From choice.",
        },
        {
          day: "Day 180",
          note: "Building something that finally feels like mine.",
        },
      ],
    },
  ],
};

/* MOST NEVER TRY — the believers-vs-the-asleep beat (top-priority).
   Most stay asleep. A few realise. One moment changes everything. */
export const mostNeverTry = {
  label: "The few",
  heading: "Most people will read this far and close the tab.",
  body: [
    "Most never try. They stay loyal to the problem, certain that more effort, more control, more time is the answer. They mistake the cage for the world.",
    "Only a few stop and ask: what if there is another way to see all of this?",
    "You do not need years. You do not need to become someone else. One moment of real awareness can change the entire direction of a life. The only question is whether you will be one of the few who let it.",
  ],
  pull: "It only takes one moment of waking up. Most people never give themselves that moment.",
  cta: "I am one of the few",
};

/* THE CIRCLE — identity / tribe. Sell the belonging, not the class. */
export const circle = {
  label: "The Circle",
  heading: "This is not a service. It is a way of seeing.",
  body: "The Curious Ones do not settle for the answers they were handed. They question. They explore. They choose possibility over the comfort of the known. If you have read this far, you are likely already one of them, you just have not met the others yet.",
  values: [
    "We ask better questions instead of forcing easier answers.",
    "We choose curiosity over judgement, including of ourselves.",
    "We refuse to settle for ordinary when extraordinary is a choice away.",
  ],
  invitation: "Join the ones who refuse to settle for ordinary answers.",
  cta: "Step into the Circle",
  whisper: "All of life comes to me with ease, joy, and glory.",
};

export type Service = {
  id: string;
  name: string;
  featured?: boolean;
  what: string;
  length: string;
  price: string;
  cta: string;
  ctaHref: string;
};

export const services: Service[] = [
  {
    id: "bars",
    name: "1:1 Access Bars Session",
    featured: true,
    what: "A gentle, hands-on session. 32 points on the head, light touch, deep release.",
    length: "1 to 1.5 hours",
    price: "Starting from Rs 5,000",
    cta: "Book a session",
    ctaHref: "/#booking",
  },
  {
    id: "body",
    name: "Access Body Process",
    what: "Targeted body processes for specific patterns: money, sleep, pain, and more. Taught or facilitated individually.",
    length: "1.5 to 2 hours per process",
    price: "Starting from Rs 5,000",
    cta: "Enquire",
    ctaHref: "/#booking",
  },
  {
    id: "bars-class",
    name: "Access Bars Class",
    what: "Learn to run Bars yourself. A full one-day certification class. Walk out able to gift this to anyone.",
    length: "1 day",
    price: "Starting from Rs 28,000",
    cta: "See class dates",
    ctaHref: "/classes",
  },
  {
    id: "facelift-class",
    name: "Access Facelift Class",
    what: "The Access Energetic Facelift, a one-day class for face and body rejuvenation, and to give to others.",
    length: "1 day",
    price: "Starting from Rs 36,000",
    cta: "See class dates",
    ctaHref: "/classes",
  },
];

export const audience = {
  label: "Is this you?",
  heading: "For the ones building something, and tired inside it.",
  columns: [
    {
      title: "Business owners & traders",
      body: "You are making money and still not sleeping. The numbers work; something underneath does not.",
    },
    {
      title: "Family-business members",
      body: "You carry decisions, expectations, and patterns you never chose. There is a weight nobody names.",
    },
    {
      title: "Professionals & founders",
      body: "You have optimised everything outside. This is the work on the inside that the outside has been waiting for.",
    },
  ],
};

export const steps = {
  label: "What to expect",
  heading: "How a session works",
  items: [
    {
      title: "You book",
      body: "Pick a time. You will get the location and a short note on what to bring (nothing, really).",
    },
    {
      title: "You arrive",
      body: "We talk for a few minutes. No spiritual performance required. Come as you are.",
    },
    {
      title: "The session",
      body: "You lie back, fully clothed. Light touch on 32 points on your head. Most people drift somewhere between awake and asleep.",
    },
    {
      title: "After",
      body: "We sit for a moment. Drink water. Notice what is different over the next few days. Most people feel it in their decisions first.",
    },
  ],
};

/* Real, consent-signed testimonials replace the Transformation Dashboard
   composites at launch. Until then, no quotes are invented. */

export const credentials = {
  heading: "Certified by Access Consciousness",
  certs: [
    "Bars Facilitator (BF)",
    "Body Process Facilitator (BPF)",
    "Access Energetic Facelift",
  ],
  directory:
    "Listed on the official Access Consciousness global facilitator directory.",
};

export const faqs = {
  label: "Questions",
  items: [
    {
      q: "What actually happens in a Bars session?",
      a: "You lie back, fully clothed, while I lightly touch 32 points on your head. It is deeply relaxing. There is nothing you need to do, believe, or perform.",
    },
    {
      q: "Do I have to be spiritual for this to work?",
      a: "No. I was not. I am a businessman. You do not need to believe in anything. You just need to be willing to notice what changes.",
    },
    {
      q: "Will this fix my money problem?",
      a: "I make no promises about your bank balance. What I have seen, in myself and others, is that when the energy underneath your decisions shifts, the decisions change. The rest follows from there.",
    },
    {
      q: "How many sessions do I need?",
      a: "Many people feel something after one. For deeper patterns, a handful over a few weeks. We will talk about what makes sense for you, with no pressure to commit upfront.",
    },
    {
      q: "Where are sessions held?",
      a: "In Pune. The exact address is shared on booking. I also travel across India for classes and group work.",
    },
    {
      q: "Do you work online?",
      a: "Not right now. This work is in person for the time being.",
    },
    {
      q: "What is the difference between a session and a class?",
      a: "In a session, I run the work on you. In a class, I teach you to run it, on yourself and others.",
    },
  ],
};

export const booking = {
  label: "Begin",
  heading: "Ready when you are.",
  body: "Book a 1:1 session, or message me first if you have a question. No long forms, no pressure.",
  whatsappPrompt: "Rather just talk? Message me on WhatsApp",
  // Lightweight enquiry form (fallback for people who do not want Calendly).
  form: {
    heading: "Or send a note",
    body: "Tell me a little, and I will reply personally.",
    nameLabel: "Your name",
    namePlaceholder: "Name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "What is on your mind?",
    messagePlaceholder: "A line or two is plenty.",
    submit: "Send note",
    sending: "Sending…",
    successHeading: "Note received.",
    successBody: "Thank you. I will get back to you personally, usually within a day or two.",
    error: "Something went wrong. Please try again, or reach me on WhatsApp.",
  },
};

/* ---------------------------------------------------------------------------
   REALITY DIAGNOSTIC  ·  rule-based, no AI.
   Five questions. Each answer carries weight toward one of three patterns.
   We reveal ONE dominant pattern, and lock the rest behind the experience.
--------------------------------------------------------------------------- */
export type PatternKey = "control" | "worth" | "belonging";

export const diagnostic = {
  label: "Reality diagnostic",
  heading: "Five questions. One pattern you have never seen named.",
  intro:
    "This is not a test. There are no right answers, no scores, no diagnosis. Just notice what is true, and let it show you something you already carry.",
  start: "Begin the diagnostic",
  questions: [
    {
      id: "q1",
      text: "When something goes wrong in your life, your first instinct is to —",
      options: [
        {
          label: "Take tighter control and fix it myself",
          weight: "control" as PatternKey,
        },
        { label: "Wonder what I did wrong", weight: "worth" as PatternKey },
        {
          label: "Worry what others will think of me",
          weight: "belonging" as PatternKey,
        },
      ],
    },
    {
      id: "q2",
      text: "The quiet fear that follows you is closest to —",
      options: [
        {
          label: "If I let go, everything falls apart",
          weight: "control" as PatternKey,
        },
        {
          label: "I am not enough, no matter what I achieve",
          weight: "worth" as PatternKey,
        },
        {
          label: "I will end up alone or unseen",
          weight: "belonging" as PatternKey,
        },
      ],
    },
    {
      id: "q3",
      text: "Success, for you, has mostly meant —",
      options: [
        {
          label: "Nothing can blindside me again",
          weight: "control" as PatternKey,
        },
        { label: "Finally proving I matter", weight: "worth" as PatternKey },
        {
          label: "Being accepted by the people I respect",
          weight: "belonging" as PatternKey,
        },
      ],
    },
    {
      id: "q4",
      text: "What exhausts you most is —",
      options: [
        {
          label: "Carrying everything, because no one else will",
          weight: "control" as PatternKey,
        },
        {
          label: "Never feeling I have done enough",
          weight: "worth" as PatternKey,
        },
        {
          label: "Managing how I come across to everyone",
          weight: "belonging" as PatternKey,
        },
      ],
    },
    {
      id: "q5",
      text: "If one thing could finally soften, you would want it to be —",
      options: [
        {
          label: "The grip. The need to hold it all together",
          weight: "control" as PatternKey,
        },
        {
          label: "The verdict. The voice that says I fall short",
          weight: "worth" as PatternKey,
        },
        {
          label: "The distance. The space between me and others",
          weight: "belonging" as PatternKey,
        },
      ],
    },
  ],
  patterns: {
    control: {
      name: "The Pattern of Control",
      reveal:
        "Underneath your competence is a quiet belief: if you ever loosen your grip, it all collapses. You have built a life on holding everything together. It works, and it is exhausting, because control is what you do instead of trust.",
      question:
        "Who would you be if you no longer had to hold it all together?",
    },
    worth: {
      name: "The Pattern of Worth",
      reveal:
        "You have achieved, and a part of you still waits to feel enough. The finish line keeps moving because the race was never really about the work. It was about proving something that no achievement can settle from the outside.",
      question:
        "What becomes possible the moment you stop auditioning for your own worth?",
    },
    belonging: {
      name: "The Pattern of Belonging",
      reveal:
        "You read every room before you enter it. So much energy goes to how you land with others that there is little left to ask what you actually want. The distance you manage so carefully began, quietly, as a distance from yourself.",
      question:
        "What would you choose if no one were watching, and no one would judge?",
    },
  },
  lockedTeaser:
    "This is one of three patterns your answers revealed. The other two, and what they make possible, are explored in a 1:1 session.",
  resultCta: "Explore this in a session",
  restart: "Take it again",
};

/* ---------------------------------------------------------------------------
   THE OBSERVATORY  ·  the locked room. Restricted-access psychology.
   Email unlocks a glimpse. Real list integration is a later step (placeholder).
--------------------------------------------------------------------------- */
export const observatory = {
  label: "The Observatory",
  heading: "There is a room most visitors never open.",
  body: "Beyond this door are the guided exercises, the practitioner notes, and the questions we do not put on the public page. Not because they are secret, but because they mean more to the ones who choose to step in.",
  lockedHint: "Inside, right now:",
  contents: [
    "The 7 questions that consistently change how people see their lives",
    "A 10-minute guided clearing you can run on yourself tonight",
    "Practitioner notes on money, sleep, and the patterns underneath them",
    "First access to every Expansion Gathering before it opens publicly",
  ],
  formLabel: "Where should the key arrive?",
  placeholder: "your@email.com",
  submit: "Unlock the Observatory",
  consent:
    "One email with your key. No noise. Leave the moment it stops serving you.",
  successHeading: "The door is open.",
  successBody:
    "Welcome in. Your key is on its way. While the full Observatory is being prepared, here is the first of the seven questions to sit with —",
  firstQuestion:
    "If nothing were wrong with you, what would you stop trying to fix?",
  successNote:
    "The next question appears once you have truly lived with this one. That is the only lock left.",
};

/* ---------------------------------------------------------------------------
   THE POSSIBILITY MAP  ·  the rabbit hole. Click a domain, descend through
   layers, each step reveals an insight. Reveal one path, never everything.
--------------------------------------------------------------------------- */
export type MapNode = {
  label: string;
  insight: string;
  children?: MapNode[];
};

export const possibilityMap = {
  label: "The Possibility Map",
  heading: "Pick a door. See how deep it goes.",
  intro:
    "Every surface problem sits on top of a question. Follow one down. Each step is a layer most people never reach, because they stop at the symptom.",
  prompt: "Where does it hurt most right now?",
  reset: "Start from the surface",
  domains: [
    {
      label: "Money",
      insight:
        "Money is rarely about money. It moves with the energy of the one holding it.",
      children: [
        {
          label: "Never enough",
          insight:
            "Scarcity is a frequency, not a balance. It survives every raise and every win.",
          children: [
            {
              label: "Fear of losing it",
              insight:
                "You are not protecting money. You are protecting a version of you that feels safe only when full.",
              children: [
                {
                  label: "The hidden assumption",
                  insight:
                    "\u201cMy worth is my balance.\u201d The day that belief loosens, money stops being a verdict and becomes a tool.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Relationships",
      insight:
        "Every relationship outside mirrors the one you are running with yourself.",
      children: [
        {
          label: "Feeling unseen",
          insight:
            "You long to be seen, and quietly perform a version that is easier to accept.",
          children: [
            {
              label: "The mask",
              insight:
                "The mask works so well that even you forget what is underneath it.",
              children: [
                {
                  label: "The hidden assumption",
                  insight:
                    "\u201cThe real me is too much, or not enough.\u201d Drop it, and intimacy stops being a risk.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Career",
      insight:
        "The ladder you are climbing was often built by someone else's definition of up.",
      children: [
        {
          label: "Stuck despite success",
          insight:
            "You hit the goals and feel nothing. The map was never yours to begin with.",
          children: [
            {
              label: "Fear of failure",
              insight:
                "Failure feels fatal only when achievement is holding up your identity.",
              children: [
                {
                  label: "The hidden assumption",
                  insight:
                    "\u201cI am what I produce.\u201d Release it, and choice replaces obligation.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Purpose",
      insight:
        "Purpose is not found. It is what is left when the borrowed goals fall away.",
      children: [
        {
          label: "The emptiness",
          insight:
            "The hollow feeling is not a flaw. It is awareness, asking for something true.",
          children: [
            {
              label: "Numbing it",
              insight:
                "Busyness, scrolling, the next acquisition, all clever ways to not hear the question.",
              children: [
                {
                  label: "The hidden assumption",
                  insight:
                    "\u201cIf I stop, I will have to feel it.\u201d Feel it once, fully, and it turns into direction.",
                },
              ],
            },
          ],
        },
      ],
    },
  ] as MapNode[],
  endNote:
    "This is one path through one door. In a session, we walk yours, with the patterns that are actually running you.",
  endCta: "Walk my path in a session",
};

/* ---------------------------------------------------------------------------
   IMAGES  ·  swap these URLs for real shoot assets when ready.
   Currently B&W editorial placeholders (Picsum, seeded + grayscale).
--------------------------------------------------------------------------- */
const px = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}?grayscale`;

export const images = {
  // Hero: editorial B&W portrait, negative space for text overlay (Shoot Day Look 1)
  heroPortrait: px("bhavesh-hero-portrait", 1100, 1400),
  // Mid-action "delivering Bars" shot
  delivering: px("bhavesh-bars-session", 1200, 900),
  // Contemplative looking-away portrait
  contemplative: px("bhavesh-contemplative", 1000, 1250),
  // Warm, smiling portrait
  warm: px("bhavesh-warm-portrait", 1000, 1000),
  // Classes page hero
  classroom: px("bhavesh-class-room", 1400, 900),
};
