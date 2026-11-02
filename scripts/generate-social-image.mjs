import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
const logo = (
  await readFile(new URL("../public/brand/andhub-compact-flat-dark.svg", import.meta.url))
).toString("base64");
const symbol = (
  await readFile(new URL("../public/brand/andhub-symbol-gradient-dark.svg", import.meta.url))
).toString("base64");
const font = (
  await readFile(
    new URL(
      "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
      import.meta.url,
    ),
  )
).toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><style>@font-face{font-family:Inter;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}text{font-family:Inter,Arial,sans-serif}</style></defs>
<rect width="1200" height="630" fill="#0B1F3B"/>
<rect x="64" y="0" width="72" height="6" fill="#2563EB"/>
<image href="data:image/svg+xml;base64,${logo}" x="48" y="32" width="270" height="79"/>
<text x="64" y="200" font-size="16" letter-spacing="2" fill="#CBD5E1">ANDHUB ENGINEERING PLC</text>
<text x="60" y="292" font-size="80" font-weight="700" letter-spacing="-4" fill="#FFFFFF">Ideas.</text>
<text x="60" y="380" font-size="80" font-weight="700" letter-spacing="-4" fill="#10B981">Engineered.</text>
<text x="64" y="438" font-size="20" fill="#CBD5E1">Software development. Systems engineering.</text>
<text x="64" y="470" font-size="20" fill="#CBD5E1">Consultancy.</text>
<image href="data:image/svg+xml;base64,${symbol}" x="764" y="126" width="360" height="360"/>
<path d="M64 534H1136" stroke="#2C4664"/>
<text x="64" y="578" font-size="16" fill="#CBD5E1">Lebu, Addis Ababa, Ethiopia</text>
<text x="1136" y="578" text-anchor="end" font-size="16" fill="#FFFFFF">1hubengineering.com</text>
</svg>`;
await writeFile(new URL("../public/og-image.svg", import.meta.url), svg);
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.setContent(`<html><body style="margin:0">${svg}</body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: fileURLToPath(new URL("../public/og-image.png", import.meta.url)),
  });
} finally {
  await browser.close();
}
