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

export const whyAndhub = [
  { title: "Research first", text: "We study your business before we build" },
  {
    title: "Multidisciplinary engineering",
    text: "Systems, software, electrical and aerospace engineering in one team",
  },
  { title: "7+ years", text: "of team industry experience" },
  {
    title: "Clear, practical interfaces",
    text: "Screens designed around everyday users, in Amharic, Afaan Oromo and English",
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
