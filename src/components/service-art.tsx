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
      <rect x="52" y="70" width="34" height="7" rx="3.5" fill="var(--art-blue)" />
      <rect x="92" y="70" width="56" height="7" rx="3.5" fill="var(--art-green)" />
      <rect x="66" y="86" width="72" height="7" rx="3.5" fill="var(--art-muted)" />
      <rect x="144" y="86" width="28" height="7" rx="3.5" fill="var(--art-blue)" />
      <rect x="66" y="102" width="48" height="7" rx="3.5" fill="var(--art-green)" />
      <rect x="66" y="118" width="88" height="7" rx="3.5" fill="var(--art-muted)" />
      <rect x="52" y="134" width="40" height="7" rx="3.5" fill="var(--art-blue)" />
      <path d="M182 98l-12 11 12 11M206 98l12 11-12 11" fill="none" stroke="var(--art-blue)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M198 94l-8 32" stroke="var(--art-green)" strokeWidth="5" strokeLinecap="round" />
      <rect x="226" y="54" width="62" height="112" rx="12" fill="var(--art-card)" stroke="var(--art-navy)" strokeWidth="3.5" />
      <rect x="236" y="70" width="42" height="28" rx="6" fill="var(--art-blue)" opacity="0.85" />
      <rect x="236" y="106" width="42" height="6" rx="3" fill="var(--art-muted)" />
      <rect x="236" y="118" width="30" height="6" rx="3" fill="var(--art-muted)" />
      <rect x="236" y="134" width="42" height="18" rx="9" fill="var(--art-green)" />
    </svg>
  );
}

// Requirements, architecture, integration, verification: connected system blocks.
function SystemsArt() {
  return (
    <svg {...svgProps} aria-label="A system diagram with requirements, servers, a database and sensors connected to a central hub">
      <g stroke="var(--art-navy)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.55">
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
        <rect x="230" y="34" width="20" height="4" rx="2" />
        <rect x="230" y="54" width="20" height="4" rx="2" />
        <rect x="230" y="74" width="20" height="4" rx="2" />
      </g>
      {/* Database */}
      <path d="M40 116v34c0 6 13 11 29 11s29-5 29-11v-34" fill="var(--art-card)" stroke="var(--art-green)" strokeWidth="3" />
      <ellipse cx="69" cy="116" rx="29" ry="10" fill="var(--art-card)" stroke="var(--art-green)" strokeWidth="3" />
      <path d="M40 133c0 6 13 11 29 11s29-5 29-11" fill="none" stroke="var(--art-green)" strokeWidth="3" />
      {/* Sensor / controller chip */}
      <rect x="232" y="112" width="40" height="40" rx="6" fill="var(--art-card)" stroke="var(--art-blue)" strokeWidth="3" />
      <rect x="242" y="122" width="20" height="20" rx="3" fill="var(--art-blue)" />
      <g stroke="var(--art-blue)" strokeWidth="3" strokeLinecap="round">
        <path d="M226 122h6M226 132h6M226 142h6M272 122h6M272 132h6M272 142h6" />
      </g>
      {/* Central hub, verified */}
      <rect x="128" y="66" width="64" height="58" rx="12" fill="var(--art-navy)" />
      <circle cx="160" cy="95" r="16" fill="var(--art-green)" />
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
        <circle r="30" fill="none" stroke="var(--art-navy)" strokeWidth="12" strokeDasharray="9 7" />
        <circle r="22" fill="var(--art-navy)" />
        <circle r="9" fill="var(--art-card)" />
      </g>
      <g transform="translate(130 42)">
        <circle r="17" fill="none" stroke="var(--art-blue)" strokeWidth="8" strokeDasharray="6 5" />
        <circle r="12" fill="var(--art-blue)" />
        <circle r="5" fill="var(--art-card)" />
      </g>
      {/* Flow arrow from the gears to the line */}
      <path d="M150 62c40 6 70 18 84 40" fill="none" stroke="var(--art-green)" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 9" />
      <path d="M226 96l9 8 3-12" fill="none" stroke="var(--art-green)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Items on the conveyor */}
      <rect x="44" y="104" width="34" height="30" rx="5" fill="var(--art-blue)" />
      <rect x="96" y="104" width="34" height="30" rx="5" fill="var(--art-blue)" opacity="0.75" />
      <rect x="148" y="104" width="34" height="30" rx="5" fill="var(--art-green)" opacity="0.85" />
      <rect x="200" y="104" width="34" height="30" rx="5" fill="var(--art-green)" />
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
      <circle cx="282" cy="118" r="20" fill="var(--art-green)" />
      <path d="M272 118l7 7 13-14" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// AI that analyses data and supports decisions: a chart with a forecast and a network.
function AiArt() {
  return (
    <svg {...svgProps} aria-label="A dashboard chart with a forecast line next to a neural network">
      <rect x="30" y="28" width="178" height="136" rx="12" fill="var(--art-card)" stroke="var(--art-line)" strokeWidth="2" />
      <path d="M48 146h144M48 146V48" stroke="var(--art-muted)" strokeWidth="2.5" strokeLinecap="round" />
      <g fill="var(--art-blue)" opacity="0.25">
        <rect x="58" y="118" width="14" height="28" rx="3" />
        <rect x="80" y="104" width="14" height="42" rx="3" />
        <rect x="102" y="110" width="14" height="36" rx="3" />
        <rect x="124" y="92" width="14" height="54" rx="3" />
      </g>
      <path d="M58 124l22-16 22 8 22-24 20-8" fill="none" stroke="var(--art-blue)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M144 84l18-14 20-10" fill="none" stroke="var(--art-green)" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 7" />
      <circle cx="182" cy="60" r="6" fill="var(--art-green)" />
      {/* Neural network */}
      <g stroke="var(--art-navy)" strokeWidth="2" opacity="0.45">
        <path d="M232 52l26 22M232 52l26 52M232 96l26-22M232 96l26 8M232 96l26 52M232 140l26-36M232 140l26 8M258 74l30 22M258 104l30-8M258 104l30 30M258 148l30-14M258 74l30 60" />
      </g>
      <g fill="var(--art-blue)">
        <circle cx="232" cy="52" r="8" />
        <circle cx="232" cy="96" r="8" />
        <circle cx="232" cy="140" r="8" />
      </g>
      <g fill="var(--art-navy)">
        <circle cx="258" cy="74" r="8" />
        <circle cx="258" cy="104" r="8" />
        <circle cx="258" cy="148" r="8" />
      </g>
      <g fill="var(--art-green)">
        <circle cx="288" cy="96" r="9" />
        <circle cx="288" cy="134" r="9" />
      </g>
      {/* Spark: the insight */}
      <path d="M288 30l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" fill="var(--art-green)" />
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
