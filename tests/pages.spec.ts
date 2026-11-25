import { test, expect } from "@playwright/test";
import { pages } from "../src/content/pages";
import { sectors } from "../src/content/sectors";
import { visitRequestMailto } from "../src/lib/visit-request";

const rel = (path: string) => "." + path.replace(/([^/])$/, "$1/");

test("every page: one h1, contact details in the footer, no banned words, fits a phone", async ({
  page,
}) => {
  await page.setViewportSize({ width: 360, height: 800 });
  for (const meta of pages) {
    await page.goto(rel(meta.path));
    await expect(page.getByRole("heading", { level: 1 }), meta.path).toHaveCount(1);
    const footer = page.locator("footer");
    for (const text of ["info@1hubengineering.com", "+251 913 231 123", "+251 922 964 576"]) {
      await expect(footer.getByText(text, { exact: true }), `${meta.path} ${text}`).toBeVisible();
    }
    for (const service of [
      "Software Development",
      "Systems Engineering",
      "Process Automation",
      "AI-Driven Operations",
    ]) {
      await expect(footer.getByText(service, { exact: true })).toBeVisible();
    }
    expect(await page.locator("body").innerText(), meta.path).not.toMatch(/consultanc/i);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      `${meta.path} overflows at 360px`,
    ).toBe(true);
  }
});

test("main navigation reaches every section page", async ({ page }) => {
  await page.goto("./");
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  for (const [label, heading] of [
    ["Solutions", "Seven solutions in three families."],
    ["Sectors", "Eight sectors. One engineering partner."],
    ["Projects", "What we build."],
    ["About", "Engineers who study your work before we build."],
    ["Contact", "Book a free discovery visit."],
  ]) {
    await nav.getByRole("link", { name: label }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
    await expect(nav.getByRole("link", { name: label })).toHaveAttribute("aria-current", "page");
  }
});

for (const sector of sectors) {
  test(`sector page ${sector.slug} follows the template and ends with its call to action`, async ({
    page,
  }) => {
    await page.goto(`./sectors/${sector.slug}/`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(sector.headline);
    const headings = await page.locator("main h1, main h2").allInnerTexts();
    const order = [
      sector.headline,
      "What slows you down today.",
      "Pick what you need. Start with one.",
      sector.pilot,
      "What you gain",
      sector.cta.label,
    ];
    let cursor = -1;
    for (const expected of order) {
      const index = headings.findIndex((text, i) => i > cursor && text.trim() === expected);
      expect(index, `"${expected}" in order on ${sector.slug}`).toBeGreaterThan(cursor);
      cursor = index;
    }
    // The call to action is the last section on the page.
    expect(headings.at(-1)?.trim()).toBe(sector.cta.label);
    await expect(page.locator(".challenge-list li")).toHaveCount(3);
    await expect(page.locator(".solution-table tbody tr")).toHaveCount(sector.solutions.length);
    await expect(page.locator(".sector-photo img")).toHaveAttribute("alt", sector.image.alt);
    await expect(page.locator(".to-confirm")).toHaveCount(sector.cta.toConfirm ? 1 : 0);

    await page.getByRole("link", { name: sector.cta.action }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Book a free discovery visit.");
    await expect(page.getByLabel("Your sector")).toHaveValue(sector.slug);
  });
}

test("solutions page shows three families, seven solutions and the AI band", async ({ page }) => {
  await page.goto("./solutions/");
  for (const family of ["Make", "Sell", "Learn and Build"]) {
    await expect(page.getByRole("heading", { level: 2, name: family })).toBeVisible();
  }
  await expect(page.locator(".solution-card")).toHaveCount(7);
  await expect(page.locator(".ai-grid li")).toHaveCount(4);
  await expect(page.locator(".ai-grid .to-confirm")).toHaveCount(4);
});

test("contact form builds a filled-in email request", () => {
  const href = visitRequestMailto({
    name: " Tester ",
    organisation: "Test Mill PLC",
    contact: "tester@example.com",
    sector: "food-and-beverage",
    message: "Track flour stock.",
  });
  expect(href.startsWith("mailto:info@1hubengineering.com?subject=")).toBe(true);
  const decoded = decodeURIComponent(href);
  for (const part of ["Name: Tester", "Organisation: Test Mill PLC", "Sector: Food and beverage", "Track flour stock."]) {
    expect(decoded).toContain(part);
  }
  expect(decodeURIComponent(visitRequestMailto({ name: "A", organisation: "", contact: "a", sector: "x", message: "m" }))).toContain("Sector: Other / not sure");
});
