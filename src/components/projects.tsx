import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Command,
  Folder,
  KeyRound,
  LayoutDashboard,
  Search,
  Settings,
  Terminal,
  Users,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { ModalContent } from "@/components/project-inquiry";

export const projects = [
  {
    name: "Rental OS",
    category: "Products",
    type: "BUSINESS PLATFORM",
    description: "One platform. A more connected rental business.",
    detail:
      "A rental marketplace and management platform in development, bringing vendors, inventory, bookings, and customer experiences into one connected workflow.",
    tags: ["Web platform", "Business operations"],
    art: "rental",
    status: "In development",
    url: "",
  },
  {
    name: "Studio Proof",
    category: "Products",
    type: "PHOTOGRAPHY WORKFLOW",
    description: "The simpler way to find the perfect shot.",
    detail:
      "A local-first photo proofing application in development that helps studios and clients review, select, and deliver photographs on their own network.",
    tags: ["Desktop + web", "Local first"],
    art: "studio",
    status: "In development",
    url: "https://github.com/zdevzone/studio-proof-releases",
  },
  {
    name: "KeyForge",
    category: "Open source",
    type: "DEVELOPER INFRASTRUCTURE",
    description: "Your software. Your licenses. Your rules.",
    detail:
      "A self-hosted, MIT-licensed software licensing system with activations, trials, and offline license tokens.",
    tags: ["Open source", "Self hosted"],
    art: "keyforge",
    status: "Open source",
    url: "https://github.com/zdevzone/keyforge",
  },
  {
    name: "Say Bingo",
    category: "Products",
    type: "INTERACTIVE PRODUCT",
    description: "A little connection. A lot of possibility.",
    detail:
      "A Telegram-based multiplayer bingo experience in development, with game rooms, player wallets, and operator workflows.",
    tags: ["Telegram", "Multiplayer"],
    art: "bingo",
    status: "In development",
    url: "",
  },
  {
    name: "Afaan Oromo Bible",
    category: "Open source",
    type: "DESKTOP APPLICATION",
    description: "Read, study, and reflect. Wherever you are.",
    detail:
      "An offline-first Bible reading and study application in development for Windows, macOS, and Linux. Built around language accessibility.",
    tags: ["Desktop", "Offline first"],
    art: "bible",
    status: "In development · Open source",
    url: "https://github.com/zdevzone/afaan_oromo_bible",
  },
  {
    name: "Linux Setup",
    category: "Open source",
    type: "DEVELOPER EXPERIENCE",
    description: "A better environment for your next idea.",
    detail:
      "A portable development terminal setup with thoughtful defaults, useful tools, backups, and selective uninstall.",
    tags: ["Developer tools", "Open source"],
    art: "linux",
    status: "Open source",
    url: "https://github.com/zdevzone/linux-setup",
  },
];
type Project = (typeof projects)[number];
export function ProjectArt({ art }: { art: string }) {
  return (
    <div className={`project-art art-${art}`} aria-hidden="true">
      <span className="art-label">
        {art === "rental"
          ? "RENTAL / OS"
          : art === "studio"
            ? "STUDIO PROOF"
            : art === "keyforge"
              ? "KEYFORGE"
              : art === "bingo"
                ? "SAY BINGO"
                : art === "bible"
                  ? "AFAAN OROMO BIBLE"
                  : "LINUX / SETUP"}
      </span>
      <span className="art-caption">CONCEPT PREVIEW</span>
      {art === "rental" && (
        <div className="rental-window">
          <aside>
            <span className="rental-logo">
              r<span>·</span>
            </span>
            {[LayoutDashboard, Folder, Users, Settings].map((Icon, i) => (
              <Icon key={i} size={12} />
            ))}
          </aside>
          <div className="rental-main">
            <div className="rental-header">
              <strong>Overview</strong>
              <span>
                <Search size={9} /> Search anything
              </span>
            </div>
            <div className="rental-stats">
              <div>
                Total revenue
                <strong>
                  ETB 124,800<span>↗ 12.8%</span>
                </strong>
              </div>
              <div>
                Active rentals
                <strong>
                  48<span>↗ 8.2%</span>
                </strong>
              </div>
            </div>
            <div className="rental-chart">
              <span>Rental activity</span>
              <div className="chart-bars">
                {[35, 52, 42, 69, 56, 78, 64, 91, 72, 85, 70, 100].map((n, i) => (
                  <i style={{ height: `${n}%` }} key={i} />
                ))}
              </div>
            </div>
            <div className="rental-row">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )}
      {art === "studio" && (
        <div className="studio-window">
          <div className="studio-top">
            <strong>
              studio<span>proof</span>
            </strong>
            <span>
              Summer collection <Check size={10} />
            </span>
          </div>
          <div className="studio-pictures">
            {["one", "two", "three", "four", "five", "six"].map((n, i) => (
              <div className={`studio-picture picture-${n}`} key={n}>
                <span />
                {i === 1 || i === 4 ? (
                  <i>
                    <Check size={8} />
                  </i>
                ) : null}
              </div>
            ))}
          </div>
          <div className="studio-bottom">
            <span>YOUR STORY. YOUR SELECTION.</span>
            <b>
              2 photos selected <ArrowRight size={10} />
            </b>
          </div>
        </div>
      )}
      {art === "keyforge" && (
        <div className="keyforge-visual">
          <div className="key-orbit" />
          <div className="key-orbit second" />
          <div className="key-cube">
            <KeyRound size={49} strokeWidth={1.2} />
          </div>
          <div className="key-code">
            <span className="status-dot" /> license.verify()
            <span className="key-verified">
              verified <Check size={11} />
            </span>
          </div>
        </div>
      )}
      {art === "bingo" && (
        <div className="bingo-visual">
          <span className="bingo-word">
            say<span>bingo!</span>
          </span>
          <div className="bingo-balls">
            {["07", "23", "45", "61"].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <small>GOOD TIMES. GREAT CONNECTIONS.</small>
        </div>
      )}
      {art === "bible" && (
        <div className="bible-visual">
          <div className="book-cover">
            <BookOpen size={37} strokeWidth={1} />
            <strong>
              KITAABA
              <br />
              QULQULLUU
            </strong>
            <span>AFAAN OROMOO</span>
          </div>
          <div className="book-shadow" />
        </div>
      )}
      {art === "linux" && (
        <div className="terminal-window">
          <div className="terminal-top">
            <span>
              <i />
              <i />
              <i />
            </span>
            <span>~/ linux-setup</span>
            <Terminal size={11} />
          </div>
          <div className="terminal-lines">
            <p>
              <span>❯</span> ./install.sh
            </p>
            <p className="terminal-muted">Setting up your next great idea...</p>
            <p>
              <Check size={12} /> Developer tools
            </p>
            <p>
              <Check size={12} /> Terminal configuration
            </p>
            <p>
              <Check size={12} /> Environment ready
            </p>
            <p>
              <span>❯</span> <i className="terminal-cursor" />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export function Projects() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = projects.filter((p) => filter === "All work" || p.category === filter);
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">IDEAS. ENGINEERED.</span>
            <h2 id="work-title">
              The work speaks.
              <br />
              <span className="muted-heading">Take a closer look.</span>
            </h2>
          </div>
          <a
            href="https://github.com/1hubengineering"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <Command size={16} /> Explore our GitHub <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="work-toolbar">
          <div className="project-filters" role="group" aria-label="Filter projects">
            {["All work", "Products", "Open source"].map((f) => (
              <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f}
                <span>{f === "All work" ? "06" : "03"}</span>
              </button>
            ))}
          </div>
          <span className="work-count" role="status">
            {String(visible.length).padStart(2, "0")} projects / always building
          </span>
        </div>
        <div className="projects-grid">
          {visible.map((project) => (
            <article className="project-card" key={project.name}>
              <ProjectArt art={project.art} />
              <div className="project-info">
                <div className="project-meta">
                  <span>{project.type}</span>
                  <ArrowUpRight size={19} />
                </div>
                <h3>
                  <button className="project-open" onClick={() => setSelected(project)}>
                    <span className="sr-only">Explore </span>
                    {project.name}
                  </button>
                </h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  <span className="project-status">
                    <i />
                    {project.status.includes("development") ? "In development" : "Open source"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="portfolio-note">
          <span className="status-dot" />
          <p>
            A mix of products in progress and open-source contributions. Preview visuals illustrate
            each project’s purpose.
          </p>
        </div>
      </div>
      <Dialog.Root
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <ModalContent>
          {selected && (
            <>
              <ProjectArt art={selected.art} />
              <div className="project-dialog-body">
                <span className="eyebrow">{selected.type}</span>
                <Dialog.Title>{selected.name}</Dialog.Title>
                <Dialog.Description>{selected.detail}</Dialog.Description>
                <p className="detail-status">
                  <span className="status-dot" />
                  {selected.status}
                </p>
                {selected.url ? (
                  <Button asChild>
                    <a href={selected.url} target="_blank" rel="noopener noreferrer">
                      {selected.name === "Studio Proof"
                        ? "View public releases"
                        : "View repository"}
                      <ArrowUpRight />
                    </a>
                  </Button>
                ) : (
                  <Button asChild>
                    <a href="#contact" onClick={() => setSelected(null)}>
                      Ask us about this project
                      <ArrowUpRight />
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </ModalContent>
      </Dialog.Root>
    </section>
  );
}
