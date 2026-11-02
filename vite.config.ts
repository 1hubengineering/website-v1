import { defineConfig } from "vite-plus";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const canonicalOrigin = "https://1hubengineering.com/";
const siteUrl = (process.env.SITE_URL || canonicalOrigin).replace(/\/+$/, "") + "/";
const base = (process.env.BASE_PATH || "/").replace(/\/+$/, "") + "/";

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "deployment-metadata",
      transformIndexHtml(html) {
        return html.replaceAll(canonicalOrigin, siteUrl);
      },
      async writeBundle(options) {
        for (const name of ["robots.txt", "sitemap.xml"]) {
          const path = resolve(options.dir || "dist", name);
          const source = await readFile(path, "utf8");
          await writeFile(path, source.replaceAll(canonicalOrigin, siteUrl));
        }
      },
    },
  ],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  server: { host: "127.0.0.1" },
});
