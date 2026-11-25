import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import "./styles/site.css";
import "./styles/pages.css";
import "./styles/hero.css";
import App from "./App";

const container = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Built pages arrive pre-rendered (scripts/prerender.mjs); the dev server sends an empty root.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
