import type { ReactNode } from "react";

// Navy page header used by every page except home.
export function PageHero({
  title,
  children,
}: {
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero on-navy" aria-labelledby="page-title">
      <div className="hero-grid" />
      <div className="container page-hero-inner">
        <h1 id="page-title">{title}</h1>
        {children && <div className="page-hero-lead">{children}</div>}
      </div>
    </section>
  );
}
