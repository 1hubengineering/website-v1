import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  Moon,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Sun,
  Workflow,
  Zap,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Brand, BrandMark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Feature43 } from "@/components/blocks/feature43";
import { Faq11 } from "@/components/blocks/faq11";
import { Cta26 } from "@/components/blocks/cta26";
import { Projects } from "@/components/projects";
import { ModalContent, ProjectInquiry } from "@/components/project-inquiry";

const nav = [
  { label: "Expertise", id: "services" },
  { label: "Our work", id: "work" },
  { label: "About us", id: "about" },
  { label: "Our process", id: "process" },
];
function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    // Initial fragments can be resolved before React mounts the target section.
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return;
    let cancelled = false;
    void document.fonts.ready.then(() => {
      if (!cancelled) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "instant", block: "start" });
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    nav.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#0b1f3b" : "#ffffff");
    try {
      localStorage.setItem("andhub-theme", next);
    } catch {
      /* Storage is optional. */
    }
  }
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => (
              <a
                key={item.id}
                className={active === item.id ? "active" : ""}
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
            <span className="header-divider" />
            <Button className="header-cta" size="sm" onClick={() => setInquiryOpen(true)}>
              Let’s talk
              <ArrowUpRight />
            </Button>
            <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
              <Dialog.Trigger
                ref={menuButtonRef}
                className="menu-toggle"
                aria-label="Open navigation"
              >
                <span />
                <span />
              </Dialog.Trigger>
              <ModalContent className="mobile-menu">
                <Dialog.Title>Explore AndHub</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Navigate to a section of the website.
                </Dialog.Description>
                <nav aria-label="Mobile navigation">
                  {nav.map((item) => (
                    <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                      {item.label}
                      <ArrowUpRight size={21} />
                    </a>
                  ))}
                  <Button
                    onClick={() => {
                      setMenuOpen(false);
                      setInquiryOpen(true);
                    }}
                  >
                    Start a project
                    <ArrowUpRight />
                  </Button>
                </nav>
              </ModalContent>
            </Dialog.Root>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" />
          <div className="hero-ambient" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="hero-badge">
                <span className="status-dot" /> ANDHUB ENGINEERING PLC
              </div>
              <h1 id="hero-title">
                Ideas.
                <br />
                <span className="hero-emphasis">Engineered.</span>
              </h1>
              <p>
                We turn ideas into solutions that make a difference. Software development, systems
                engineering and consultancy built around your needs.
              </p>
              <div className="hero-actions">
                <Button size="lg" onClick={() => setInquiryOpen(true)}>
                  Build with us
                  <ArrowUpRight />
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#work">
                    Explore our work
                    <ArrowRight />
                  </a>
                </Button>
              </div>
              <div className="hero-proof">
                <div className="proof-icons">
                  <span>
                    <Code2 size={16} />
                  </span>
                  <span>
                    <Workflow size={16} />
                  </span>
                  <span>
                    <Cpu size={16} />
                  </span>
                </div>
                <p>
                  Engineering minds. <strong>Real-world impact.</strong>
                  <br />
                  <span>Software expertise meets systems thinking.</span>
                </p>
              </div>
            </div>
            <div className="brand-showcase" aria-hidden="true">
              <span className="showcase-label">CONNECTED BY DESIGN</span>
              <BrandMark surface="dark" />
              <div className="showcase-caption">
                <span>
                  Different challenges.
                  <br />
                  Infinite possibilities.
                </span>
                <strong>One Hub.</strong>
              </div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>INDEPENDENT THINKING. CONNECTED SOLUTIONS.</span>
            <a href="#services">
              Discover the AndHub approach
              <ArrowDown size={13} />
            </a>
          </div>
        </section>
        <div className="capabilities-strip">
          <div className="container">
            {[
              { icon: Code2, text: "SOFTWARE DEVELOPMENT" },
              { icon: Workflow, text: "SYSTEMS ENGINEERING" },
              { icon: Globe2, text: "CONSULTANCY" },
            ].map(({ icon: Icon, text }) => (
              <span key={text}>
                <Icon size={20} aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>
        </div>
        <Feature43 />
        <Projects />
        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="container">
            <div className="about-layout">
              <div className="about-visual">
                <div className="about-orbit" />
                <div className="about-orbit second" />
                <div className="about-center">
                  <Cpu size={38} strokeWidth={1} />
                  <span>
                    CONNECTED
                    <br />
                    <strong>BY DESIGN.</strong>
                  </span>
                </div>
                <div className="about-node node-code">
                  <Code2 size={21} />
                  <span>SOFTWARE</span>
                </div>
                <div className="about-node node-system">
                  <Workflow size={21} />
                  <span>SYSTEMS</span>
                </div>
                <div className="about-node node-people">
                  <Globe2 size={21} />
                  <span>PEOPLE</span>
                </div>
                <span className="about-visual-caption">THE WHOLE IS GREATER THAN THE PARTS.</span>
                <span className="about-corner">FIG. 02 / OUR DNA</span>
              </div>
              <div className="about-copy">
                <span className="eyebrow">THE THINKING BEHIND THE BUILD</span>
                <h2 id="about-title">
                  Different disciplines.
                  <br />
                  <span className="muted-heading">One shared vision.</span>
                </h2>
                <p>
                  AndHub is a software development, systems engineering, and consultancy company
                  helping businesses of all sizes design, build, and improve the technology and
                  systems they depend on.
                </p>
                <p>
                  We bring software developers and systems engineers together to solve challenges,
                  simplify operations, and create lasting value.
                </p>
                <div className="about-values">
                  <span>
                    <ShieldCheck size={17} />
                    Purpose before complexity
                  </span>
                  <span>
                    <Sparkles size={17} />
                    Care in every detail
                  </span>
                </div>
                <a href="#team" className="text-link">
                  Meet the expertise
                  <ArrowDown size={15} />
                </a>
              </div>
            </div>
            <div className="team-grid" id="team">
              <div className="team-card">
                <div className="team-icon">
                  <Code2 size={25} />
                </div>
                <div>
                  <span className="eyebrow">FOUNDER AND CEO</span>
                  <h3>Mr. Abraham Bekele</h3>
                  <p>
                    <a href="mailto:abraham@1hubengineering.com">abraham@1hubengineering.com</a>
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-icon">
                  <Workflow size={25} />
                </div>
                <div>
                  <span className="eyebrow">FOUNDER AND CTO</span>
                  <h3>Dr. Rehoboth Bekele</h3>
                  <p>
                    <a href="mailto:rehoboth@1hubengineering.com">rehoboth@1hubengineering.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section process-section" id="process" aria-labelledby="process-title">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">A CLEAR PATH FORWARD</span>
                <h2 id="process-title">
                  From your first “what if”
                  <br />
                  <span className="muted-heading">to your next big step.</span>
                </h2>
              </div>
              <p>
                Close collaboration. Clear milestones.
                <br />A thoughtful process that keeps you in the loop.
              </p>
            </div>
            <div className="process-grid">
              {[
                {
                  n: "01",
                  icon: ScanLine,
                  title: "Discover",
                  text: "We listen, ask better questions, and get to the heart of what you need.",
                },
                {
                  n: "02",
                  icon: Layers3,
                  title: "Shape",
                  text: "We turn the challenge into a clear plan and an experience that makes sense.",
                },
                {
                  n: "03",
                  icon: Braces,
                  title: "Engineer",
                  text: "We build with care, test the details, and keep you part of the process.",
                },
                {
                  n: "04",
                  icon: Zap,
                  title: "Evolve",
                  text: "We learn from real use and refine the solution as your needs grow.",
                },
              ].map(({ n, icon: Icon, title, text }) => (
                <div className="process-step" key={n}>
                  <div className="process-step-top">
                    <span>{n}</span>
                    <Icon size={18} />
                  </div>
                  <div className="process-line">
                    <i />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="process-promise">
              <ShieldCheck size={17} />
              <span>
                Strong foundations. Thoughtful execution.{" "}
                <strong>Built to keep moving forward.</strong>
              </span>
            </div>
          </div>
        </section>
        <Faq11 />
        <Cta26 onInquiry={() => setInquiryOpen(true)} />
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Brand footer />
              <p>
                Ideas. Engineered.
                <br />
                Lebu, Addis Ababa, Ethiopia.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <span>EXPLORE</span>
                {nav.map((item) => (
                  <a href={`#${item.id}`} key={item.id}>
                    {item.label}
                  </a>
                ))}
              </div>
              <div>
                <span>LET’S CONNECT</span>
                <button onClick={() => setInquiryOpen(true)}>
                  Start a project
                  <ArrowUpRight size={13} />
                </button>
                <a
                  href="https://github.com/1hubengineering"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ArrowUpRight size={13} />
                </a>
                <a href="#faq">Questions & answers</a>
                <a href="mailto:info@1hubengineering.com">info@1hubengineering.com</a>
                <a href="tel:+251913231123">+251 913 231 123</a>
                <a href="tel:+251922964576">+251 922 964 576</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} AndHub Engineering PLC.</span>
            <span className="footer-signoff">
              <span className="status-dot" /> IDEAS. ENGINEERED.
            </span>
            <a href="#top">
              Back to top
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>
      <ProjectInquiry
        open={inquiryOpen}
        onOpenChange={setInquiryOpen}
        returnFocusFallback={menuButtonRef}
      />
    </>
  );
}
export default App;
