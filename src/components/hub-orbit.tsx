import type { CSSProperties } from "react";
import { services } from "@/content/site";

const base = import.meta.env.BASE_URL;

// "One hub": the AndHub symbol at the centre with the four services orbiting it.
// The symbol is the official gradient artwork; a glossy sheen in the logo's own
// colours sweeps across it (masked to the symbol's shape, so nothing spills).
// All motion is CSS and stops for prefers-reduced-motion.
export function HubOrbit() {
  return (
    <div className="hub-orbit">
      <span className="hub-ring hub-ring-outer" aria-hidden="true" />
      <span className="hub-ring hub-ring-inner" aria-hidden="true" />
      <div className="hub-core" aria-hidden="true">
        <img
          src={`${base}brand/andhub-symbol-gradient-dark.svg`}
          width="512"
          height="512"
          alt=""
        />
        <span
          className="hub-sheen"
          style={
            {
              "--mask": `url(${base}brand/andhub-symbol-flat-light.svg)`,
            } as CSSProperties
          }
        />
      </div>
      <ul className="hub-satellites" aria-label="Our services">
        {services.map((service, index) => (
          <li key={service} style={{ "--i": index } as CSSProperties}>
            <span className="hub-satellite">
              <span className="hub-satellite-label">{service}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
