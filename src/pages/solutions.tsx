import { Check, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand, SectionHeading, ToConfirm } from "@/components/sections";
import { aiOperations, families } from "@/content/solutions";
import { services } from "@/content/site";

export function SolutionsPage() {
  return (
    <>
      {/* One message to business owners, one size: the bridge we offer. */}
      <PageHero
        statement
        title="Your business shouldn’t be a headache. In this digital age, our digital solutions let you track your business from anywhere"
      />

      {families.map((family, index) => (
        <section
          key={family.id}
          id={family.id}
          className={index % 2 ? "section section-surface" : "section"}
          aria-labelledby={`${family.id}-title`}
        >
          <div className="container">
            <SectionHeading id={`${family.id}-title`} title={family.tagline} />
            <ul className="solution-grid">
              {family.solutions.map((solution) => (
                <li key={solution.id} id={solution.id} className="solution-card" data-family={family.id}>
                  <h3>{solution.name}</h3>
                  <p>{solution.description}</p>
                  <h4>You get</h4>
                  <ul className="gain-list">
                    {solution.gains.map((gain) => (
                      <li key={gain}>
                        <Check size={16} aria-hidden="true" />
                        {gain}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
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
        text="Book a free discovery visit. We look at how you work today and suggest where to start."
      />
    </>
  );
}
