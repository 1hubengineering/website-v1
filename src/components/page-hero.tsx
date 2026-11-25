import type { ReactNode } from "react";

const base = import.meta.env.BASE_URL;

// Page header used by every page except home. With `image`, the photo fills the
// header behind a dark overlay and the title is the only text (one size, bold).
export function PageHero({
  title,
  children,
  image,
}: {
  title: ReactNode;
  children?: ReactNode;
  image?: { src: string; alt: string };
}) {
  return (
    <section
      className={image ? "page-hero page-hero-photo on-navy" : "page-hero on-navy"}
      aria-labelledby="page-title"
    >
      {image ? (
        <img
          className="page-hero-image"
          src={`${base}${image.src}`}
          alt={image.alt}
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
        />
      ) : (
        <div className="hero-grid" />
      )}
      <div className="container page-hero-inner">
        <h1 id="page-title">{title}</h1>
        {children && <div className="page-hero-lead">{children}</div>}
      </div>
    </section>
  );
}
