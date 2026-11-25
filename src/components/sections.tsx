import { ArrowRight, ArrowUpRight, Check, Globe2, Layers3, Network, Search } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { sectorIcons } from "@/components/sector-icons";
import { sectors } from "@/content/sectors";
import { approach, company, primaryCta, whyAndhub } from "@/content/site";

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

const whyIcons = [Search, Layers3, Network, Globe2];

export function WhyGrid() {
  return (
    <ul className="why-grid">
      {whyAndhub.map((item, index) => {
        const Icon = whyIcons[index];
        return (
          <li key={item.title} className="why-card">
            <span className="why-card-icon">
              <Icon size={24} aria-hidden="true" />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
}

// "Our approach": ticked steps joined by one continuous line. The ticks fill in one
// after another when the section scrolls into view; the server render and reduced
// motion show every step ticked.
export function ApproachFlow() {
  const list = useRef<HTMLOListElement>(null);
  const [state, setState] = useState<"static" | "waiting" | "ticking">("static");

  useEffect(() => {
    const element = list.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setState("waiting");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("ticking");
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={list} className={`approach-flow is-${state}`}>
      {approach.map((step, index) => (
        <li
          className="approach-step"
          key={step}
          style={{ "--step": index } as CSSProperties}
        >
          <span className="approach-tick" aria-hidden="true">
            <Check size={22} strokeWidth={3} />
          </span>
          <h3>{step}</h3>
        </li>
      ))}
    </ol>
  );
}

// Sector challenges as cards in the brochure's warm green, without icons.
export function ChallengeCards({ items }: { items: string[] }) {
  return (
    <ul className="challenge-cards">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
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
