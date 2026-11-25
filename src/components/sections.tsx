import {
  ArrowRight,
  ArrowUpRight,
  ChartColumn,
  Clock,
  FlaskConical,
  Languages,
  Layers3,
  MapPin,
  Search,
  TrendingUp,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { sectorIcons } from "@/components/sector-icons";
import { sectors } from "@/content/sectors";
import { company, howWeWork, primaryCta, whyAndhub } from "@/content/site";

// Visible marker for content the owner still has to approve (see the brief).
export function ToConfirm({ note }: { note?: string }) {
  return (
    <span className="to-confirm" title={note}>
      [to confirm]
    </span>
  );
}

export function SectorGrid({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
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
              <Heading>{sector.name}</Heading>
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
  );
}

const whyIcons = [Search, Layers3, Clock, Languages];

export function WhyGrid() {
  return (
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
  );
}

const stepIcons = [MapPin, FlaskConical, ChartColumn, TrendingUp];

export function StepsGrid() {
  return (
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
  );
}

export function SectionHeading({
  id,
  title,
  aside,
}: {
  id: string;
  title: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <h2 id={id}>{title}</h2>
      </div>
      {aside}
    </div>
  );
}

// Closing navy band. Every sector page ends with one.
export function CtaBand({
  id = "contact",
  title = "Start with a free discovery visit",
  text = "We learn how you work today, then propose a one-month pilot",
  action = primaryCta.label,
  to = primaryCta.to,
  marker,
}: {
  id?: string;
  title?: string;
  text?: string;
  action?: string;
  to?: string;
  marker?: ReactNode;
}) {
  return (
    <section className="home-cta on-navy" id={id} aria-labelledby={`${id}-title`}>
      <div className="container home-cta-inner">
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="home-cta-actions">
          <Button size="lg" asChild>
            <Link to={to}>
              {action}
              <ArrowUpRight />
            </Link>
          </Button>
          {marker}
          <a href={`mailto:${company.email}`}>{company.email}</a>
          {company.phones.map((phone) => (
            <a key={phone.href} href={phone.href}>
              {phone.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
