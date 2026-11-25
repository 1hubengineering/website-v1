import { ArrowRight, Check, CircleAlert, FlaskConical } from "lucide-react";
import { Fragment } from "react";
import { Link, useParams } from "react-router";
import { PageHero } from "@/components/page-hero";
import { CtaBand, SectionHeading, ToConfirm } from "@/components/sections";
import { findSector } from "@/content/sectors";
import { NotFoundPage } from "@/pages/not-found";

// Sector page template, in the brief's order: headline, intro, challenges,
// solutions table, start small, gains, call to action.
export function SectorPage() {
  const { slug = "" } = useParams();
  const sector = findSector(slug);
  if (!sector) return <NotFoundPage />;

  return (
    <>
      <PageHero title={sector.headline} image={sector.image} />

      <section className="section" aria-labelledby="challenges-title">
        <div className="container sector-intro-layout">
          <p className="sector-intro">{sector.intro}</p>
          <div>
            <SectionHeading id="challenges-title" title="Your challenges" />
            <ul className="challenge-list">
              {sector.challenges.map((challenge) => (
                <li key={challenge}>
                  <CircleAlert size={20} aria-hidden="true" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-surface" aria-labelledby="solutions-title">
        <div className="container">
          <SectionHeading
            id="solutions-title"
            title="Solutions you can choose from"
          />
          <table className="solution-table">
            <thead>
              <tr>
                <th scope="col">Solution</th>
                <th scope="col">What we provide for you</th>
              </tr>
            </thead>
            <tbody>
              {sector.solutions.map((row) => (
                <tr key={row.name}>
                  <th scope="row">
                    {row.solutionId ? (
                      <Link to={`/solutions/#${row.solutionId}`}>{row.name}</Link>
                    ) : (
                      row.name
                    )}
                    {row.product && <span className="product-tag">{row.product}</span>}
                  </th>
                  <td>{row.provides}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
                  <li className="story-step">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
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
        text="We visit, learn how you work today and agree on a small pilot."
        action={sector.cta.action}
        to={`/contact/?sector=${sector.slug}`}
        marker={sector.cta.toConfirm && <ToConfirm note={sector.cta.note} />}
      />
    </>
  );
}
