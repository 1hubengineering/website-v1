import { ArrowRight, ArrowUpRight, BrainCircuit, Code2, Network, Workflow } from "lucide-react";
import { Link } from "react-router";
import { HubOrbit } from "@/components/hub-orbit";
import { Button } from "@/components/ui/button";
import {
  ApproachFlow,
  CtaBand,
  SectionHeading,
  SectorGrid,
  WhyGrid,
} from "@/components/sections";
import { company, primaryCta, services } from "@/content/site";

const serviceDetails = [
  {
    icon: Code2,
    text: "Web, mobile and business software built around how your people work every day",
  },
  {
    icon: Network,
    text: "We study how your people, machines and data work together before we build",
  },
  {
    icon: Workflow,
    text: "Manual steps turned into automatic workflows, with live dashboards of output and stock",
  },
  {
    icon: BrainCircuit,
    text: "Alerts and forecasts from your own data, for maintenance, quality, stock and demand",
  },
];

export function HomePage() {
  return (
    <>
      <section className="home-hero on-navy" aria-labelledby="hero-title">
        <div className="container home-hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title">
              <span className="hero-line">Ideas.</span>
              <br />
              <span className="hero-line hero-emphasis">Engineered.</span>
            </h1>
            <p className="hero-lead hero-rise">{company.whatWeDo}</p>
            <div className="hero-actions hero-rise">
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
          <div className="home-hero-mark">
            <HubOrbit />
          </div>
        </div>
      </section>

      <section className="section" id="services" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading id="services-title" title="Core services" />
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
          <SectionHeading
            id="sectors-title"
            title="Sector digital solutions"
            aside={
              <Link to="/sectors/" className="text-link">
                All sectors
                <ArrowRight size={16} />
              </Link>
            }
          />
          <SectorGrid />
        </div>
      </section>

      <section className="section" id="why" aria-labelledby="why-title">
        <div className="container">
          <SectionHeading id="why-title" title="Why AndHub" />
          <WhyGrid />
        </div>
      </section>

      <section className="section process-section" id="approach" aria-labelledby="approach-title">
        <div className="container">
          <SectionHeading id="approach-title" title="Our approach" />
          <ApproachFlow />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
