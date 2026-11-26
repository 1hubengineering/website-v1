import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  CircleCheck,
  Clock,
  Package,
  Pause,
  Play,
  ShieldX,
  SlidersHorizontal,
  TrendingDown,
  TriangleAlert,
} from "lucide-react";

const base = import.meta.env.BASE_URL;

// The six problems, below the man's shoulders so his face stays clear, as sharp page
// elements over the video. Positions are in % of the video frame (2560 × 1440). Each
// one pops in at `in`, then turns green with a check at SOLVE + index × SOLVE_STEP:
// the problems are solved. All fade out together before the loop.
const LABELS = [
  { text: "Risk alerts", Icon: TriangleAlert, left: 42, top: 50, in: 0.3 },
  { text: "Project delivery", Icon: Package, left: 69, top: 50, in: 0.7 },
  { text: "Operations tracking", Icon: SlidersHorizontal, left: 42, top: 59, in: 1.1 },
  { text: "Missed deadlines", Icon: Clock, left: 69, top: 59, in: 1.5 },
  { text: "Financial loss", Icon: TrendingDown, left: 42, top: 68, in: 1.9 },
  { text: "Quality failures", Icon: ShieldX, left: 69, top: 68, in: 2.3 },
] as const;
const IN_LENGTH = 0.25;
const SOLVE = 3.1;
const SOLVE_STEP = 0.3;
const OUT_START = 5.55;
const OUT_END = 5.95;

function labelOpacity(time: number, start: number) {
  if (time >= OUT_END) return 0;
  if (time >= OUT_START) return 1 - (time - OUT_START) / (OUT_END - OUT_START);
  if (time <= start) return 0;
  return Math.min(1, (time - start) / IN_LENGTH);
}

// Full-width header video of an office; the headline (children) is written straight
// onto the calm wall on the left. It plays only after hydration and never with
// reduced motion, where the poster stays with every label shown. A pause button is
// required for motion that loops longer than 5s. The video is decorative.
export function OfficeHero({
  src,
  poster,
  children,
}: {
  src: string;
  poster: string;
  children: ReactNode;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const labels = useRef<(HTMLSpanElement | null)[]>([]);
  const [motion, setMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const allowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMotion(allowed);
    if (!allowed) return;
    const element = video.current;
    let frame = 0;
    const tick = () => {
      if (element && element.readyState >= 2) {
        const time = element.currentTime;
        LABELS.forEach((label, index) => {
          const node = labels.current[index];
          if (!node) return;
          node.style.opacity = String(labelOpacity(time, label.in));
          node.classList.toggle("is-solved", time >= SOLVE + index * SOLVE_STEP && time < OUT_END);
        });
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    element?.play().catch(() => setPaused(true));
    return () => cancelAnimationFrame(frame);
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
    <section className="office-hero on-navy" aria-labelledby="page-title">
      <div className="office-hero-media">
        {/* Covers the header like object-fit: cover, but as a box the labels can sit in. */}
        <div className="office-hero-stage">
          <video
            ref={video}
            src={`${base}${src}`}
            poster={`${base}${poster}`}
            width="2560"
            height="1440"
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div className="office-hero-labels" aria-hidden="true">
            {LABELS.map(({ text, Icon, left, top }, index) => (
              <span
                key={text}
                ref={(node) => {
                  labels.current[index] = node;
                }}
                className="office-hero-label"
                style={{ left: `${left}%`, top: `${top}%` } as CSSProperties}
              >
                <Icon className="office-hero-label-problem" aria-hidden="true" />
                <CircleCheck className="office-hero-label-solved" aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>
        </div>
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
      <div className="container office-hero-text">{children}</div>
    </section>
  );
}
