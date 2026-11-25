import {
  ArrowRight,
  ArrowUpRight,
  ChartColumn,
  Clock,
  Code2,
  Cpu,
  FlaskConical,
  Languages,
  Layers3,
  MapPin,
  Search,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { Link } from "react-router";
import { BrandMark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { sectorIcons } from "@/components/sector-icons";
import { company, howWeWork, primaryCta, services, whyAndhub } from "@/content/site";
import { sectors } from "@/content/sectors";
import { projects } from "@/lib/projects";

const serviceDetails = [
  {
    icon: Code2,
    text: "Web, mobile and business software built around how your people work every day.",
  },
  {
    icon: Workflow,
    text: "We study how your people, machines and data work together before we build.",
  },
  {
    icon: Cpu,
    text: "Live dashboards, alerts and forecasts that keep your operations running.",
  },
];

const whyIcons = [Search, Layers3, Clock, Languages];
const stepIcons = [MapPin, FlaskConical, ChartColumn, TrendingUp];

export function HomePage() {
  return (
    <>
      <section className="home-hero on-navy" aria-labelledby="hero-title">
        <div className="hero-grid" />
        <div className="container home-hero-layout">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span className="status-dot" /> {company.name} · Addis Ababa
            </p>
            <h1 id="hero-title">
              Ideas.
              <br />
              <span className="hero-emphasis">Engineered.</span>
            </h1>
            <p className="hero-lead">{company.whatWeDo}</p>
            <ul className="hero-services" aria-label="Our services">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Button size="lg" asChild>
                <Link to={primaryCta.to}>
                  {primaryCta.label}
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/solutions/">
                  See our solutions
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="home-hero-mark" aria-hidden="true">
            <BrandMark surface="dark" />
          </div>
        </div>
      </section>

      <section className="section" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WHAT WE DO</span>
              <h2 id="services-title">Three services. One team.</h2>
            </div>
            <p>We start with a small pilot and prove the value before you scale.</p>
          </div>
          <div className="home-services">
            {services.map((service, index) => {
              const { icon: Icon, text } = serviceDetails[index];
              return (
                <article className="home-card" key={service}>
                  <span className="home-card-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3>{service}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-surface" id="sectors" aria-labelledby="sectors-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WHO WE WORK WITH</span>
              <h2 id="sectors-title">Eight sectors. One engineering partner.</h2>
            </div>
            <Link to="/sectors/" className="text-link">
              All sectors
              <ArrowRight size={16} />
            </Link>
          </div>
          <ul className="sector-grid">
            {sectors.map((sector) => {
              const Icon = sectorIcons[sector.slug];
              return (
                <li key={sector.slug}>
                  <Link
                    className="sector-card"
                    to={`/sectors/${sector.slug}/`}
                    data-family={sector.family ?? "none"}
                  >
                    <Icon size={22} aria-hidden="true" />
                    <h3>{sector.name}</h3>
                    <p>{sector.headline}</p>
                    <span className="sector-card-more">
                      Read more
                      <ArrowRight size={15} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section" id="why" aria-labelledby="why-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WHY ANDHUB</span>
              <h2 id="why-title">Why companies choose us.</h2>
            </div>
          </div>
          <ul className="why-grid">
            {whyAndhub.map((item, index) => {
              const Icon = whyIcons[index];
              return (
                <li key={item.title}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section process-section" id="process" aria-labelledby="process-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HOW WE WORK</span>
              <h2 id="process-title">Start small. Measure. Then scale.</h2>
            </div>
          </div>
          <ol className="process-grid">
            {howWeWork.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <li className="process-step" key={step.title}>
                  <div className="process-step-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div className="process-line">
                    <i />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR PROJECTS</span>
              <h2 id="work-title">What we build.</h2>
            </div>
            <Link to="/projects/" className="text-link">
              All projects
              <ArrowRight size={16} />
            </Link>
          </div>
          <ul className="project-strip">
            {projects.slice(0, 4).map((project) => (
              <li key={project.name}>
                <Link to="/projects/" className="home-card project-strip-card">
                  <span className="project-strip-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span className="project-strip-status">{project.status}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-cta on-navy" id="contact" aria-labelledby="cta-title">
        <div className="container home-cta-inner">
          <div>
            <span className="eyebrow">FIRST STEP</span>
            <h2 id="cta-title">Start with a free discovery visit.</h2>
            <p>We learn how you work today, then propose a one-month pilot.</p>
          </div>
          <div className="home-cta-actions">
            <Button size="lg" asChild>
              <Link to={primaryCta.to}>
                {primaryCta.label}
                <ArrowUpRight />
              </Link>
            </Button>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            {company.phones.map((phone) => (
              <a key={phone.href} href={phone.href}>
                {phone.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
