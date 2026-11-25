import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

const base = import.meta.env.BASE_URL;
const SLIDE_MS = 6000;

type Slide = { src: string; alt: string };

// Full-bleed hero photos that cross-fade. The first photo is pre-rendered and
// loads immediately; the others are added after hydration. Reduced motion shows
// the first photo only. A pause button is required for motion longer than 5s.
export function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [mounted, setMounted] = useState(false);
  const [motion, setMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);
  const many = slides.length > 1;

  useEffect(() => {
    setMounted(true);
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!many || !motion || paused) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActive((index) => (index + 1) % slides.length);
      }
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [many, motion, paused, slides.length]);

  const visible = mounted && motion ? slides : slides.slice(0, 1);

  return (
    <div className={motion ? "hero-slides is-moving" : "hero-slides"}>
      {visible.map((slide, index) => (
        <img
          key={slide.src}
          className={index === active ? "hero-slide is-active" : "hero-slide"}
          src={`${base}${slide.src}`}
          alt={index === active ? slide.alt : ""}
          aria-hidden={index === active ? undefined : true}
          width="1920"
          height="1080"
          fetchPriority={index === 0 ? "high" : "low"}
          decoding="async"
        />
      ))}
      {many && motion && (
        <button
          type="button"
          className="hero-slides-toggle"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Play photo slideshow" : "Pause photo slideshow"}
        >
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
      )}
    </div>
  );
}
