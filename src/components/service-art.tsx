// Illustrations for the four core services (home page cards). Drawn as inline SVG in
// the brand colours so they follow light and dark mode; no people, no photos.
// Colours come from CSS variables set on .service-art (see pages.css).

const svgProps = {
  viewBox: "0 0 320 190",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

// Websites, apps and business software: a browser window with code and a phone app.
function SoftwareArt() {
  return (
    <svg {...svgProps} aria-label="A browser window with code next to a phone app">
      <rect x="34" y="28" width="206" height="136" rx="12" fill="var(--art-card)" stroke="var(--art-line)" strokeWidth="2" />
      <path d="M46 28h182a12 12 0 0 1 12 12v12H34V40a12 12 0 0 1 12-12Z" fill="var(--art-navy)" />
      <rect x="48" y="36" width="60" height="8" rx="4" fill="var(--art-blue)" opacity="0.7" />
      <rect x="52" className="art-type" style={{ animationDelay: "0s" }} y="70" width="34" height="7" rx="3.5" fill="var(--art-blue)" />
      <rect x="92" className="art-type" style={{ animationDelay: "0.2s" }} y="70" width="56" height="7" rx="3.5" fill="var(--art-green)" />
      <rect x="66" className="art-type" style={{ animationDelay: "0.4s" }} y="86" width="72" height="7" rx="3.5" fill="var(--art-muted)" />
      <rect x="144" className="art-type" style={{ animationDelay: "0.6s" }} y="86" width="28" height="7" rx="3.5" fill="var(--art-blue)" />
      <rect x="66" className="art-type" style={{ animationDelay: "0.8s" }} y="102" width="48" height="7" rx="3.5" fill="var(--art-green)" />
      <rect x="66" className="art-type" style={{ animationDelay: "1.0s" }} y="118" width="88" height="7" rx="3.5" fill="var(--art-muted)" />
      <rect x="52" className="art-type" style={{ animationDelay: "1.2s" }} y="134" width="40" height="7" rx="3.5" fill="var(--art-blue)" />
      <path className="art-pulse" d="M182 98l-12 11 12 11M206 98l12 11-12 11" fill="none" stroke="var(--art-blue)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M198 94l-8 32" stroke="var(--art-green)" strokeWidth="5" strokeLinecap="round" />
      <rect x="226" y="54" width="62" height="112" rx="12" fill="var(--art-card)" stroke="var(--art-navy)" strokeWidth="3.5" />
      <rect x="236" y="70" width="42" height="28" rx="6" fill="var(--art-blue)" opacity="0.85" />
      <rect x="236" y="106" width="42" height="6" rx="3" fill="var(--art-muted)" />
      <rect x="236" y="118" width="30" height="6" rx="3" fill="var(--art-muted)" />
      <rect className="art-pulse" x="236" y="134" width="42" height="18" rx="9" fill="var(--art-green)" />
    </svg>
  );
}

// Requirements, architecture, integration, verification: connected system blocks.
function SystemsArt() {
  return (
    <svg {...svgProps} aria-label="A system diagram with requirements, servers, a database and sensors connected to a central hub">
      <g className="art-flow" stroke="var(--art-navy)" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 4" opacity="0.55">
        <path d="M98 56h30v30M222 56h-30v30M98 136h30v-30M222 136h-30v-30" />
      </g>
      {/* Requirements document */}
      <rect x="40" y="28" width="58" height="56" rx="8" fill="var(--art-card)" stroke="var(--art-blue)" strokeWidth="3" />
      <rect x="52" y="42" width="34" height="5" rx="2.5" fill="var(--art-blue)" />
      <rect x="52" y="54" width="26" height="5" rx="2.5" fill="var(--art-muted)" />
      <rect x="52" y="66" width="30" height="5" rx="2.5" fill="var(--art-muted)" />
      {/* Servers */}
      <g fill="var(--art-card)" stroke="var(--art-green)" strokeWidth="3">
        <rect x="222" y="28" width="58" height="16" rx="5" />
        <rect x="222" y="48" width="58" height="16" rx="5" />
        <rect x="222" y="68" width="58" height="16" rx="5" />
      </g>
      <g fill="var(--art-green)">
        <rect className="art-blink" x="230" y="34" width="20" height="4" rx="2" />
        <rect className="art-blink" style={{ animationDelay: "0.4s" }} x="230" y="54" width="20" height="4" rx="2" />
        <rect className="art-blink" style={{ animationDelay: "0.8s" }} x="230" y="74" width="20" height="4" rx="2" />
      </g>
      {/* Database */}
      <path d="M40 116v34c0 6 13 11 29 11s29-5 29-11v-34" fill="var(--art-card)" stroke="var(--art-green)" strokeWidth="3" />
      <ellipse cx="69" cy="116" rx="29" ry="10" fill="var(--art-card)" stroke="var(--art-green)" strokeWidth="3" />
      <path d="M40 133c0 6 13 11 29 11s29-5 29-11" fill="none" stroke="var(--art-green)" strokeWidth="3" />
      {/* Sensor / controller chip */}
      <rect x="232" y="112" width="40" height="40" rx="6" fill="var(--art-card)" stroke="var(--art-blue)" strokeWidth="3" />
      <rect className="art-blink" style={{ animationDelay: "1.2s" }} x="242" y="122" width="20" height="20" rx="3" fill="var(--art-blue)" />
      <g stroke="var(--art-blue)" strokeWidth="3" strokeLinecap="round">
        <path d="M226 122h6M226 132h6M226 142h6M272 122h6M272 132h6M272 142h6" />
      </g>
      {/* Central hub, verified */}
      <rect x="128" y="66" width="64" height="58" rx="12" fill="var(--art-navy)" />
      <circle className="art-pulse" cx="160" cy="95" r="16" fill="var(--art-green)" />
      <path d="M152 95l6 6 11-12" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Software that automates repetitive work: a conveyor line driven by a gear.
function AutomationArt() {
  return (
    <svg {...svgProps} aria-label="An automated conveyor line driven by a gear, ending with a completed check">
      {/* Gear */}
      <g transform="translate(78 58)">
        <g className="art-spin">
        <circle r="30" fill="none" stroke="var(--art-navy)" strokeWidth="12" strokeDasharray="9 7" />
        <circle r="22" fill="var(--art-navy)" />
        <circle r="9" fill="var(--art-card)" />
        </g>
      </g>
      <g transform="translate(130 42)">
        <g className="art-spin art-spin-reverse">
        <circle r="17" fill="none" stroke="var(--art-blue)" strokeWidth="8" strokeDasharray="6 5" />
        <circle r="12" fill="var(--art-blue)" />
        <circle r="5" fill="var(--art-card)" />
        </g>
      </g>
      {/* Flow arrow from the gears to the line */}
      <path className="art-flow" d="M150 62c40 6 70 18 84 40" fill="none" stroke="var(--art-green)" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 9" />
      <path d="M226 96l9 8 3-12" fill="none" stroke="var(--art-green)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Items on the conveyor */}
      <clipPath id="art-belt">
        <rect x="30" y="96" width="230" height="40" />
      </clipPath>
      <g clipPath="url(#art-belt)">
        <g className="art-belt" fill="var(--art-blue)">
          <rect x="-8" y="104" width="34" height="30" rx="5" />
          <rect x="44" y="104" width="34" height="30" rx="5" />
          <rect x="96" y="104" width="34" height="30" rx="5" />
          <rect x="148" y="104" width="34" height="30" rx="5" />
          <rect x="200" y="104" width="34" height="30" rx="5" />
        </g>
      </g>
      {/* Conveyor belt and rollers */}
      <rect x="30" y="136" width="230" height="12" rx="6" fill="var(--art-navy)" />
      <g fill="var(--art-muted)">
        <circle cx="48" cy="160" r="7" />
        <circle cx="100" cy="160" r="7" />
        <circle cx="152" cy="160" r="7" />
        <circle cx="204" cy="160" r="7" />
        <circle cx="244" cy="160" r="7" />
      </g>
      {/* Done */}
      <circle className="art-pulse" cx="282" cy="118" r="20" fill="var(--art-green)" />
      <path d="M272 118l7 7 13-14" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// AI supporting a company's operations: the factory and office send live data to an
// AI unit, which feeds the operations centre screen with forecasts, alerts and actions.
function AiArt() {
  return (
    <svg {...svgProps} aria-label="A factory and office sending live data to an AI unit that supports an operations centre screen with charts and alerts">
      {/* Company: factory with sawtooth roof, and an office block */}
      <path d="M22 104l20-14v14l20-14v14l20-14v62H22Z" fill="var(--art-navy)" />
      <rect x="70" y="62" width="10" height="28" rx="2" fill="var(--art-navy)" />
      <g fill="var(--art-card)">
        <rect x="32" y="120" width="12" height="10" rx="2" />
        <rect x="52" y="120" width="12" height="10" rx="2" />
        <rect x="32" y="138" width="12" height="10" rx="2" />
        <rect x="52" y="138" width="12" height="10" rx="2" />
      </g>
      <rect x="88" y="112" width="30" height="54" rx="4" fill="var(--art-blue)" />
      <g fill="var(--art-card)" opacity="0.85">
        <rect x="94" y="120" width="7" height="7" rx="1.5" />
        <rect x="105" y="120" width="7" height="7" rx="1.5" />
        <rect x="94" y="133" width="7" height="7" rx="1.5" />
        <rect x="105" y="133" width="7" height="7" rx="1.5" />
        <rect x="94" y="146" width="7" height="7" rx="1.5" />
        <rect x="105" y="146" width="7" height="7" rx="1.5" />
      </g>
      <rect x="16" y="166" width="108" height="4" rx="2" fill="var(--art-muted)" />

      {/* Live data flowing up to the AI and on to the operations centre */}
      <path className="art-flow" d="M70 60C80 36 112 30 136 36" fill="none" stroke="var(--art-green)" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 8" />
      <path className="art-flow" d="M182 46c20 2 34 12 40 28" fill="none" stroke="var(--art-green)" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 8" />
      <path d="M216 68l6 8 6-9" fill="none" stroke="var(--art-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* AI unit: a chip with a spark */}
      <rect x="138" y="22" width="44" height="44" rx="10" fill="var(--art-navy)" />
      <g stroke="var(--art-navy)" strokeWidth="3" strokeLinecap="round">
        <path d="M150 16v6M160 16v6M170 16v6M150 66v6M160 66v6M170 66v6M132 34h6M132 44h6M132 54h6M182 34h6M182 44h6M182 54h6" />
      </g>
      <path className="art-spin art-spin-slow" d="M160 31l3.5 8.5 8.5 3.5-8.5 3.5-3.5 8.5-3.5-8.5-8.5-3.5 8.5-3.5Z" fill="var(--art-green)" />

      {/* Operations centre: a wall screen with a forecast, a gauge and alerts */}
      <rect x="140" y="80" width="164" height="90" rx="10" fill="var(--art-card)" stroke="var(--art-line)" strokeWidth="2" />
      <path className="art-draw" pathLength={100} d="M152 128l14-10 14 6 14-14" fill="none" stroke="var(--art-blue)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M194 110l12-8 12-4" fill="none" stroke="var(--art-green)" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="4 5" />
      <path d="M152 140h66" stroke="var(--art-muted)" strokeWidth="2" strokeLinecap="round" />
      {/* Gauge */}
      <path d="M232 128a20 20 0 0 1 40 0" fill="none" stroke="var(--art-muted)" strokeWidth="6" strokeLinecap="round" />
      <path className="art-draw" style={{ animationDelay: "0.6s" }} pathLength={100} d="M232 128a20 20 0 0 1 32-16" fill="none" stroke="var(--art-green)" strokeWidth="6" strokeLinecap="round" />
      {/* Alert rows: one handled, one being watched */}
      <rect x="152" y="148" width="68" height="14" rx="7" fill="var(--art-green)" opacity="0.2" />
      <circle cx="160" cy="155" r="4" fill="var(--art-green)" />
      <rect x="168" y="153" width="44" height="4" rx="2" fill="var(--art-green)" />
      <rect x="228" y="148" width="64" height="14" rx="7" fill="var(--art-blue)" opacity="0.2" />
      <circle className="art-blink" cx="236" cy="155" r="4" fill="var(--art-blue)" />
      <rect x="244" y="153" width="40" height="4" rx="2" fill="var(--art-blue)" />
      <rect x="208" y="170" width="28" height="6" rx="3" fill="var(--art-muted)" />
    </svg>
  );
}

const art = [SoftwareArt, SystemsArt, AutomationArt, AiArt];

export function ServiceArt({ index }: { index: number }) {
  const Art = art[index] ?? SoftwareArt;
  return (
    <div className="service-art">
      <Art />
    </div>
  );
}

// Placeholder art for products until their screenshots arrive (Projects page).
// SiraYe, task monitoring: a board of tasks moving from to-do to done.
export function TaskBoardArt() {
  const column = (x: number, fill: string, cards: number[]) => (
    <g>
      <rect x={x} y="34" width="78" height="128" rx="10" fill="var(--art-card)" stroke="var(--art-line)" strokeWidth="2" />
      <rect x={x + 12} y="46" width="40" height="6" rx="3" fill={fill} />
      {cards.map((w, i) => (
        <g key={i}>
          <rect x={x + 10} y={62 + i * 32} width="58" height="24" rx="6" fill={fill} opacity="0.16" />
          <rect x={x + 18} y={70 + i * 32} width={w} height="6" rx="3" fill={fill} />
        </g>
      ))}
    </g>
  );
  return (
    <div className="service-art">
      <svg viewBox="0 0 320 190" role="img" aria-label="A task board with tasks moving from to do, to in progress, to done">
        {column(30, "var(--art-muted)", [36, 26, 40])}
        {column(121, "var(--art-blue)", [30, 40])}
        {column(212, "var(--art-green)", [38, 28, 34])}
        <circle cx="282" cy="36" r="14" fill="var(--art-green)" />
        <path d="M275 36l5 5 9-10" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// Systems engineering product: the system diagram from the services cards.
export function SystemsProductArt() {
  return <ServiceArt index={1} />;
}
