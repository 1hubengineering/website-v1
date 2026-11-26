import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
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

// The six problem labels of the Solutions header video, drawn as sharp page elements
// exactly over the labels baked into the video (which blur when the video is scaled
// or compressed). Boxes are in video pixels (1000 × 1200); `in` is when the video's
// own label starts to fade in. All of them fade out together before the loop.
const LABELS = [
  { text: "Risk alerts", Icon: TriangleAlert, box: [107, 152, 426, 231], in: 0.3 },
  { text: "Project delivery", Icon: Package, box: [486, 112, 916, 191], in: 0.8 },
  { text: "Operations tracking", Icon: SlidersHorizontal, box: [102, 627, 621, 706], in: 1.3 },
  { text: "Missed deadlines", Icon: Clock, box: [452, 737, 913, 816], in: 1.8 },
  { text: "Financial loss", Icon: TrendingDown, box: [110, 845, 492, 924], in: 2.3 },
  { text: "Quality failures", Icon: ShieldX, box: [489, 932, 910, 1011], in: 2.8 },
] as const;
// The sharp label is solid slightly before the video's own label appears and stays
// solid until it has gone, so the blurry one never shows through.
const IN_LEAD = 0.15;
const IN_LENGTH = 0.18;
const OUT_START = 5.8;
const OUT_END = 5.97;

function labelOpacity(time: number, start: number) {
  if (time >= OUT_END) return 0;
  if (time >= OUT_START) return 1 - (time - OUT_START) / (OUT_END - OUT_START);
  const from = start - IN_LEAD;
  if (time <= from) return 0;
  return Math.min(1, (time - from) / IN_LENGTH);
}

// A looping, muted header video. It starts only after hydration and never with
// reduced motion, where the poster frame stays (all labels shown). A pause button is
// required for motion that loops longer than 5s. The video is decorative.
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
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
    let started = false;
    const tick = () => {
      if (element && (started || element.currentTime > 0)) {
        started = true;
        const time = element.currentTime;
        LABELS.forEach((label, index) => {
          const node = labels.current[index];
          if (node) node.style.opacity = String(labelOpacity(time, label.in));
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
    <div className="hero-video">
      <video
        ref={video}
        src={`${base}${src}`}
        poster={`${base}${poster}`}
        width="1000"
        height="1200"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero-video-labels" aria-hidden="true">
        {LABELS.map(({ text, Icon, box: [left, top, right, bottom] }, index) => (
          <span
            key={text}
            ref={(node) => {
              labels.current[index] = node;
            }}
            className="hero-video-label"
            style={
              {
                left: `${((left - 2) / 1000) * 100}%`,
                top: `${((top - 2) / 1200) * 100}%`,
                width: `${((right - left + 5) / 1000) * 100}%`,
                height: `${((bottom - top + 5) / 1200) * 100}%`,
              } as CSSProperties
            }
          >
            <Icon aria-hidden="true" />
            {text}
          </span>
        ))}
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
  );
}
