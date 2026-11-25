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
    path: "/projects",
    title: "Software Projects by AndHub Engineering, Ethiopia",
    description:
      "Business platforms, developer tools and digital publishing projects built by AndHub Engineering in Addis Ababa, Ethiopia.",
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
