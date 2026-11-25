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
        description: "Shows what stock you have, where it is and when deliveries arrive",
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
