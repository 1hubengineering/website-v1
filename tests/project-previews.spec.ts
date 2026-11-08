import { test, expect } from "@playwright/test";

const featuredProjects = [
  {
    name: "Linux Setup",
    action: "View repository",
    url: "https://github.com/1hubengineering/linux-setup",
    resource: "Terminal previews",
    resourceUrl: "https://github.com/1hubengineering/linux-setup/blob/main/docs/previews.md",
    previews: ["Quick-term", "Custom themes", "iTerm2", "Command picker", "AI skill manager"],
  },
  {
    name: "Afaan Oromo Bible",
    action: "Explore the reader",
    url: "https://bible.1hubengineering.com/",
    resource: "Beta downloads",
    resourceUrl: "https://bible.1hubengineering.com/#downloads",
    previews: ["Classic reader", "Compare editions", "Study notes", "Midnight theme", "Bookmarks"],
  },
];

for (const viewport of [
  { width: 375, height: 900 },
  { width: 900, height: 375 },
  { width: 1440, height: 900 },
]) {
  test(`published graphics and project links work at ${viewport.width}×${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("./#work");
    const filters = page.getByRole("group", { name: "Filter projects" });
    await expect(filters.getByRole("button", { name: "Products" })).toContainText("04");
    await expect(filters.getByRole("button", { name: "Open source" })).toContainText("02");
    await filters.getByRole("button", { name: "Products" }).click();
    await expect(page.locator(".project-card")).toHaveCount(4);
    await expect(page.getByRole("button", { name: "Explore Afaan Oromo Bible", exact: true })).toBeVisible();
    await filters.getByRole("button", { name: "All work" }).click();

    for (const theme of ["dark", "light"]) {
      if (theme === "light") {
        await page.getByRole("button", { name: "Switch to light theme" }).click();
      }
      for (const project of featuredProjects) {
        const trigger = page.getByRole("button", { name: `Explore ${project.name}`, exact: true });
        const card = page.locator(".project-card").filter({ has: trigger });
        await card.scrollIntoViewIfNeeded();
        await expect.poll(() => card.locator("img").evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
        if (project.name === "Afaan Oromo Bible") {
          await expect(card.locator(".project-status")).toHaveText("Public beta");
        }
        await trigger.click();
        const dialog = page.getByRole("dialog");
        await expect(dialog.getByRole("heading")).toHaveText(project.name);
        await expect(dialog.getByRole("link", { name: project.action, exact: true })).toHaveAttribute("href", project.url);
        await expect(dialog.getByRole("link", { name: project.resource, exact: true })).toHaveAttribute("href", project.resourceUrl);
        const picker = dialog.getByRole("group", { name: "Choose a project preview" });
        for (const label of project.previews) {
          const choice = picker.getByRole("button", { name: label, exact: true });
          await choice.focus();
          await page.keyboard.press("Space");
          await expect(choice).toHaveAttribute("aria-pressed", "true");
          await expect(picker.locator('[aria-pressed="true"]')).toHaveCount(1);
          const image = dialog.locator(".project-art-preview img");
          await image.scrollIntoViewIfNeeded();
          await expect.poll(() => image.evaluate((img: HTMLImageElement) =>
            img.complete && img.naturalWidth === Number(img.getAttribute("width")) &&
            img.naturalHeight === Number(img.getAttribute("height")),
          )).toBe(true);
          await expect(image).toHaveAttribute("alt", /\S+/);
          await expect(dialog.locator("figcaption")).toHaveText(label);
          await expect(dialog.getByRole("link", { name: "Open full-size image" })).toHaveAttribute("href", (await image.getAttribute("src"))!);
          expect(await dialog.evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);
        }
        await dialog.screenshot({ path: `test-results/${project.name.replaceAll(" ", "-")}-${theme}-${viewport.width}.png` });
        await page.keyboard.press("Escape");
        await expect(trigger).toBeFocused();
        await trigger.click();
        await expect(dialog.getByRole("button", { name: project.previews[0], exact: true })).toHaveAttribute("aria-pressed", "true");
        await page.keyboard.press("Escape");
      }
    }
  });
}
