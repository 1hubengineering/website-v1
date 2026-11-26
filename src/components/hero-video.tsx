import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const base = import.meta.env.BASE_URL;

// A looping, muted header video. It starts only after hydration and never with
// reduced motion, where the poster frame stays. A pause button is required for
// motion that loops longer than 5s. The words in the video are also the page's
// h1, so the video itself is decorative.
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [motion, setMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const allowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMotion(allowed);
    if (allowed) video.current?.play().catch(() => setPaused(true));
  }, []);

  const toggle = () => {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      element.play().catch(() => undefined);
      setPaused(false);
    } else {
      element.pause();
      setPaused(true);
    }
  };

  return (
    <div className="hero-video">
      <video
        ref={video}
        src={`${base}${src}`}
        poster={`${base}${poster}`}
        width="1440"
        height="900"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      {motion && (
        <button
          type="button"
          className="hero-slides-toggle"
          onClick={toggle}
          aria-label={paused ? "Play header video" : "Pause header video"}
        >
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
      )}
    </div>
  );
}
