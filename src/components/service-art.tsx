// Illustrations for the four core services (home page cards). Drawn as inline SVG in
// the brand colours so they follow light and dark mode; no people, no photos.
// Colours come from CSS variables set on .service-art (see pages.css).

const svgProps = {
  viewBox: "0 0 320 190",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

// Websites, apps and business software: a live dashboard on a laptop, with a phone
// that receives a notification.
function SoftwareArt() {
  return (
    <svg {...svgProps} aria-label="A laptop showing a live dashboard and a phone receiving a notification">
      {/* Laptop */}
      <rect x="30" y="26" width="196" height="122" rx="10" fill="var(--art-card)" stroke="var(--art-navy)" strokeWidth="3.5" />
      <path d="M16 150h224l-10 14H26Z" fill="var(--art-navy)" />
      <rect x="110" y="152" width="36" height="4" rx="2" fill="var(--art-muted)" />
      {/* Dashboard: two figure tiles */}
      <rect x="42" y="38" width="80" height="26" rx="6" fill="var(--art-blue)" opacity="0.16" />
      <rect x="50" y="45" width="28" height="4" rx="2" fill="var(--art-blue)" />
      <rect className="art-blink" x="50" y="53" width="44" height="6" rx="3" fill="var(--art-blue)" />
      <rect x="132" y="38" width="82" height="26" rx="6" fill="var(--art-green)" opacity="0.18" />
      <rect x="140" y="45" width="28" height="4" rx="2" fill="var(--art-green)" />
      <rect className="art-blink" style={{ animationDelay: "0.8s" }} x="140" y="53" width="44" height="6" rx="3" fill="var(--art-green)" />
      {/* Bars that grow */}
      <g fill="var(--art-blue)">
        <rect className="art-grow" x="46" y="98" width="11" height="38" rx="2" />
        <rect className="art-grow" style={{ animationDelay: "0.25s" }} x="62" y="88" width="11" height="48" rx="2" />
        <rect className="art-grow" style={{ animationDelay: "0.5s" }} x="78" y="106" width="11" height="30" rx="2" />
        <rect className="art-grow" style={{ animationDelay: "0.75s" }} x="94" y="80" width="11" height="56" rx="2" opacity="0.7" />
        <rect className="art-grow" style={{ animationDelay: "1s" }} x="110" y="92" width="11" height="44" rx="2" opacity="0.7" />
      </g>
      {/* Line chart that draws */}
      <rect x="132" y="74" width="82" height="64" rx="6" fill="var(--art-bg)" />
      <path className="art-draw" pathLength={100} d="M140 126l14-12 14 6 16-20 22-12" fill="none" stroke="var(--art-green)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Phone with a notification */}
      <rect x="240" y="44" width="58" height="110" rx="11" fill="var(--art-card)" stroke="var(--art-navy)" strokeWidth="3.5" />
      <rect x="260" y="50" width="18" height="4" rx="2" fill="var(--art-muted)" />
      <rect x="249" y="104" width="40" height="6" rx="3" fill="var(--art-muted)" />
      <rect x="249" y="116" width="28" height="6" rx="3" fill="var(--art-muted)" />
      <rect x="249" y="132" width="40" height="12" rx="6" fill="var(--art-blue)" opacity="0.5" />
      <g className="art-notify">
        <rect x="246" y="62" width="58" height="30" rx="8" fill="var(--art-card)" stroke="var(--art-green)" strokeWidth="2" />
        <circle cx="259" cy="77" r="7" fill="var(--art-green)" />
        <rect x="270" y="71" width="28" height="4" rx="2" fill="var(--art-navy)" />
        <rect x="270" y="80" width="20" height="4" rx="2" fill="var(--art-muted)" />
      </g>
      {/* Bell with a badge */}
      <g className="art-ring">
        <path d="M296 30a10 10 0 0 0-10 10v8l-4 6h28l-4-6v-8a10 10 0 0 0-10-10Z" fill="var(--art-navy)" />
        <circle cx="296" cy="57" r="3.5" fill="var(--art-navy)" />
      </g>
      <circle className="art-pulse" cx="306" cy="32" r="6" fill="var(--art-green)" />
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

// Lending platform for microfinance and banks: a loan helps a small shop grow.
export function LoanArt() {
  return (
    <div className="service-art">
      <svg viewBox="0 0 320 190" role="img" aria-label="A coin drops onto a stack of coins beside a small shop, and a young plant grows from it">
        <rect x="20" y="160" width="280" height="4" rx="2" fill="var(--art-line)" />
        {/* Small shop */}
        <rect x="42" y="82" width="120" height="78" fill="var(--art-card)" stroke="var(--art-line)" strokeWidth="2" />
        <path d="M34 64h136l-8-22H42Z" fill="var(--art-navy)" />
        <g>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M${34 + i * 22.7} 64h22.7v10a11.35 11.35 0 0 1-22.7 0Z`}
              fill={i % 2 ? "var(--art-card)" : "var(--art-green)"}
              stroke="var(--art-line)"
              strokeWidth="1.5"
            />
          ))}
        </g>
        <rect x="56" y="98" width="44" height="34" rx="4" fill="var(--art-blue)" opacity="0.3" />
        <rect x="112" y="102" width="34" height="58" rx="4" fill="var(--art-blue)" />
        <circle cx="139" cy="132" r="2.5" fill="var(--art-card)" />
        {/* Coins with a young plant */}
        <g fill="var(--art-green)" stroke="var(--art-card)" strokeWidth="2">
          <ellipse cx="236" cy="152" rx="30" ry="9" />
          <ellipse cx="236" cy="142" rx="30" ry="9" />
          <ellipse cx="236" cy="132" rx="30" ry="9" />
          <ellipse cx="236" cy="122" rx="30" ry="9" />
        </g>
        <path d="M236 114V82" stroke="var(--art-green)" strokeWidth="4" strokeLinecap="round" />
        <g className="art-pulse">
          <path d="M236 96c-4-14-18-18-28-14 2 12 14 18 28 14Z" fill="var(--art-green)" />
          <path d="M236 88c4-16 20-22 32-16-2 14-16 20-32 16Z" fill="var(--art-green)" opacity="0.75" />
        </g>
        {/* Coin dropping in */}
        <g className="art-drop">
          <circle cx="282" cy="64" r="13" fill="var(--art-card)" stroke="var(--art-green)" strokeWidth="3" />
          <path d="M282 57v14M278 60h6a2.5 2.5 0 0 1 0 5h-4a2.5 2.5 0 0 0 0 5h6" fill="none" stroke="var(--art-green)" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

// Business administration for small and medium businesses: a shop and its to-do list,
// ticked off one by one.
export function BusinessAdminArt() {
  return (
    <div className="service-art">
      <svg viewBox="0 0 320 190" role="img" aria-label="A small shop beside a clipboard whose tasks are ticked off one by one">
        <rect x="20" y="160" width="280" height="4" rx="2" fill="var(--art-line)" />
        {/* Small shop */}
        <rect x="36" y="84" width="112" height="76" fill="var(--art-card)" stroke="var(--art-line)" strokeWidth="2" />
        <path d="M28 66h128l-8-22H36Z" fill="var(--art-navy)" />
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M${28 + i * 25.6} 66h25.6v10a12.8 12.8 0 0 1-25.6 0Z`}
              fill={i % 2 ? "var(--art-card)" : "var(--art-blue)"}
              stroke="var(--art-line)"
              strokeWidth="1.5"
            />
          ))}
        </g>
        <rect x="48" y="100" width="40" height="30" rx="4" fill="var(--art-blue)" opacity="0.3" />
        <rect x="100" y="104" width="34" height="56" rx="4" fill="var(--art-navy)" />
        <rect x="106" y="112" width="22" height="10" rx="2" fill="var(--art-green)" />
        {/* Clipboard */}
        <rect x="178" y="34" width="108" height="126" rx="10" fill="var(--art-card)" stroke="var(--art-navy)" strokeWidth="3.5" />
        <rect x="212" y="26" width="40" height="16" rx="5" fill="var(--art-navy)" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="192" y={60 + i * 30} width="18" height="18" rx="4" fill="var(--art-bg)" stroke="var(--art-line)" strokeWidth="2" />
            <path
              className="art-draw"
              style={{ animationDelay: `${i * 0.6}s` }}
              pathLength={100}
              d={`M195 ${69 + i * 30}l4 5 9-11`}
              fill="none"
              stroke="var(--art-green)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="218" y={66 + i * 30} width={i === 1 ? 40 : 54} height="6" rx="3" fill="var(--art-muted)" />
          </g>
        ))}
      </svg>
    </div>
  );
}
