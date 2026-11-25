import { PageHero } from "@/components/page-hero";
import { CtaBand, SectorGrid } from "@/components/sections";

export function SectorsPage() {
  return (
    <>
      <PageHero eyebrow="SECTORS" title="Eight sectors. One engineering partner.">
        Each sector has its own everyday problems. Choose yours to see the challenges we solve,
        the solutions you can pick from and how a pilot starts.
      </PageHero>
      <section className="section" aria-label="All sectors">
        <div className="container">
          <SectorGrid headingLevel={2} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
