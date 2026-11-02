import { cn } from "@/lib/utils";

// Supplied artwork from 1hubengineering/branding-guideline; keep paths and proportions intact.
export function BrandMark({ className, surface }: { className?: string; surface?: "dark" }) {
  return (
    <span
      className={cn("brand-symbol", surface === "dark" && "brand-on-dark", className)}
      aria-hidden="true"
    >
      <img
        className="brand-art-light"
        src={`${import.meta.env.BASE_URL}brand/andhub-symbol-gradient-light.svg`}
        width="512"
        height="512"
        alt=""
      />
      <img
        className="brand-art-dark"
        src={`${import.meta.env.BASE_URL}brand/andhub-symbol-gradient-dark.svg`}
        width="512"
        height="512"
        alt=""
      />
    </span>
  );
}

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={cn("brand", footer && "footer-brand")}
      href="#top"
      aria-label="AndHub Engineering PLC home"
    >
      <img
        className="brand-art-light"
        src={`${import.meta.env.BASE_URL}brand/andhub-compact-flat-light.svg`}
        width="825"
        height="240"
        alt=""
      />
      <img
        className="brand-art-dark"
        src={`${import.meta.env.BASE_URL}brand/andhub-compact-flat-dark.svg`}
        width="825"
        height="240"
        alt=""
      />
    </a>
  );
}
