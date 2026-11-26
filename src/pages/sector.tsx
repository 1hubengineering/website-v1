import { ArrowRight, Check, FlaskConical } from "lucide-react";
import { Fragment } from "react";
import { Link, useParams } from "react-router";
import { PageHero } from "@/components/page-hero";
import { ChallengeCards, CtaBand, SectionHeading, ToConfirm } from "@/components/sections";
import { findSector, type Sector } from "@/content/sectors";
import { trackGroups } from "@/content/solutions";
import { NotFoundPage } from "@/pages/not-found";

const base = import.meta.env.BASE_URL;
const familyFor = { blue: "make", green: "sell", navy: "learn-build" } as const;

type SolutionGroup = {
  id: string;
  title: string;
  image: { src: string };
  color: "blue" | "green" | "navy";
  rows: Sector["solutions"];
};

// Each sector solution joins the Solutions-page group that holds it. Solutions made
// only for this sector form a last group with the sector's own photo.
function groupSolutions(sector: Sector): SolutionGroup[] {
  const groups = new Map<string, SolutionGroup>();
  const own: SolutionGroup = {
    id: "own",
    title: `Made for ${sector.name.toLowerCase()}`,
    image: sector.images[0],
    color: "navy",
    rows: [],
  };
  for (const row of sector.solutions) {
    const track = trackGroups.find((group) => group.cards.some((card) => card.id === row.solutionId));
    if (!track) {
      own.rows.push(row);
      continue;
    }
    const group = groups.get(track.id) ?? { ...track, ...sector.groupOverrides?.[track.id], rows: [] };
    group.rows.push(row);
    groups.set(track.id, group);
  }
  return [...groups.values(), ...(own.rows.length ? [own] : [])];
}

// Sector page template, in the brief's order: headline, intro, challenges,
// solutions table, start small, gains, call to action.
export function SectorPage() {
  const { slug = "" } = useParams();
  const sector = findSector(slug);
  if (!sector) return <NotFoundPage />;

  return (
    <>
      <PageHero title={sector.headline} images={sector.images} />

      <section className="section" aria-labelledby="challenges-title">
        <div className="container sector-intro-layout">
          {/* Sectors with the solution story open on their challenges, not the intro. */}
          {!sector.question && <p className="sector-intro">{sector.intro}</p>}
          <div>
            <SectionHeading
              id="challenges-title"
              title={sector.challengesTitle ?? "Tell us your challenges"}
            />
            <ChallengeCards items={sector.challenges} />
          </div>
          {sector.question && (
            <div className="sector-question">
              <p className="sector-question-text">
                <q className="hook-quote">{sector.question}</q>
              </p>
              {sector.answer && <p className="sector-answer">{sector.answer}</p>}
            </div>
          )}
        </div>
      </section>

      {sector.offering && (
        <section className="section section-surface" aria-labelledby="offering-title">
          <div className="container sector-offering">
            <div>
              <SectionHeading id="offering-title" title="Our digital solution" />
              <p className="sector-offering-name">{sector.offering}</p>
            </div>
            <div>
              <h3 className="sector-tackles-title">Challenges our solution tackles</h3>
              <ul className="gain-list gain-list-large">
                {sector.challenges.map((challenge) => (
                  <li key={challenge}>
                    <Check size={20} aria-hidden="true" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="section section-surface" aria-labelledby="solutions-title">
        <div className="container">
          <SectionHeading
            id="solutions-title"
            title="Solutions you can choose from"
          />
          {/* Grouped as on the Solutions page: the same photo and colour per group, so
              the two pages read as one. */}
          <div className="sector-solutions">
            {groupSolutions(sector).map((group) => (
              <section
                key={group.id}
                className="sector-solution-group"
                aria-labelledby={`sg-${group.id}`}
              >
                <div className="sector-solution-photo">
                  <img src={`${base}${group.image.src}`} alt="" loading="lazy" decoding="async" />
                  <h3 id={`sg-${group.id}`}>{group.title}</h3>
                </div>
                <ul className="sector-solution-list">
                  {group.rows.map((row) => (
                    <li
                      key={row.name}
                      className="solution-tile sector-solution-item"
                      data-family={familyFor[group.color]}
                    >
                      <span className="solution-tile-bar" aria-hidden="true" />
                      <h4>{row.name}</h4>
                      <p>{row.provides}</p>
                      {row.solutionId && (
                        <Link className="sector-solution-link" to={`/solutions/#${row.solutionId}`}>
                          See it in Solutions
                          <span className="sr-only"> ({row.name})</span>
                          <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      {sector.story && (
        <section className="section" aria-labelledby="story-title">
          <div className="container">
            <SectionHeading id="story-title" title={sector.story.line} />
            <ol className="story-steps">
              {sector.story.steps.map((step, index) => (
                <Fragment key={step}>
                  {index > 0 && (
                    <li className="story-arrow" aria-hidden="true">
                      <ArrowRight size={20} />
                    </li>
                  )}
                  <li className="story-step">{step}</li>
                </Fragment>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="pilot-title">
        <div className="container pilot-gains">
          <div className="pilot-card">
            <FlaskConical size={26} aria-hidden="true" />
            <h2 id="pilot-title">Start small</h2>
            <p className="pilot-text">{sector.pilot}</p>
          </div>
          <div>
            <h2 className="gains-title">What you gain</h2>
            <ul className="gain-list gain-list-large">
              {sector.gains.map((gain) => (
                <li key={gain}>
                  <Check size={20} aria-hidden="true" />
                  {gain}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        id="sector-cta"
        title={sector.cta.label}
        text="We visit, learn how you work today and agree on a small pilot"
        action={sector.cta.action}
        to={`/contact/?sector=${sector.slug}`}
        marker={sector.cta.toConfirm && <ToConfirm note={sector.cta.note} />}
      />
    </>
  );
}
