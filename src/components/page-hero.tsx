import type { ReactNode } from "react";
import { HeroSlideshow } from "@/components/hero-slideshow";

// Page header used by every page except home. With `image`, the photo fills the
// header behind a dark overlay and the title is the only text (one size, bold).
// Several images cross-fade as a slideshow.
export function PageHero({
  title,
  children,
  images,
}: {
  title: ReactNode;
  children?: ReactNode;
  images?: { src: string; alt: string }[];
}) {
  const image = images?.length ? images : undefined;
  return (
    <section
      className={image ? "page-hero page-hero-photo on-navy" : "page-hero on-navy"}
      aria-labelledby="page-title"
    >
      {image && <HeroSlideshow slides={image} />}
      <div className="container page-hero-inner">
        <h1 id="page-title">{title}</h1>
        {children && <div className="page-hero-lead">{children}</div>}
      </div>
    </section>
  );
}
