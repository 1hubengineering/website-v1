import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [390, 1440]) {
  for (const theme of ["dark", "light"]) {
    test(`automated accessibility checks for ${theme} at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("./");
      if (theme === "light")
        await page.getByRole("button", { name: "Switch to light theme" }).click();
      const audit = () =>
        new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
      expect((await audit()).violations).toEqual([]);
      await page.getByRole("button", { name: "Build with us", exact: true }).click();
      await expect(page.getByRole("dialog").getByLabel("Your name", { exact: true })).toBeFocused();
      expect((await audit()).violations).toEqual([]);
      await page.keyboard.press("Escape");
      await page.getByRole("button", { name: "Explore KeyForge", exact: true }).click();
      expect((await audit()).violations).toEqual([]);
    });
  }
}

test("mobile menu opens a focused inquiry and preserves unfinished work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./");
  await page.getByRole("button", { name: "Open navigation", exact: true }).click();
  await page.getByRole("dialog").getByRole("button", { name: "Start a project" }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toHaveCount(1);
  await expect(dialog.getByLabel("Your name", { exact: true })).toBeFocused();
  await dialog.getByLabel("Your name", { exact: true }).fill("Alex");
  await dialog.getByLabel("A little about your project").fill("Our next platform.");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open navigation", exact: true })).toBeFocused();
  await page.getByRole("button", { name: "Build with us", exact: true }).click();
  await expect(dialog.getByLabel("Your name", { exact: true })).toHaveValue("Alex");
  await expect(dialog.getByLabel("A little about your project")).toHaveValue("Our next platform.");
});

test("inquiry validates meaningful input, handles clipboard failure, and keeps keyboard focus", async ({
  page,
}) => {
  await page.goto("./");
  await page.getByRole("button", { name: "Build with us", exact: true }).click();
  const dialog = page.getByRole("dialog");
  await dialog.getByLabel("Your name", { exact: true }).fill("   ");
  await dialog.getByLabel("Email address").fill("alex@example.com");
  await dialog.getByLabel("What are you looking to build?").selectOption("Business software");
  await dialog.getByLabel("A little about your project").fill("A connected inventory system.");
  await dialog.getByRole("button", { name: "Prepare my inquiry" }).click();
  await expect(dialog.getByLabel("Your name", { exact: true })).toBeFocused();
  await expect(dialog.getByRole("heading")).toHaveText("Tell us about your idea.");
  await dialog.getByLabel("Your name", { exact: true }).fill("Alex");
  await dialog.getByRole("button", { name: "Prepare my inquiry" }).click();
  await expect(dialog.getByRole("heading")).toBeFocused();
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => {
          throw new Error("Clipboard unavailable");
        },
      },
    });
  });
  await dialog.getByRole("button", { name: "Copy inquiry text" }).click();
  await expect(dialog.getByRole("status")).toContainText("Copy is unavailable.");
  await dialog.getByRole("button", { name: "Back to edit" }).click();
  await expect(dialog.getByLabel("Your name", { exact: true })).toBeFocused();
});
