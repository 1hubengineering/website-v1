import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections";
import { trackGroups } from "@/content/solutions";

// Card accent follows the brand colour roles.
const familyFor = { blue: "make", green: "sell", navy: "learn-build" } as const;

export function SolutionsPage() {
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

      {/* Six groups of what owners track, two short cards each. */}
      {trackGroups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={index % 2 ? "track-group section-surface" : "track-group"}
          aria-labelledby={`${group.id}-title`}
        >
          <div className="container track-group-layout">
            <h2 id={`${group.id}-title`}>{group.title}</h2>
            <ul className="solution-grid track-group-cards">
              {group.cards.map((card) => (
                <li
                  key={card.id}
                  id={card.id}
                  className="solution-card solution-card-short"
                  data-family={familyFor[group.color]}
                >
                  <h3>{card.name}</h3>
                  <p>{card.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CtaBand
        title="Not sure which solution fits?"
        text="Book a free discovery visit: we look at how the business runs today and suggest where to start"
      />
    </>
  );
}
