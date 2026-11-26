// Turns the client build into one static HTML file per route.
// Runs after `vp build` (client → dist) and `vp build --ssr` (server → dist-ssr).
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const dist = resolve("dist");
const ssrDir = resolve("dist-ssr");
const template = await readFile(join(dist, "index.html"), "utf8");
const { render, pages, notFoundMeta } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);

// The client build already rewrote the canonical origin for this deployment.
const siteUrl = template.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
if (!siteUrl) throw new Error("prerender: canonical link missing from dist/index.html");

const escape = (value) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

function replaceOnce(html, pattern, replacement, label) {
  const found = typeof pattern === "string" ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`prerender: ${label} not found in template`);
  if (typeof pattern === "string") {
    // A function replacement keeps "$" sequences in rendered markup literal.
    return html.replace(pattern, () => replacement);
  }
  return html.replace(pattern, replacement);
}

function buildPage(meta, { noindex = false } = {}) {
  const url = siteUrl + meta.path.replace(/^\//, "").replace(/([^/])$/, "$1/");
  const tab = escape(meta.tab);
  const title = escape(meta.title);
  const description = escape(meta.description);
  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${tab}</title>`, "title");
  html = replaceOnce(
    html,
    /(<meta\s+name="description"\s+content=")[^"]*(")/,
    `$1${description}$2`,
    "meta description",
  );
  html = replaceOnce(
    html,
    /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
    `$1${title}$2`,
    "og:title",
  );
  html = replaceOnce(
    html,
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
    `$1${description}$2`,
    "og:description",
  );
  html = replaceOnce(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`, "og:url");
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, "canonical");
  if (noindex) {
    html = replaceOnce(html, /content="index, follow"/, 'content="noindex"', "robots meta");
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, "");
  }
  return replaceOnce(
    html,
    '<div id="root"></div>',
    `<div id="root">${render(meta.path)}</div>`,
    "root element",
  );
}

for (const meta of pages) {
  const file = join(dist, meta.path, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, buildPage(meta));
  console.log(`prerender: ${meta.path}`);
}

// The sitemap lists every pre-rendered route, so it cannot drift from the page list.
const sitemapUrls = pages
  .map((meta) => `  <url><loc>${siteUrl}${meta.path.replace(/^\//, "").replace(/([^/])$/, "$1/")}</loc></url>`)
  .join("\n");
await writeFile(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
);
console.log(`prerender: sitemap.xml (${pages.length} URLs)`);

// GitHub Pages serves 404.html for any unknown path.
await writeFile(join(dist, "404.html"), buildPage(notFoundMeta, { noindex: true }));
console.log("prerender: 404.html");

await rm(ssrDir, { recursive: true, force: true });
