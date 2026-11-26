import type { Confirmable } from "./site";

// Three families, seven solutions. Wording from the website brief.

export type FamilyId = "make" | "sell" | "learn-build";

export type SolutionId =
  | "inventory-logistics"
  | "quality-control"
  | "process-management"
  | "e-commerce"
  | "brand-traceability"
  | "e-learning"
  | "construction-management";

export type Solution = {
  id: SolutionId;
  name: string;
  description: string;
  gains: string[];
};

export type Family = {
  id: FamilyId;
  tagline: string;
  // Card accent colour: factory floor = Signal Blue, factory to buyer = Hub Green,
  // schools and building sites = Anchor Navy. Group names are not shown on the site.
  color: "blue" | "green" | "navy";
  solutions: Solution[];
};

export const families: Family[] = [
  {
    id: "make",
    tagline: "Solutions for the factory floor",
    color: "blue",
    solutions: [
      {
        id: "inventory-logistics",
        name: "Inventory and logistics",
        description: "Shows stock on hand, where it is and when deliveries arrive",
        gains: ["No stock-outs or over-stock", "Fewer losses", "Delivery status for every order"],
      },
      {
        id: "quality-control",
        name: "Quality control",
        description:
          "Digital inspection checklists that trace every defect to its machine, shift or batch",
        gains: ["Fewer defects and returns", "Proof of quality for buyers and exports"],
      },
      {
        id: "process-management",
        name: "Process management and control",
        description:
          "A live dashboard of output, stoppages and machine status, with maintenance alerts",
        gains: ["Less downtime", "More output per day", "Maintenance before breakdowns"],
      },
    ],
  },
  {
    id: "sell",
    tagline: "Solutions from factory to buyer",
    color: "green",
    solutions: [
      {
        id: "e-commerce",
        name: "E-commerce for manufacturers",
        description:
          "An online shop for the factory itself; shops, distributors and buyers order directly, with Telebirr payments and stock linked",
        gains: ["Sales without a middleman", "Orders and payments in one place"],
      },
      {
        id: "brand-traceability",
        name: "Brand and digital traceability",
        description:
          "A QR code on every product showing its origin, batch and that it is genuine",
        gains: [
          "Protection against fake products",
          "Proof of origin for exports",
          "Stronger brand trust",
        ],
      },
    ],
  },
  {
    id: "learn-build",
    tagline: "Solutions for schools and building sites",
    color: "navy",
    solutions: [
      {
        id: "e-learning",
        name: "E-learning / learning management",
        description: "Courses, lessons, exams and student records on phone and computer",
        gains: [
          "Learning outside class",
          "Grades in one place",
          "Dashboards for teachers and parents",
        ],
      },
      {
        id: "construction-management",
        name: "Construction management",
        description:
          "Schedule, budget, materials, crews and equipment for every site on one screen",
        gains: [
          "Projects on time and on budget",
          "Less material lost",
          "Daily site reports from a phone",
        ],
      },
    ],
  },
];

// Shown as a band under the three families. Each stays marked until we can demo it.
export const aiOperations = {
  title: "How AI-driven operations fits",
  features: [
    { name: "Predictive maintenance alerts", toConfirm: true },
    { name: "Defect and quality trends", toConfirm: true },
    { name: "Stock and demand forecasting", toConfirm: true },
    { name: "Loan risk scoring", toConfirm: true },
  ] satisfies (Confirmable & { name: string })[],
};

export const solutionCount = families.reduce((total, family) => total + family.solutions.length, 0);

// The Solutions page: six groups of what a business owner wants to track, two short
// cards each (name and one line, no benefit lists). Card ids double as anchors for the
// sector pages, which link to /solutions/#<solution id> (checked by tests/content.spec.ts).
export type TrackCard = { id: string; name: string; description: string };

export const trackGroups: {
  id: string;
  title: string;
  // Wide photo behind the group title (a licensed photo under public/).
  image: { src: string; alt: string };
  color: "blue" | "green" | "navy";
  cards: [TrackCard, TrackCard];
}[] = [
  {
    id: "track-stock",
    image: { src: "solutions/track-stock.webp", alt: "Warehouse aisle with racks full of stock and two workers" },
    title: "Track stock and deliveries",
    color: "blue",
    cards: [
      {
        id: "inventory-logistics",
        name: "Inventory management",
        description: "Live stock of raw materials and finished goods, by location",
      },
      {
        id: "logistics",
        name: "Logistics and delivery tracking",
        description: "Shipments and deliveries followed from warehouse to customer",
      },
    ],
  },
  {
    id: "track-production",
    image: { src: "solutions/track-production.webp", alt: "Workers along conveyor lines with monitoring screens in a processing plant" },
    title: "Track production and quality",
    color: "blue",
    cards: [
      {
        id: "process-management",
        name: "Process management and control",
        description: "A live dashboard of output, stoppages and machine status, with maintenance alerts",
      },
      {
        id: "quality-control",
        name: "Quality control",
        description: "Digital inspection checklists that trace every defect to its machine, shift or batch",
      },
    ],
  },
  {
    id: "track-sales",
    image: { src: "solutions/track-sales-shop.webp", alt: "A shop tablet showing a grid of products for sale, with clothing racks and shelves behind" },
    title: "Track sales and products",
    color: "green",
    cards: [
      {
        id: "e-commerce",
        name: "E-commerce for manufacturers",
        description: "An online shop where buyers order directly, with Telebirr payments and stock linked",
      },
      {
        id: "brand-traceability",
        name: "Brand and digital traceability",
        description: "A QR code on every product showing its origin, batch and that it is genuine",
      },
    ],
  },
  {
    id: "track-projects",
    image: { src: "solutions/track-projects.webp", alt: "Construction workers in hard hats on scaffolding in Nairobi" },
    title: "Track projects and sites",
    color: "navy",
    cards: [
      {
        id: "construction-management",
        name: "Construction management",
        description: "Sites, materials, crews and equipment followed day by day from a phone",
      },
      {
        id: "project-management",
        name: "Project management",
        description: "Schedules, budgets and milestones across every project, with measurable progress",
      },
    ],
  },
  {
    id: "track-learning",
    image: { src: "solutions/track-learning.webp", alt: "A student taking notes during an online lesson on a laptop" },
    title: "Track learning and information",
    color: "navy",
    cards: [
      {
        id: "e-learning",
        name: "E-learning",
        description: "Courses, lessons and exams on phone and computer",
      },
      {
        id: "information-management",
        name: "Information management",
        description: "Registration, records and data kept organised, safe and easy to find",
      },
    ],
  },
  {
    id: "ai-driven-operations",
    image: { src: "solutions/ai-driven-operations.webp", alt: "An operator facing a wall of monitoring screens in an operations room" },
    title: "AI-driven operations",
    color: "green",
    cards: [
      {
        id: "predictive-alerts",
        name: "Predictive alerts",
        description: "Early warnings for maintenance, defects and quality trends",
      },
      {
        id: "forecasting",
        name: "Forecasting and risk scoring",
        description: "Stock and demand forecasts and loan risk scores from the business’s own data",
      },
    ],
  },
];

export function findSolution(id: SolutionId) {
  for (const family of families) {
    const solution = family.solutions.find((item) => item.id === id);
    if (solution) return { solution, family };
  }
  throw new Error(`Unknown solution: ${id}`);
}
