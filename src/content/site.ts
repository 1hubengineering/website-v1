// Company-wide copy from the website brief. Keep wording as supplied;
// anything not yet verified carries `toConfirm: true` and renders a visible
// "[to confirm]" marker until the owner approves it.

export type Confirmable = { toConfirm?: boolean; note?: string };

export const company = {
  name: "AndHub Engineering PLC",
  shortName: "AndHub",
  tagline: "Ideas. Engineered.",
  location: "Lebu, Addis Ababa, Ethiopia",
  email: "info@1hubengineering.com",
  phones: [
    { label: "+251 913 231 123", href: "tel:+251913231123" },
    { label: "+251 922 964 576", href: "tel:+251922964576" },
  ],
  website: "1hubengineering.com",
  github: "https://github.com/1hubengineering",
  whatWeDo:
    "We turn everyday problems in factories, companies and construction into digital solutions with measurable results",
} as const;

// Four services. Use exactly these words in the hero and footer.
export const services = [
  "Software Development",
  "Systems Engineering",
  "Process Automation",
  "AI-Driven Operations",
] as const;

export type TeamMember = Confirmable & {
  name: string;
  role: string;
  email?: string;
  // Path under public/, e.g. "team/abraham-bekele.webp". Until set, the card shows
  // a placeholder with the member's initials.
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Rehobot Bekele, PhD",
    role: "Co-founder · Systems Engineer",
    email: "rehoboth@1hubengineering.com",
  },
  {
    name: "Abraham Bekele",
    role: "Co-founder · Software Architect",
    email: "abraham@1hubengineering.com",
  },
  {
    name: "Lydia",
    role: "Team member",
    toConfirm: true,
    note: "Full name, role and email to confirm.",
  },
  {
    name: "Emmanuel",
    role: "Team member",
    toConfirm: true,
    note: "Full name, role and email to confirm.",
  },
];

// Why digital transformation matters now: verbatim, from the ENA report of the
// Prime Minister's keynote at the 24th COMESA Summit (dateline 9 October 2025).
export const leaderQuote = {
  text: "Technology is moving faster than ever, reshaping how nations grow, how societies connect, and how prosperity is shared",
  name: "Abiy Ahmed",
  role: "PM",
  occasion: "24th COMESA Summit, October 2025",
  source: "https://www.ena.et/web/eng/w/eng_7487272",
} as const;

// What makes AndHub different (home and About).
export const whyAndhub = [
  {
    title: "Research and experience",
    text: "Experience identifying problems from many industrial perspectives, studied before anything is built",
  },
  {
    title: "Multidisciplinary engineering",
    text: "Software, systems, aerospace and industrial engineering: several areas of expertise working together",
  },
  {
    title: "7+ years of system design",
    text: "Systems designed to international standards, from multi-tenant platforms to complex engineering systems",
  },
  {
    title: "International and local relationships",
    text: "Partners in France and across Ethiopia, with local companies in many sectors and a multilingual team",
  },
] as const;

// "Our approach" from the AndHub brochure (Asset/), shown as connected ticked steps.
export const approach = [
  "Understand your needs",
  "Define requirements and scope",
  "Design and develop",
  "Validate and support",
] as const;

export const mainNav = [
  { label: "Solutions", to: "/solutions/" },
  { label: "Sectors", to: "/sectors/" },
  { label: "Projects", to: "/projects/" },
  { label: "About", to: "/about/" },
  { label: "Contact", to: "/contact/" },
] as const;

export const primaryCta = { label: "Book a free discovery visit", to: "/contact/" } as const;
