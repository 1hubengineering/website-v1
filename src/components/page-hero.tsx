import type { ReactNode } from "react";

// Navy page header used by every page except home.
export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero on-navy" aria-labelledby="page-title">
      <div className="hero-grid" />
      <div className="container page-hero-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1 id="page-title">{title}</h1>
        {children && <div className="page-hero-lead">{children}</div>}
      </div>
    </section>
  );
}
