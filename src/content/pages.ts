import { sectors } from "./sectors";

// One entry per pre-rendered route. Titles stay under 60 characters and
// descriptions under 155 (checked by tests/seo.spec.ts). `tab` is the short name
// shown in the browser tab (at most three words); the longer `title` is kept for
// search results and link previews.
export type PageMeta = {
  path: string;
  tab: string;
  title: string;
  description: string;
};

const sectorTabs: Record<string, string> = {
  "food-and-beverage": "Food and Beverage",
  "leather-and-garments": "Leather and Garments",
  "metal-and-engineering": "Metal and Engineering",
  construction: "Construction",
  "aerospace-and-aviation": "Aerospace and Aviation",
  "banking-and-finance": "Banking and Finance",
  "brands-and-exporters": "Brands and Exporters",
  "schools-and-colleges": "Schools and Colleges",
};

export const pages: PageMeta[] = [
  {
    path: "/",
    tab: "AndHub",
    title: "AndHub",
    description:
      "Software development, systems engineering, process automation and AI-driven operations for companies in Addis Ababa, Ethiopia.",
  },
  {
    path: "/solutions",
    tab: "Solutions",
    title: "Factory Automation and Business Software | AndHub",
    description:
      "Inventory, quality control, production monitoring, e-commerce, QR traceability, e-learning and construction management software in Ethiopia.",
  },
  {
    path: "/sectors",
    tab: "Sectors",
    title: "Industries We Serve in Ethiopia | AndHub Engineering",
    description:
      "Food, leather and garments, metal, construction, aviation, banking, brands and schools: digital solutions for eight sectors in Ethiopia.",
  },
  ...sectors.map((sector) => ({
    path: `/sectors/${sector.slug}`,
    tab: sectorTabs[sector.slug] ?? sector.name,
    title: sector.seo.title,
    description: sector.seo.description,
  })),
  {
    path: "/projects",
    tab: "Projects",
    title: "Software Projects by AndHub Engineering, Ethiopia",
    description:
      "Business platforms, developer tools and digital publishing projects built by AndHub Engineering in Addis Ababa, Ethiopia.",
  },
  {
    path: "/about",
    tab: "About",
    title: "About AndHub Engineering | Systems Engineering Ethiopia",
    description:
      "A multidisciplinary team of systems, software, electrical and aerospace engineers in Addis Ababa. We study your business before we build.",
  },
  {
    path: "/contact",
    tab: "Contact",
    title: "Contact AndHub Engineering | Book a Discovery Visit",
    description:
      "Book a free discovery visit with AndHub Engineering in Lebu, Addis Ababa. Email info@1hubengineering.com or call +251 913 231 123.",
  },
];

export const notFoundMeta: PageMeta = {
  path: "/404",
  tab: "Page not found",
  title: "Page not found — AndHub Engineering PLC",
  description: "This page does not exist. Go back to the AndHub Engineering home page.",
};

export function findPageMeta(pathname: string): PageMeta {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return pages.find((page) => page.path === normalized) ?? notFoundMeta;
}
