import type { Confirmable } from "./site";
import type { FamilyId, SolutionId } from "./solutions";

// Eight client sectors. Wording from the website brief; field order follows
// the sector page template: headline, intro, challenges, solutions, pilot,
// gains, call to action.

export type SectorSolution = {
  name: string;
  provides: string;
  // Links the row to one of the seven solutions when it maps to one.
  solutionId?: SolutionId;
  // Named product from our projects (shown as a small label).
  product?: "ModelNesh" | "BikiltuTrack";
};

export type Sector = {
  slug: string;
  name: string;
  family?: FamilyId;
  headline: string;
  intro: string;
  challenges: [string, string, string];
  solutions: SectorSolution[];
  pilot: string;
  gains: [string, string, string];
  cta: Confirmable & { label: string; action: string };
  // Hero background photo (1920×1080 WebP) under the Unsplash License: free commercial
  // use; credit kept here and in public/sectors/CREDITS.md, not shown on the page.
  image: { src: string; alt: string; credit: { photographer: string; url: string } };
  seo: { title: string; description: string };
  story?: { steps: string[]; line: string };
};

export const sectors: Sector[] = [
  {
    slug: "food-and-beverage",
    name: "Food and beverage",
    family: "make",
    headline: "Stock, quality and production software for food and beverage factories",
    intro:
      "Flour mills, bakeries, dairies, juice and water bottlers live on fresh stock, tight margins and food safety. AndHub gives them one system to see what they hold, what they make and where every batch goes",
    challenges: [
      "Raw materials expire or run out before big orders",
      "A bad batch reaches the market and nobody can say where it came from",
      "The line stops and no one knows why or for how long",
    ],
    solutions: [
      {
        name: "Inventory and logistics",
        solutionId: "inventory-logistics",
        provides:
          "Live stock of raw materials, packaging and finished goods, with expiry dates and first-in, first-out alerts",
      },
      {
        name: "Quality control",
        solutionId: "quality-control",
        provides: "Hygiene and batch checklists on a tablet; every batch recorded and traceable",
      },
      {
        name: "Process management",
        solutionId: "process-management",
        provides: "Live output and stoppages on each filling, baking or milling line",
      },
      {
        name: "Brand and traceability",
        solutionId: "brand-traceability",
        provides: "A QR code on every pack showing batch, production date and origin",
      },
      {
        name: "E-commerce",
        solutionId: "e-commerce",
        provides: "Shops and distributors order directly and pay by Telebirr",
      },
      {
        name: "Staff training (e-learning)",
        solutionId: "e-learning",
        provides: "Short hygiene and safety courses on workers’ phones",
      },
    ],
    pilot: "One warehouse or one production line, one-month pilot",
    gains: [
      "Less waste and fewer expired goods",
      "Safe, traceable products buyers trust",
      "Orders delivered on time",
    ],
    cta: { action: "Book a free visit", label: "Book a free visit to see your stock and quality on one screen" },
    image: {
      src: "sectors/food-and-beverage.webp",
      alt: "Workers in hairnets along a fruit processing line in a factory",
      credit: { photographer: "Arno Senoner", url: "https://unsplash.com/photos/bCgsKqFzUcg" },
    },
    seo: {
      title: "Food and Beverage Software Ethiopia | AndHub",
      description:
        "Stock, quality control and production monitoring for mills, bakeries, dairies and bottlers in Ethiopia. Start with a one-month pilot.",
    },
  },
  {
    slug: "leather-and-garments",
    name: "Leather and garments",
    family: "make",
    headline: "Order tracking, quality control and product traceability for leather and garment factories",
    intro:
      "Tanneries, shoe makers, bag makers and garment factories work to buyer deadlines and buyer quality rules. AndHub lets them follow every order from material to shipment and prove quality and origin to any buyer.",
    challenges: [
      "Buyer deadlines are tight and delays show up too late",
      "Defects are found at the end, when fixing them is expensive",
      "Export buyers ask for proof of quality and origin",
    ],
    solutions: [
      {
        name: "Process management",
        solutionId: "process-management",
        provides:
          "Each buyer order tracked through cutting, stitching, finishing and packing, with live output per line",
      },
      {
        name: "Quality control",
        solutionId: "quality-control",
        provides:
          "Checks per piece or batch, with photos, so defects are caught at the station that made them",
      },
      {
        name: "Inventory and logistics",
        solutionId: "inventory-logistics",
        provides:
          "Live stock of hides, fabric, trims and accessories, linked to the orders that need them",
      },
      {
        name: "Brand and traceability",
        solutionId: "brand-traceability",
        provides: "A QR code per product or carton showing origin, batch and maker",
      },
      {
        name: "E-commerce",
        solutionId: "e-commerce",
        provides: "An online catalogue where buyers and shops see the range and order directly",
      },
      {
        name: "Staff training (e-learning)",
        solutionId: "e-learning",
        provides: "Operator and quality courses on the phone",
      },
    ],
    pilot: "One buyer order or one production line, one-month pilot",
    gains: ["Orders shipped on time", "Fewer rejected shipments", "Trust from international buyers"],
    cta: { action: "Book a free visit", label: "Book a free visit and track your next order with us" },
    image: {
      src: "sectors/leather-and-garments.webp",
      alt: "Workers at rows of sewing tables on a large garment factory floor",
      credit: { photographer: "EqualStock", url: "https://unsplash.com/photos/dh1EDCiQ6lg" },
    },
    seo: {
      title: "Leather and Garment Factory Software | AndHub",
      description:
        "Order tracking, quality control and QR product traceability for tanneries, shoe and garment factories in Ethiopia.",
    },
  },
  {
    slug: "metal-and-engineering",
    name: "Metal and engineering",
    family: "make",
    headline: "Production, maintenance and inventory software for metal and engineering manufacturers",
    intro:
      "Steel mills, fabrication workshops and engineering firms run many jobs at once on expensive machines. AndHub shows where every job stands, which machine needs care and what material is left.",
    challenges: [
      "Jobs run over time and the customer hears it first",
      "Machines stop without warning and the whole workshop waits",
      "Steel and spare parts go missing between store and floor",
    ],
    solutions: [
      {
        name: "Process management",
        solutionId: "process-management",
        provides:
          "Every job or work order tracked from quote to delivery, with live machine status",
      },
      {
        name: "Maintenance alerts",
        solutionId: "process-management",
        provides: "Service schedules and early warnings for each machine, before it breaks",
      },
      {
        name: "Inventory and logistics",
        solutionId: "inventory-logistics",
        provides: "Live stock of steel, consumables and spare parts, issued against each job",
      },
      {
        name: "Quality control",
        solutionId: "quality-control",
        provides: "Measurement and welding inspection records per job, ready to show the client",
      },
      {
        name: "Construction management",
        solutionId: "construction-management",
        provides:
          "For steel-structure projects: site schedule, materials and crews on one screen",
      },
      {
        name: "E-commerce",
        solutionId: "e-commerce",
        provides: "Online quotes and orders for standard products",
      },
    ],
    pilot: "One workshop or one machine group, one-month pilot",
    gains: [
      "More jobs finished on time",
      "Less downtime and fewer emergency repairs",
      "Material used where it should be",
    ],
    cta: { action: "Book a free visit", label: "Book a free visit and see every job on one board" },
    image: {
      src: "sectors/metal-and-engineering.webp",
      alt: "Factory floor of a metal parts manufacturer with rows of production machines",
      credit: { photographer: "MGR P.", url: "https://unsplash.com/photos/HNLlzPGbTBM" },
    },
    seo: {
      title: "Metal and Engineering Workshop Software | AndHub",
      description:
        "Job tracking, machine maintenance alerts and inventory for steel mills, fabrication workshops and engineering firms in Ethiopia.",
    },
  },
  {
    slug: "construction",
    name: "Construction",
    family: "learn-build",
    headline: "Project, cost and site management software for construction companies",
    intro:
      "Contractors, consultants and developers run many sites, many crews and large budgets at the same time. AndHub brings schedule, cost, materials and daily progress from every site into one view.",
    challenges: [
      "Projects slip and costs grow before anyone notices",
      "Cement, steel and tools disappear between sites",
      "Owners ask for progress and reports take days to prepare",
    ],
    solutions: [
      {
        name: "Construction management",
        solutionId: "construction-management",
        provides: "Schedule, budget and crews for each site, with progress against plan",
      },
      {
        name: "Inventory and logistics",
        solutionId: "inventory-logistics",
        provides: "Materials and equipment tracked per site, from delivery to use",
      },
      {
        name: "Quality control",
        solutionId: "quality-control",
        provides: "Site inspection checklists with photos, signed on a phone",
      },
      {
        name: "Daily site reports",
        solutionId: "construction-management",
        provides: "Foremen report progress, weather and issues from a phone in minutes",
      },
      {
        name: "Client progress view",
        solutionId: "construction-management",
        provides: "A simple dashboard the project owner can open at any time",
      },
      {
        name: "Staff training (e-learning)",
        solutionId: "e-learning",
        provides: "Safety and site procedure courses for crews",
      },
    ],
    pilot: "One site, one-month pilot",
    gains: [
      "Projects on time and on budget",
      "Less material lost on site",
      "Owners who see progress without asking",
    ],
    cta: { action: "Book a free visit", label: "Book a free visit and put your next site on one screen" },
    image: {
      src: "sectors/construction.webp",
      alt: "Two construction workers in hard hats on a tiled roof",
      credit: { photographer: "David Geneugelijk", url: "https://unsplash.com/photos/d4j5hns6sj8" },
    },
    seo: {
      title: "Construction Management Software Ethiopia | AndHub",
      description:
        "Schedule, budget, materials and daily site reports for contractors and developers in Ethiopia. Every site on one screen.",
    },
  },
  {
    slug: "aerospace-and-aviation",
    name: "Aerospace and aviation",
    headline: "Reliability, maintenance and readiness tools for aerospace and aviation teams",
    intro:
      "Airlines, maintenance centres, aerospace manufacturers and space institutes work with complex systems where every decision must be backed by evidence. AndHub brings systems-engineering research into tools their engineers use every day — from the aircraft hangar to small satellites.",
    challenges: [
      "Complex systems with strict safety and review rules",
      "Reliability data spread across many files and teams",
      "Knowledge leaves when experienced engineers leave",
    ],
    solutions: [
      {
        name: "Reliability and maintenance tracking",
        product: "ModelNesh",
        provides:
          "Component and fleet reliability data in one place, with trends and alerts",
      },
      {
        name: "Engineering readiness dashboard",
        product: "ModelNesh",
        provides: "Clear, measurable progress for each design or maintenance review",
      },
      {
        name: "Inventory and logistics",
        solutionId: "inventory-logistics",
        provides: "Spare parts and tools tracked by location, with reorder alerts",
      },
      {
        name: "Quality control",
        solutionId: "quality-control",
        provides: "Inspection and safety records that are complete and easy to audit",
      },
      {
        name: "Knowledge capture",
        provides: "Engineering decisions and lessons stored so new staff can find them",
      },
      {
        name: "Technical training (e-learning)",
        solutionId: "e-learning",
        provides: "Courses for engineers and technicians on their own schedule",
      },
    ],
    pilot: "One working group on one system, starting from reliability data",
    gains: [
      "Safer, faster decisions backed by data",
      "Reviews that show exactly what is ready and what is missing",
      "Knowledge that stays in the organisation",
    ],
    cta: { action: "Book a technical session", label: "Book a technical session with our systems-engineering team" },
    image: {
      src: "sectors/aerospace-and-aviation.webp",
      alt: "Aircraft landing gear under maintenance in a hangar",
      credit: { photographer: "Z Zhang", url: "https://unsplash.com/photos/0EP0cTzLJPQ" },
    },
    seo: {
      title: "Aerospace and Aviation Systems Engineering | AndHub",
      description:
        "Reliability tracking, engineering readiness dashboards and training for airlines, maintenance centres and space institutes.",
    },
    story: {
      steps: ["Aircraft", "Hub", "Small satellite", "Systems engineering"],
      line: "From the hangar to orbit, engineering readiness you can measure",
    },
  },
  {
    slug: "banking-and-finance",
    name: "Banking and finance",
    headline: "Loan-to-business tracking and portfolio dashboards for banks and microfinance institutions",
    intro:
      "Banks, microfinance institutions and investment groups lend to thousands of small businesses but mostly track money, not whether the business is working. AndHub follows both the loan and the business it funds.",
    challenges: [
      "Loans are tracked as payments, not as working businesses",
      "Loan officers decide on judgement, with little evidence",
      "Many customers open digital accounts but rarely use them",
    ],
    solutions: [
      {
        name: "Loan-to-business tracking",
        product: "BikiltuTrack",
        provides:
          "Each loan followed from application to closure, alongside the borrower’s business results",
      },
      {
        name: "Evidence-based scorecards",
        provides:
          "Monthly scores built from the borrower’s own records, so every approval has a reason",
      },
      {
        name: "Borrower business tools",
        provides: "Simple templates for stock, sales and cash flow that borrowers use every day",
      },
      {
        name: "Digital payments integration",
        provides: "Telebirr and bank payments linked to repayments and purchases",
      },
      {
        name: "Management dashboards",
        provides: "Portfolio health by branch, sector and region on one screen",
      },
      {
        name: "Borrower training (e-learning)",
        solutionId: "e-learning",
        provides: "Short business and finance courses on borrowers’ phones",
      },
    ],
    pilot: "One branch or one loan programme, one pilot cycle",
    gains: [
      "Better lending decisions with clear evidence",
      "Early warning before a loan goes bad",
      "More active digital customers",
    ],
    cta: {
      action: "Book a demo", label: "Book a demo of BikiltuTrack with your loan team",
      toConfirm: true,
      note: "BikiltuTrack is in development — confirm a demo is ready.",
    },
    image: {
      src: "sectors/banking-and-finance.webp",
      alt: "Team of professionals meeting around a table in a bright office",
      credit: { photographer: "Christina @ wocintechchat.com", url: "https://unsplash.com/photos/faEfWCdOKIg" },
    },
    seo: {
      title: "Loan Tracking System for Banks and MFIs | AndHub",
      description:
        "Follow every loan and the business it funds. Loan-to-business tracking, scorecards and dashboards for lenders in Ethiopia.",
    },
  },
  {
    slug: "brands-and-exporters",
    name: "Brands and exporters",
    family: "sell",
    headline: "QR product identity, traceability and online sales for brands and exporters",
    intro:
      "Coffee, food, leather and craft brands compete with copies at home and with demanding buyers abroad. AndHub gives every product a digital identity and every brand its own direct channel to buyers.",
    challenges: [
      "Fake copies take your customers and damage your name",
      "Export buyers ask for proof of origin and batch",
      "You depend on middlemen to reach buyers",
    ],
    solutions: [
      {
        name: "QR product identity",
        solutionId: "brand-traceability",
        provides: "A unique code on every product or carton that shows it is genuine",
      },
      {
        name: "Origin and batch records",
        solutionId: "brand-traceability",
        provides: "Farm, factory and batch details buyers can check with one scan",
      },
      {
        name: "Online store and catalogue",
        solutionId: "e-commerce",
        provides: "Your own shop for local buyers and a catalogue for export buyers",
      },
      {
        name: "Inventory linked to orders",
        solutionId: "inventory-logistics",
        provides: "Stock updates by itself as orders come in",
      },
      {
        name: "Customer feedback from scans",
        solutionId: "brand-traceability",
        provides: "Buyers can rate the product and contact you from the scan page",
      },
      {
        name: "Packaging partner programme",
        provides: "We work with your packaging printer so codes go on at production",
      },
    ],
    pilot: "One product line, one-month pilot",
    gains: [
      "A protected brand",
      "More direct sales, less dependence on middlemen",
      "Trust from export buyers",
    ],
    cta: {
      action: "Book a demo", label: "Scan our sample code and book a demo for your product",
      toConfirm: true,
      note: "Needs a real sample QR code and the page it opens.",
    },
    image: {
      src: "sectors/brands-and-exporters.webp",
      alt: "Roasted Ethiopian coffee beans in an open bag",
      credit: { photographer: "Yoseph Hailu", url: "https://unsplash.com/photos/XiOdESRTMy4" },
    },
    seo: {
      title: "QR Product Traceability for Brands | AndHub",
      description:
        "QR product identity, origin records and an online store for coffee, food, leather and craft brands in Ethiopia.",
    },
  },
  {
    slug: "schools-and-colleges",
    name: "Schools and colleges",
    family: "learn-build",
    headline: "Online learning, exams, student records and parent portals for schools and colleges",
    intro:
      "Private schools, universities and TVET colleges want better results, organised records and parents who stay involved. AndHub puts teaching, exams and records online, on the phones students and parents already have.",
    challenges: [
      "Lessons are lost when students or teachers are away",
      "Grades and records sit on paper and get lost",
      "Parents only learn about problems at the end of the term",
    ],
    solutions: [
      {
        name: "Online courses",
        solutionId: "e-learning",
        provides:
          "Lessons, notes and videos on phone or computer, in Amharic, Afaan Oromo or English",
      },
      {
        name: "Exams and grades",
        solutionId: "e-learning",
        provides: "Online quizzes and exams, marked and recorded in one place",
      },
      {
        name: "Student records",
        solutionId: "e-learning",
        provides: "Attendance, grades and reports kept safe and easy to find",
      },
      {
        name: "Parent portal",
        solutionId: "e-learning",
        provides: "Parents follow attendance and grades from their phone",
      },
      {
        name: "Teacher and director dashboards",
        solutionId: "e-learning",
        provides: "Class and school results at a glance",
      },
      {
        name: "Fee payment tracking",
        provides: "School fees paid by Telebirr or bank and tracked per student",
      },
    ],
    pilot: "One class or one course, one-term pilot",
    gains: [
      "Better results and fewer lost lessons",
      "Records that never get lost",
      "Parents who are informed and involved",
    ],
    cta: { action: "Start with one class", label: "Start with one class and see the difference in one term" },
    image: {
      src: "sectors/schools-and-colleges.webp",
      alt: "Students at wooden desks in a classroom with a blackboard",
      credit: { photographer: "Zach Wear", url: "https://unsplash.com/photos/wjCYyd_KppE" },
    },
    seo: {
      title: "Learning Management System Ethiopia | AndHub",
      description:
        "Online courses, exams, student records and a parent portal for schools, universities and TVET colleges in Ethiopia.",
    },
  },
];

export function findSector(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}
