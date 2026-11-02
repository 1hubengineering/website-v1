import { test, expect } from "@playwright/test";

test("theme persists and navigation, filters, details, FAQ, and inquiry work", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./");
  await expect
    .poll(() =>
      page
        .locator("img")
        .evaluateAll((images) =>
          images.every(
            (image) =>
              image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0,
          ),
        ),
    )
    .toBe(true);
  const siteUrl =
    (process.env.SITE_URL || "https://1hubengineering.com/").replace(/\/+$/, "") + "/";
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", siteUrl);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    siteUrl + "og-image.png",
  );
  for (const name of ["robots.txt", "sitemap.xml"]) {
    const response = await page.request.get("./" + name);
    expect(response.ok()).toBe(true);
    expect(await response.text()).toContain(siteUrl);
  }
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Ideas.Engineered.");
  for (const service of ["Software development", "Systems engineering", "Consultancy"]) {
    await expect(page.getByRole("heading", { name: service, exact: true })).toBeVisible();
  }
  const brand = page
    .getByRole("link", { name: "AndHub Engineering PLC home", exact: true })
    .first();
  await expect(brand.locator(".brand-art-dark")).toBeVisible();
  await expect(brand.locator(".brand-art-light")).toBeHidden();
  await expect(page.locator("html")).toHaveClass("dark");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).not.toHaveClass("dark");
  await expect(brand.locator(".brand-art-light")).toBeVisible();
  await expect(brand.locator(".brand-art-dark")).toBeHidden();
  await page.reload();
  await expect(page.getByRole("button", { name: "Switch to dark theme" })).toBeVisible();
  await page
    .getByRole("group", { name: "Filter projects" })
    .getByRole("button", { name: "Open source" })
    .click();
  await expect(page.locator(".project-card")).toHaveCount(3);
  await expect(page.getByRole("button", { name: "Explore Rental OS", exact: true })).toHaveCount(0);
  await page.getByRole("button", { name: "Explore KeyForge", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(
    page.getByRole("dialog").getByRole("link", { name: "View repository" }),
  ).toHaveAttribute("href", "https://github.com/zdevzone/keyforge");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Explore KeyForge", exact: true })).toBeFocused();
  await page.getByRole("button", { name: "What kind of projects do you take on?" }).click();
  await expect(
    page.getByText(
      "We build company websites, web platforms, business software, desktop applications, and integrations.",
      { exact: false },
    ),
  ).toBeVisible();
  await page.getByRole("button", { name: "Build with us", exact: true }).click();
  const dialog = page.getByRole("dialog");
  await dialog.getByLabel("Your name", { exact: true }).fill("Website Tester");
  await dialog.getByLabel("Email address").fill("tester@example.com");
  await dialog.getByLabel("What are you looking to build?").selectOption("Business software");
  await dialog
    .getByLabel("A little about your project")
    .fill("Connect our rental inventory and booking systems.");
  await dialog.getByRole("button", { name: "Prepare my inquiry" }).click();
  await expect(dialog.getByRole("heading")).toHaveText("Your inquiry is ready.");
  const mailto = await dialog.getByRole("link", { name: "Open email draft" }).getAttribute("href");
  expect(mailto).toMatch(/^mailto:info@1hubengineering.com\?/);
  expect(decodeURIComponent(mailto!)).toContain(
    "Connect our rental inventory and booking systems.",
  );
  expect(decodeURIComponent(mailto!)).toContain("tester@example.com");
  await dialog.getByRole("button", { name: "Back to edit" }).click();
  await expect(dialog.getByLabel("Your name", { exact: true })).toHaveValue("Website Tester");
  await expect(dialog.getByLabel("A little about your project")).toHaveValue(
    "Connect our rental inventory and booking systems.",
  );
  await page.keyboard.press("Escape");
  expect(errors).toEqual([]);
});

test("direct section links land below the sticky header after rendering", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  for (const id of ["services", "work", "about", "process", "faq", "contact"]) {
    await page.goto("./#" + id);
    await page.evaluate(() => document.fonts.ready);
    await expect
      .poll(() =>
        page
          .locator("#" + id)
          .evaluate((element) => Math.round(element.getBoundingClientRect().top)),
      )
      .toBe(95);
  }
});

for (const width of [320, 360, 390, 768, 1024, 1440]) {
  test(`responsive layouts and themes at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("./");
    await page.evaluate(() => document.fonts.ready);
    for (const theme of ["dark", "light"]) {
      if (theme === "light")
        await page.getByRole("button", { name: "Switch to light theme" }).click();
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      ).toBe(true);
      expect(
        await page
          .locator(".header-inner")
          .evaluate((element) => element.scrollWidth <= element.clientWidth),
      ).toBe(true);
      await expect(page.locator(".project-card")).toHaveCount(6);
      await expect(
        page.getByRole("heading", { name: "Complex challenges. Elegant solutions." }),
      ).toBeVisible();
      await page.screenshot({ path: `test-results/andhub-${theme}-${width}.png`, fullPage: true });
    }
    if (width < 801) {
      await page.getByRole("button", { name: "Open navigation", exact: true }).click();
      await page
        .getByRole("navigation", { name: "Mobile navigation" })
        .getByRole("link", { name: "Our work" })
        .click();
      await expect(page.getByRole("dialog")).toHaveCount(0);
      await expect(page).toHaveURL(/#work$/);
    }
  });
}
