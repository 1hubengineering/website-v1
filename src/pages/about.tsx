import { PageHero } from "@/components/page-hero";
import { ApproachFlow, CtaBand, SectionHeading, ToConfirm, WhyGrid } from "@/components/sections";
import { team } from "@/content/site";

const base = import.meta.env.BASE_URL;

function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function AboutPage() {
  return (
    <>
      {/* The team’s own words, quoted. */}
      <PageHero
        statement
        images={[
          {
            src: "sectors/about-header.webp",
            alt: "A leather production line in Addis Ababa, workers cutting and stitching hides",
          },
        ]}
        title={
          <q className="hook-quote">
            Learning is the only path forward for growth, and comfort is the enemy. We help you ask
            the right questions to grow
          </q>
        }
      >
        The AndHub team
      </PageHero>

      <section className="section" id="why" aria-labelledby="why-title">
        <div className="container">
          <SectionHeading id="why-title" title="Why AndHub" />
          <WhyGrid />
        </div>
      </section>

      <section className="section section-surface" id="team" aria-labelledby="team-title">
        <div className="container">
          <SectionHeading id="team-title" title="Our team" />
          <ul className="team-cards">
            {team.map((member) => (
              <li className="team-member" key={member.name}>
                {member.photo ? (
                  <img
                    className="team-photo"
                    src={`${base}${member.photo}`}
                    alt={member.name}
                    width="600"
                    height="750"
                    loading="lazy"
                  />
                ) : (
                  // Placeholder until a photo is added (set `photo` in src/content/site.ts).
                  <div className="team-photo team-photo-placeholder" aria-hidden="true">
                    {initials(member.name)}
                  </div>
                )}
                <div className="team-member-text">
                  <h3>
                    {member.name} {member.toConfirm && <ToConfirm note={member.note} />}
                  </h3>
                  <p>{member.role}</p>
                  {member.email && <a href={`mailto:${member.email}`}>{member.email}</a>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="approach" aria-labelledby="approach-title">
        <div className="container">
          <SectionHeading id="approach-title" title="Our approach" />
          <ApproachFlow />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
