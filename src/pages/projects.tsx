import { PageHero } from "@/components/page-hero";
import { Projects } from "@/components/projects";

export function ProjectsPage() {
  return (
    <>
      <PageHero title="Our projects">
        Products for businesses and open-source tools, built and run by our team in Addis Ababa.
      </PageHero>
      <Projects />
    </>
  );
}
