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

export type Founder = Confirmable & {
  name: string;
  role: string;
  email: string;
};

export const founders: Founder[] = [
  {
    name: "Rehobot Bekele, PhD",
    role: "Co-founder · Systems Engineer",
    email: "rehoboth@1hubengineering.com",
    toConfirm: true,
    note: "Brief spells the name “Rehobot”; current site and email use “Rehoboth”.",
  },
  {
    name: "Abraham Bekele",
    role: "Co-founder · Software Architect",
    email: "abraham@1hubengineering.com",
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

export const howWeWork = [
  { title: "Free discovery visit", text: "We learn how you work today" },
  { title: "One-month pilot", text: "On one line, site, class or branch" },
  { title: "Measure together", text: "We compare before and after" },
  { title: "Scale", text: "Roll out across your company, with training and support" },
] as const;

export const mainNav = [
  { label: "Solutions", to: "/solutions/" },
  { label: "Sectors", to: "/sectors/" },
  { label: "Projects", to: "/projects/" },
  { label: "About", to: "/about/" },
  { label: "Contact", to: "/contact/" },
] as const;

export const primaryCta = { label: "Book a free discovery visit", to: "/contact/" } as const;
