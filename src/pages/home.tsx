import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { BrandMark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Feature43 } from "@/components/blocks/feature43";
import { Faq11 } from "@/components/blocks/faq11";
import { Cta26 } from "@/components/blocks/cta26";
import { Projects } from "@/components/projects";
import { useOpenInquiry } from "@/components/inquiry-context";

export function HomePage() {
  const openInquiry = useOpenInquiry();
  return (
    <>
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
              <Button size="lg" onClick={openInquiry}>
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
      <Cta26 onInquiry={openInquiry} />
    </>
  );
}
