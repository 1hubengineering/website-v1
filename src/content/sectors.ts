import type { Confirmable } from "./site";
import type { FamilyId, LinkedSolutionId } from "./solutions";

// Eight client sectors. Wording from the website brief; field order follows
// the sector page template: headline, intro, challenges, solutions, pilot,
// gains, call to action.

export type SectorSolution = {
  name: string;
  provides: string;
  // Links the row to one of the seven solutions when it maps to one.
  solutionId?: LinkedSolutionId;
};

export type SectorImage = {
  src: string;
  alt: string;
  credit: { photographer: string; url: string };
};

export type Sector = {
  slug: string;
  name: string;
  family?: FamilyId;
  headline: string;
  intro: string;
  challenges: string[];
  // Optional "sector to solution" story (construction first; other sectors to follow):
  // a named challenges heading, the reader's situation as a question, our answer, and
  // the digital solution we provide. The challenges are repeated as what it tackles.
  challengesTitle?: string;
  question?: string;
  answer?: string;
  offering?: string;
  solutions: SectorSolution[];
  pilot: string;
  gains: [string, string, string];
  cta: Confirmable & { label: string; action: string };
  // Hero photos (1920×1080 WebP) under the Unsplash License, Pexels License or NASA media
  // guidelines: free commercial use; credits kept here and in public/sectors/CREDITS.md.
  // First photo is the poster (pre-rendered); the rest cross-fade in the hero.
  images: SectorImage[];
  seo: { title: string; description: string };
  story?: { steps: string[]; line: string };
  // This sector's own title or photo for a Solutions-page group on its sector page.
  groupOverrides?: Record<string, { title?: string; image?: { src: string; alt: string } }>;
};

export const sectors: Sector[] = [
  {
    slug: "food-and-beverage",
    name: "Food and beverage",
    family: "make",
    headline: "Stock, quality and production software for food and beverage factories",
    intro:
      "Flour mills, bakeries, dairies, breweries, juice and water bottlers live on fresh stock, tight margins and food safety. AndHub gives them one system to see what they hold, what they make and where every batch goes",
    challengesTitle: "Core challenges in food and beverage production",
    challenges: [
      "Raw material and expiry control",
      "Quality control",
      "Food safety and hygiene compliance",
      "Batch traceability",
      "Production line downtime",
      "Order and delivery management",
    ],
    question:
      "Are you running mills, bakeries, dairies, breweries or bottling lines where raw materials expire, a bad batch can reach the market, and nobody can say where it came from or why the line stopped?",
    answer: "Integrated production, quality and traceability management is here to help you",
    offering: "Food production, quality and traceability management system",
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
    // Food processing, then a brewery: brew kettles, fermentation tanks, bottling.
    images: [
      {
        src: "sectors/food-and-beverage-c.webp",
        alt: "A packaged food production line with snack bags on conveyors and staff in hygiene wear",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/food-and-beverage-b.webp",
        alt: "A brewery filling line with beer bottles, steel tanks and two workers checking the line",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/food-and-beverage-a.webp",
        alt: "A juice bottling line in a bright factory, rows of orange juice bottles on the conveyor",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
    ],
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
    challengesTitle: "Core challenges in leather and garment manufacturing",
    challenges: [
      "Order tracking and buyer deadlines",
      "Quality control",
      "Raw material control (hides, fabric and trims)",
      "Production line efficiency",
      "Operator skills and training",
      "Export compliance and traceability",
    ],
    question:
      "Are you producing for local and export buyers, with orders, hides, fabric and operators spread across several lines, and no live view of which order is late or why a shipment was rejected?",
    answer: "Integrated order, quality and traceability management is here to help you",
    offering: "Order, quality and traceability management system",
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
    // Garment cutting floor, leather cutting and leather stitching (no logos, flags or close faces).
    images: [
      {
        src: "sectors/leather-and-garments-a.webp",
        alt: "Workers checking leather handbags and hides in a bright factory, one with a tablet",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/leather-and-garments-b.webp",
        alt: "A quality check on folded garments with a tablet in a sewing factory",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/leather-and-garments-c.webp",
        alt: "A leather workshop team inspecting a hide beside finished bags, one holding a tablet",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/leather-and-garments-d.webp",
        alt: "A leather production line in Addis Ababa, workers cutting and stitching hides",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/leather-and-garments-e.webp",
        alt: "A garment factory floor with sewing lines and an order tracking screen",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
    ],
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
    headline: "Production, maintenance and quality control software for metal and engineering manufacturers",
    intro:
      "Steel mills, fabrication workshops and engineering firms run many jobs at once on expensive machines. AndHub shows where every job stands, which machine needs care and what material is left.",
    challengesTitle: "Core challenges in metal and engineering manufacturing",
    challenges: [
      "Production planning",
      "Machine downtime and maintenance",
      "Material and spare parts control",
      "Quality and inspection records",
      "Workplace safety",
      "On-time delivery",
    ],
    question:
      "Are you running several workshops and production lines, with jobs, machines and steel stock spread across the floor, and no live view of what is late or about to break down?",
    answer: "Integrated production and maintenance management is here to help you",
    offering: "Production, maintenance and inventory management system",
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
    // Metal fabrication and the different parts of the industry: fabrication hall, machining, steel mill, foundry, steel structures.
    images: [
      {
        src: "sectors/metal-and-engineering-a.webp",
        alt: "Machinists measuring machined steel parts at a bench in a busy workshop with lathes and CNC machines",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/metal-and-engineering-b.webp",
        alt: "A machinist checking a part with a caliper while a colleague records results on a clipboard",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/metal-and-engineering-c.webp",
        alt: "A steel fabrication hall with welders, frames under construction and an engineer inspecting a part",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/metal-and-engineering-d.webp",
        alt: "A workshop with CNC machines and production dashboards on screen, a technician at a computer",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
    ],
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
    challengesTitle: "Core challenges in construction management",
    challenges: [
      "Contract compliance",
      "Human resource management",
      "Construction material management",
      "Project deadlines",
      "Quality control",
      "Project delivery",
    ],
    question:
      "Are you managing construction projects across the country, following milestones on each one and leading several project managers, with no way to measure progress?",
    answer: "BIM and integrated project management are here to help you",
    offering: "Construction management and project management system",
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
    // Active building sites: crews, cranes, rebar, formwork and a high-rise.
    images: [
      {
        src: "sectors/construction.webp",
        alt: "Busy construction site with rebar, a concrete pump, a tower crane and workers",
        credit: { photographer: "Wolfgang Weiser", url: "https://www.pexels.com/photo/18283441/" },
      },
      {
        src: "sectors/construction-2.webp",
        alt: "Construction site from above with formwork, rebar columns and workers",
        credit: { photographer: "Davide Locatelli", url: "https://www.pexels.com/photo/2383649/" },
      },
      {
        src: "sectors/construction-3.webp",
        alt: "Building site with scaffolded concrete columns and cranes",
        credit: { photographer: "Tayssir Kadamany", url: "https://www.pexels.com/photo/37687676/" },
      },
      {
        src: "sectors/construction-4.webp",
        alt: "High-rise building under construction with a tower crane in Lagos",
        credit: { photographer: "Taiwo Samson", url: "https://www.pexels.com/photo/38511754/" },
      },
    ],
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
        name: "Systems engineering",
        solutionId: "systems-engineering",
        provides:
          "Requirements, architecture and verification for aircraft, drones and satellites, traced in one model",
      },
      {
        name: "Reliability and maintenance tracking",
        solutionId: "risk-reliability",
        provides:
          "Component and fleet reliability data in one place, with trends and alerts",
      },
      {
        name: "Engineering readiness dashboard",
        solutionId: "systems-engineering",
        provides: "Clear, measurable progress for each design or maintenance review",
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
    // From the ground to orbit: drone, aircraft, above the clouds, small satellite, space station.
    groupOverrides: {
      "track-hardware": {
        title: "Track systems engineering",
        image: {
          src: "solutions/track-se-aviation.webp",
          alt: "An engineer reviewing test data on several screens in a control room",
        },
      },
      "track-production": {
        title: "Track assembly, integration and test",
        image: {
          src: "solutions/track-ait-aviation.webp",
          alt: "Engineers in clean-room suits integrating a spacecraft in an assembly lab",
        },
      },
    },
    images: [
      {
        src: "sectors/aerospace-and-aviation.webp",
        alt: "Drone flying low over a green field",
        credit: { photographer: "Rebecca Niver", url: "https://unsplash.com/photos/1tQJKh_1vNo" },
      },
      {
        src: "sectors/aerospace-and-aviation-2.webp",
        alt: "Turboprop aircraft flying over mountains",
        credit: { photographer: "Dominic Bieri", url: "https://unsplash.com/photos/AIOE29iDmOM" },
      },
      {
        src: "sectors/aerospace-and-aviation-3.webp",
        alt: "Airliner wing high above a sea of clouds",
        credit: { photographer: "Johny Goerend", url: "https://unsplash.com/photos/KB9r_hTzyeQ" },
      },
      {
        src: "sectors/aerospace-and-aviation-4.webp",
        alt: "Small CubeSat satellites released into orbit above the ocean",
        credit: { photographer: "NASA", url: "https://images.nasa.gov/details/iss071e579940" },
      },
      {
        src: "sectors/aerospace-and-aviation-5.webp",
        alt: "International Space Station in orbit above the Earth",
        credit: { photographer: "NASA/Roscosmos", url: "https://images.nasa.gov/details/iss056e201248" },
      },
    ],
    seo: {
      title: "Aerospace and Aviation Systems Engineering | AndHub",
      description:
        "Reliability tracking, engineering readiness dashboards and training for airlines, maintenance centres and space institutes.",
    },
    story: {
      steps: [
        "Traceable engineering practice",
        "Unified digital engineering hub",
        "Multidisciplinary collaboration and communication",
        "Knowledge maturity",
        "Validated research to industry",
      ],
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
      action: "Book a free visit",
      label: "Book a free visit to see every loan and the business it funds",
    },
    // Addis Ababa today: skyline, Friendship Park, the city at night; then office and market.
    images: [
      {
        src: "sectors/banking-and-finance.webp",
        alt: "Addis Ababa skyline above green gardens under a blue sky",
        credit: { photographer: "Abenezer Muluken", url: "https://unsplash.com/photos/WBBkY_fpLiI" },
      },
      {
        src: "sectors/banking-and-finance-loan-a.webp",
        alt: "A loan officer going over a business plan on a laptop with two shop owners",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/banking-and-finance-2.webp",
        alt: "Friendship Park lake in Addis Ababa reflecting the city towers",
        credit: { photographer: "Yohannes Minas", url: "https://unsplash.com/photos/YPLosSc3w6A" },
      },
      {
        src: "sectors/banking-and-finance-loan-b.webp",
        alt: "A loan officer showing a tablet to a shop owner in her store",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/banking-and-finance-3.webp",
        alt: "Addis Ababa skyline at night above a lit park",
        credit: { photographer: "Abenezer Shewaga", url: "https://unsplash.com/photos/WMB-Fb5LHeg" },
      },
      {
        src: "sectors/banking-and-finance-loan-c.webp",
        alt: "A loan officer and a team of small business owners reviewing figures on a tablet",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
    ],
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
      action: "Book a free visit",
      label: "Book a free visit to see QR product identity on your own products",
    },
    images: [
      {
        src: "sectors/brands-and-exporters.webp",
        alt: "Roasted Ethiopian coffee beans in an open bag",
        credit: { photographer: "Yoseph Hailu", url: "https://unsplash.com/photos/XiOdESRTMy4" },
      },
      {
        src: "sectors/brands-and-exporters-2.webp",
        alt: "Coffee beans drying on raised beds at a farm",
        credit: { photographer: "Imanishimwe Regis", url: "https://www.pexels.com/photo/17366133/" },
      },
      {
        src: "sectors/brands-and-exporters-3.webp",
        alt: "Workers carrying sacks in a dark export warehouse",
        credit: { photographer: "Mwesigwa Joel", url: "https://www.pexels.com/photo/38715718/" },
      },
    ],
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
    images: [
      {
        src: "sectors/schools-and-colleges-a.webp",
        alt: "Students in uniform working on a laptop with their teacher in a bright classroom",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/schools-and-colleges-b.webp",
        alt: "Students in uniform reading a tablet together while their teacher looks on",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
      {
        src: "sectors/schools-and-colleges-c.webp",
        alt: "Students in uniform doing a science experiment with test tubes, with their teacher",
        credit: { photographer: "AndHub (supplied)", url: "" },
      },
    ],
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
