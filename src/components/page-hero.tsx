import type { ReactNode } from "react";
import { HeroSlideshow } from "@/components/hero-slideshow";

// Page header used by every page except home. With `image`, the photo fills the
// header behind a dark overlay and the title is the only text (one size, bold).
// Several images cross-fade as a slideshow. `statement` sets a longer message as
// the title in one even size, with nothing underneath.
export function PageHero({
  title,
  children,
  images,
  statement = false,
}: {
  title: ReactNode;
  children?: ReactNode;
  images?: { src: string; alt: string }[];
  statement?: boolean;
}) {
  const image = images?.length ? images : undefined;
  const classes = ["page-hero", "on-navy"];
  if (image) classes.push("page-hero-photo");
  if (statement) classes.push("page-hero-statement");
  return (
    <section className={classes.join(" ")} aria-labelledby="page-title">
      {image && <HeroSlideshow slides={image} />}
      <div className="container page-hero-inner">
        <h1 id="page-title">{title}</h1>
        {children && <div className="page-hero-lead">{children}</div>}
      </div>
    </section>
  );
}
