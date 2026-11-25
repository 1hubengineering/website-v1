import { Check, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand, SectionHeading, ToConfirm } from "@/components/sections";
import { aiOperations, findSolution, trackGroups } from "@/content/solutions";
import { services } from "@/content/site";

export function SolutionsPage() {
  return (
    <>
      {/* One quote to business owners, one size: the bridge we offer. */}
      <PageHero
        statement
        title={
          <q className="hook-quote">
            Running a business shouldn’t be a headache. In this digital age, the right digital
            solution lets owners track every part of it from anywhere
          </q>
        }
      />

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
              {group.solutions.map((id) => {
                const { solution, family } = findSolution(id);
                return (
                  <li key={id} id={id} className="solution-card" data-family={family.id}>
                    <h3>{solution.name}</h3>
                    <p>{solution.description}</p>
                    <h4>Benefits</h4>
                    <ul className="gain-list">
                      {solution.gains.map((gain) => (
                        <li key={gain}>
                          <Check size={16} aria-hidden="true" />
                          {gain}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}

      <section className="section section-surface ai-band" id="ai" aria-labelledby="ai-title">
        <div className="container">
          <SectionHeading
            id="ai-title"
            title={services[3]}
          />
          <ul className="ai-grid">
            {aiOperations.features.map((feature) => (
              <li key={feature.name}>
                <Sparkles size={20} aria-hidden="true" />
                <span>{feature.name}</span>
                {feature.toConfirm && <ToConfirm note="Mark removed once we can demo it." />}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Not sure which solution fits?"
        text="Book a free discovery visit: we look at how the business runs today and suggest where to start"
      />
    </>
  );
}
