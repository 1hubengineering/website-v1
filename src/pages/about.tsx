import { Code2, Workflow } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand, SectionHeading, StepsGrid, ToConfirm, WhyGrid } from "@/components/sections";
import { company, founders, services } from "@/content/site";

const founderIcons = [Workflow, Code2];

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT ANDHUB" title="Engineers who study your work before we build.">
        {company.whatWeDo}
      </PageHero>

      <section className="section" id="why" aria-labelledby="why-title">
        <div className="container">
          <SectionHeading
            eyebrow="WHY ANDHUB"
            id="why-title"
            title="What makes us different."
            aside={<p>{services.join(" · ")}</p>}
          />
          <WhyGrid />
        </div>
      </section>

      <section className="section section-surface" id="team" aria-labelledby="team-title">
        <div className="container">
          <SectionHeading eyebrow="OUR TEAM" id="team-title" title="The co-founders." />
          <ul className="founder-grid">
            {founders.map((founder, index) => {
              const Icon = founderIcons[index] ?? Code2;
              return (
                <li className="home-card founder-card" key={founder.email}>
                  <span className="home-card-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>
                      {founder.name} {founder.toConfirm && <ToConfirm note={founder.note} />}
                    </h3>
                    <p>{founder.role}</p>
                    <a href={`mailto:${founder.email}`}>{founder.email}</a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section" id="process" aria-labelledby="process-title">
        <div className="container">
          <SectionHeading
            eyebrow="HOW WE WORK"
            id="process-title"
            title="Start small. Measure. Then scale."
          />
          <StepsGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
