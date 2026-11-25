import { lazy, Suspense, useEffect, useState } from "react";
import { BrandMark } from "@/components/brand";

// The shader library is only downloaded when the effect is actually shown.
const LiquidMetal = lazy(() =>
  import("@paper-design/shaders-react").then((module) => ({ default: module.LiquidMetal })),
);

const symbol = `${import.meta.env.BASE_URL}brand/andhub-symbol-flat-light.svg`;

function canAnimate() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  // The hero mark is hidden below 1100px, so skip the work on small screens.
  if (!window.matchMedia("(min-width: 1101px)").matches) return false;
  try {
    return Boolean(document.createElement("canvas").getContext("webgl2"));
  } catch {
    return false;
  }
}

// Home hero symbol with a liquid-metal effect (Paper Shaders, Apache-2.0).
// Server render, reduced motion, small screens and browsers without WebGL 2
// get the static gradient symbol.
export function LiquidLogo() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(canAnimate());
  }, []);

  return (
    <div className={animate ? "liquid-logo is-animated" : "liquid-logo"} aria-hidden="true">
      <BrandMark surface="dark" />
      {animate && (
        <Suspense fallback={null}>
          <LiquidMetal
            className="liquid-logo-canvas"
            image={symbol}
            colorBack="#00000000"
            colorTint="#FFFFFF"
            shape="none"
            repetition={2}
            softness={0.1}
            shiftRed={0.3}
            shiftBlue={0.3}
            distortion={0.07}
            contour={0.4}
            angle={70}
            speed={1}
            scale={0.95}
          />
        </Suspense>
      )}
    </div>
  );
}
