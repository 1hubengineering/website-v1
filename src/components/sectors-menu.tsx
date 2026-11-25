import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ChevronDown } from "lucide-react";
import { sectors } from "@/content/sectors";

// Desktop header: "Sectors" opens a dropdown with every sector page.
export function SectorsMenu() {
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const active = pathname.startsWith("/sectors");

  // Close after navigating.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      className="nav-dropdown"
      ref={wrapper}
      onBlur={(event) => {
        if (!wrapper.current?.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        className={active ? "nav-dropdown-trigger active" : "nav-dropdown-trigger"}
        aria-expanded={open}
        aria-controls="sectors-menu"
        onClick={() => setOpen((value) => !value)}
      >
        Sectors
        <ChevronDown size={15} aria-hidden="true" />
      </button>
      <ul id="sectors-menu" className="nav-dropdown-panel" hidden={!open}>
        {sectors.map((sector) => (
          <li key={sector.slug}>
            <NavLink to={`/sectors/${sector.slug}/`}>{sector.name}</NavLink>
          </li>
        ))}
        <li className="nav-dropdown-all">
          <Link to="/sectors/">All sectors</Link>
        </li>
      </ul>
    </div>
  );
}

// Mobile menu: the sector pages listed under "Sectors".
export function MobileSectorLinks({ onNavigate }: { onNavigate: () => void }) {
  return (
    <ul className="mobile-sector-links">
      {sectors.map((sector) => (
        <li key={sector.slug}>
          <NavLink to={`/sectors/${sector.slug}/`} onClick={onNavigate}>
            {sector.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
