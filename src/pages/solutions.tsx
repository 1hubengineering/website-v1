import { useEffect, useRef, type CSSProperties } from "react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections";
import { trackGroups } from "@/content/solutions";

const base = import.meta.env.BASE_URL;

// Card accent follows the brand colour roles.
const familyFor = { blue: "make", green: "sell", navy: "learn-build" } as const;

// Rows rise in, and their cards slide in, as they scroll into view. Without
// JavaScript or with reduced motion everything is simply shown.
function useRevealRows() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rows = [...element.querySelectorAll<HTMLElement>(".solution-row")];
    rows.forEach((row) => row.classList.add("is-pending"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          entry.target.classList.remove("is-pending");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);
  return root;
}

export function SolutionsPage() {
  const rows = useRevealRows();
  return (
    <>
      {/* One quote to business owners, one size: the bridge we offer. */}
      <PageHero
        statement
        title={
          <q className="hook-quote">
            Running a business shouldn’t be a headache. We provide digital solutions that let
            owners track operations and resources from anywhere!
          </q>
        }
      />

      {/* Six groups of what owners track: a photo with the title, two short cards. The
          photo switches sides on each row. */}
      <div className="solution-rows" ref={rows}>
        {trackGroups.map((group, index) => (
          <section
            key={group.id}
            id={group.id}
            className={index % 2 ? "solution-row is-flipped" : "solution-row"}
            aria-labelledby={`${group.id}-title`}
          >
            <div className="container solution-row-grid">
              <div className="solution-photo">
                <img
                  src={`${base}${group.image.src}`}
                  alt={group.image.alt}
                  width="1920"
                  height="1080"
                  loading="lazy"
                  decoding="async"
                />
                <h2 id={`${group.id}-title`}>{group.title}</h2>
              </div>
              <ul className="solution-row-cards">
                {group.cards.map((card, cardIndex) => (
                  <li
                    key={card.id}
                    id={card.id}
                    className="solution-tile"
                    data-family={familyFor[group.color]}
                    style={{ "--delay": `${0.25 + cardIndex * 0.18}s` } as CSSProperties}
                  >
                    <span className="solution-tile-bar" aria-hidden="true" />
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <CtaBand
        title="Not sure which solution fits?"
        text="Book a free discovery visit: we look at how the business runs today and suggest where to start"
      />
    </>
  );
}
