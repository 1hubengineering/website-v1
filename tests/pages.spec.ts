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
    [
      "Solutions",
      "Running a business shouldn’t be a headache. In this digital age, the right digital solution lets owners track every part of it from anywhere",
    ],
    ["Projects", "Our projects"],
    ["About", "Learning is the only path forward for growth, and comfort is the enemy. We help you ask the right questions to grow"],
    ["Contact", "Book a free discovery visit"],
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
      sector.challengesTitle ?? "Tell us your challenges",
      ...(sector.offering ? ["Our digital solution"] : []),
      "Solutions you can choose from",
      "Start small",
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
    await expect(page.locator(".challenge-cards li")).toHaveCount(sector.challenges.length);
    await expect(page.locator(".solution-table tbody tr")).toHaveCount(sector.solutions.length);
    // The sector photo is the hero background; the hero holds only the bold sentence.
    const photo = page.locator(".page-hero-photo .hero-slide").first();
    await expect(photo).toHaveAttribute("alt", sector.images[0].alt);
    await expect
      .poll(() => photo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0))
      .toBe(true);
    await expect(page.locator(".page-hero-photo p, .page-hero-photo .page-hero-lead")).toHaveCount(0);
    if (sector.question) {
      // Solution story: question and answer, then the offering and what it tackles.
      await expect(page.locator(".sector-question-text")).toHaveText(sector.question);
      if (sector.answer) await expect(page.locator(".sector-answer")).toHaveText(sector.answer);
      await expect(page.locator(".sector-offering-name")).toHaveText(sector.offering ?? "");
      await expect(page.locator(".sector-offering .gain-list li")).toHaveText(sector.challenges);
    } else {
      await expect(page.locator(".sector-intro")).toHaveText(sector.intro);
    }
    await expect(page.locator(".to-confirm")).toHaveCount(sector.cta.toConfirm ? 1 : 0);

    await page.getByRole("link", { name: sector.cta.action }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Book a free discovery visit");
    await expect(page.getByLabel("Your sector")).toHaveValue(sector.slug);
  });
}

test("solutions page groups seven solutions by what owners track, plus the AI band", async ({
  page,
}) => {
  await page.goto("./solutions/");
  for (const heading of [
    "Track stock and deliveries",
    "Track production and quality",
    "Track sales and products",
    "Track projects and sites",
    "Track training and learning",
  ]) {
    await expect(page.getByRole("heading", { level: 2, name: heading })).toBeVisible();
  }
  await expect(page.getByText("You get", { exact: true })).toHaveCount(0);
  await expect(page.locator(".solution-card h4").first()).toHaveText("Benefits");
  // Group names and their dot icons are not shown.
  for (const name of ["Make", "Sell", "Learn and Build"]) {
    await expect(page.getByRole("heading", { name, exact: true })).toHaveCount(0);
  }
  await expect(page.locator(".family-dot")).toHaveCount(0);
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

test("home hero: the four services orbit the AndHub symbol", async ({ browser }) => {
  for (const reducedMotion of ["reduce", "no-preference"] as const) {
    const page = await browser.newPage({ reducedMotion, viewport: { width: 1440, height: 900 } });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("./");
    const orbit = page.getByRole("list", { name: "Our services" });
    await expect(orbit.getByRole("listitem")).toHaveText([
      "Software Development",
      "Systems Engineering",
      "Process Automation",
      "AI-Driven Operations",
    ]);
    await expect(page.locator(".hub-core img")).toBeVisible();
    // No silver liquid-metal shader any more: no canvas, no WebGL bundle.
    await expect(page.locator(".home-hero canvas")).toHaveCount(0);
    await page.waitForTimeout(2200);
    for (const label of await orbit.locator(".hub-satellite-label").all()) {
      await expect(label).toBeInViewport();
    }
    expect(errors).toEqual([]);
    await page.close();
  }
});

test("Sectors in the header is a dropdown of every sector", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("./");
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  const trigger = nav.getByRole("button", { name: "Sectors" });
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  const menu = page.locator("#sectors-menu");
  await expect(menu.getByRole("link")).toHaveCount(sectors.length + 1);
  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();
  await expect(trigger).toBeFocused();

  await trigger.click();
  await menu.getByRole("link", { name: "Metal and engineering" }).click();
  await expect(page).toHaveURL(/\/sectors\/metal-and-engineering\/$/);
  await expect(menu).toBeHidden();
  await expect(trigger).toHaveClass(/active/);

  await trigger.click();
  await menu.getByRole("link", { name: "All sectors" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Sector digital solutions");
});

test("Our approach shows the brochure steps on About only", async ({ page }) => {
  await page.goto("./about/");
  await expect(page.locator(".approach-step h3")).toHaveText([
    "Understand your needs",
    "Define requirements and scope",
    "Design and develop",
    "Validate and support",
  ]);
  await page.goto("./");
  await expect(page.locator(".approach-flow")).toHaveCount(0);
});

test("sector hero slideshow: every slide with motion, first photo only without", async ({
  browser,
}) => {
  const aviation = sectors.find((sector) => sector.slug === "aerospace-and-aviation")!;
  expect(aviation.images.length).toBe(5);

  const moving = await browser.newPage({ reducedMotion: "no-preference" });
  await moving.goto("./sectors/aerospace-and-aviation/");
  await expect(moving.locator(".hero-slide")).toHaveCount(aviation.images.length);
  const toggle = moving.getByRole("button", { name: "Pause photo slideshow" });
  await toggle.click();
  await expect(moving.getByRole("button", { name: "Play photo slideshow" })).toBeVisible();
  for (const image of aviation.images) {
    const response = await moving.request.get("./" + image.src);
    expect(response.ok(), image.src).toBe(true);
  }
  await moving.close();

  const still = await browser.newPage({ reducedMotion: "reduce" });
  await still.goto("./sectors/aerospace-and-aviation/");
  await expect(still.locator(".hero-slide")).toHaveCount(1);
  await expect(still.locator(".hero-slides-toggle")).toHaveCount(0);
  await still.close();
});

test("About shows four team cards, each with a photo or a placeholder", async ({ page }) => {
  await page.goto("./about/");
  const cards = page.locator(".team-member");
  await expect(cards).toHaveCount(4);
  for (const name of ["Rehobot Bekele, PhD", "Abraham Bekele", "Lydia B", "Ammanuel T"]) {
    await expect(cards.filter({ hasText: name })).toHaveCount(1);
  }
  await expect(page.locator(".team-photo")).toHaveCount(4);
  await expect(page.locator("#team .to-confirm")).toHaveCount(0);
});

test("home quotes the Prime Minister with a source; aviation story steps have no numbers", async ({
  page,
}) => {
  await page.goto("./");
  const quote = page.locator(".leader-quote");
  await expect(quote.locator("q")).toHaveText(
    "By learning from the past and relentlessly building the present, digital transformation is becoming our living daily culture streamlining commerce, enhancing accessibility, and modernizing public services",
  );
  await expect(quote.locator("figcaption")).toHaveText("Abiy Ahmed, PM");
  // The source stays recorded on the quote itself.
  await expect(quote.locator("blockquote")).toHaveAttribute(
    "cite",
    "https://www.ena.et/web/eng/w/eng_9536435",
  );

  await page.goto("./sectors/aerospace-and-aviation/");
  await expect(page.locator(".story-step")).toHaveText([
    "Traceable engineering practice",
    "Unified digital engineering hub",
    "Multidisciplinary collaboration and communication",
    "Knowledge maturity",
    "Validated research to industry",
  ]);
});
