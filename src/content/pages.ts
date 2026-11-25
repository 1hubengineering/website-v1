import { sectors } from "./sectors";

// One entry per pre-rendered route. Titles stay under 60 characters and
// descriptions under 155 (checked by tests/seo.spec.ts).
export type PageMeta = {
  path: string;
  title: string;
  description: string;
};

export const pages: PageMeta[] = [
  {
    path: "/",
    title: "AndHub Engineering PLC — Ideas. Engineered.",
    description:
      "Software development, systems engineering, and process automation and AI-driven operations for companies in Addis Ababa, Ethiopia.",
  },
  {
    path: "/solutions",
    title: "Factory Automation and Business Software | AndHub",
    description:
      "Inventory, quality control, production monitoring, e-commerce, QR traceability, e-learning and construction management software in Ethiopia.",
  },
  {
    path: "/sectors",
    title: "Industries We Serve in Ethiopia | AndHub Engineering",
    description:
      "Food, leather and garments, metal, construction, aviation, banking, brands and schools: digital solutions for eight sectors in Ethiopia.",
  },
  ...sectors.map((sector) => ({
    path: `/sectors/${sector.slug}`,
    title: sector.seo.title,
    description: sector.seo.description,
  })),
  {
    path: "/projects",
    title: "Software Projects by AndHub Engineering, Ethiopia",
    description:
      "Business platforms, developer tools and digital publishing projects built by AndHub Engineering in Addis Ababa, Ethiopia.",
  },
  {
    path: "/about",
    title: "About AndHub Engineering | Systems Engineering Ethiopia",
    description:
      "A multidisciplinary team of systems, software, electrical and aerospace engineers in Addis Ababa. We study your business before we build.",
  },
  {
    path: "/contact",
    title: "Contact AndHub Engineering | Book a Discovery Visit",
    description:
      "Book a free discovery visit with AndHub Engineering in Lebu, Addis Ababa. Email info@1hubengineering.com or call +251 913 231 123.",
  },
];

export const notFoundMeta: PageMeta = {
  path: "/404",
  title: "Page not found — AndHub Engineering PLC",
  description: "This page does not exist. Go back to the AndHub Engineering home page.",
};

export function findPageMeta(pathname: string): PageMeta {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return pages.find((page) => page.path === normalized) ?? notFoundMeta;
}
