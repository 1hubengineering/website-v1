import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";

export { pages, notFoundMeta } from "./content/pages";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

// Used only at build time by scripts/prerender.mjs.
export function render(path: string) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter basename={basename} location={basename + path}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );
}
