// Adapted from Shadcnblocks feature43, retrieved through the authenticated registry.
import { ArrowUpRight, Code2, Workflow, MessagesSquare } from "lucide-react";
const features = [
  {
    icon: Code2,
    title: "Software development",
    description:
      "Websites, custom software and digital products designed around your requirements. From a first prototype to a working business platform.",
    tags: ["Web platforms", "Business software", "Digital products"],
  },
  {
    icon: Workflow,
    title: "Systems engineering",
    description:
      "Make your systems and teams work together. We clarify dependencies, connect services and design workflows around the way your business operates.",
    tags: ["Architecture", "Integrations", "Automation"],
  },
  {
    icon: MessagesSquare,
    title: "Consultancy",
    description:
      "A clear next step for your technology. We help you understand the challenge, assess options and shape a practical plan before you commit to a build.",
    tags: ["Technical advice", "System reviews", "Planning"],
  },
];
export function Feature43() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OUR EXPERTISE</span>
            <h2 id="services-title">
              Complex challenges.
              <br />
              <span className="muted-heading">Elegant solutions.</span>
            </h2>
          </div>
          <p>
            Good technology starts with understanding.
            <br />
            We bring the right thinking, tools, and care to every build.
          </p>
        </div>
        <div className="services-grid">
          {features.map((feature, i) => (
            <a href="#contact" className="service-card" key={feature.title}>
              <div className="service-top">
                <span className="icon-box">
                  <feature.icon size={23} aria-hidden="true" />
                </span>
                <span className="service-number">0{i + 1}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="service-bottom">
                <div className="service-tags">
                  {feature.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ArrowUpRight size={18} className="service-arrow" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
