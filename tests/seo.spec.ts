import { test, expect } from "@playwright/test";
import { notFoundMeta, pages } from "../src/content/pages";

test("page titles and descriptions stay within search-result limits", () => {
  for (const meta of [...pages, notFoundMeta]) {
    expect(meta.title.length, meta.title).toBeLessThan(60);
    // The browser tab shows a short name: at most three words.
    expect(meta.tab.split(" ").length, meta.tab).toBeLessThanOrEqual(3);
    expect(meta.description.length, meta.description).toBeLessThan(155);
  }
  const paths = pages.map((meta) => meta.path);
  expect(new Set(paths).size).toBe(paths.length);
});

for (const meta of pages) {
  test(`${meta.path} is pre-rendered with its own head and hydrates cleanly`, async ({
    page,
    request,
  }) => {
    const relative = "." + meta.path.replace(/([^/])$/, "$1/");

    // The raw HTML must already hold the content and the page-specific head.
    const html = await (await request.get(relative)).text();
    expect(html).toContain(`<title>${meta.tab}</title>`);
    expect(html).toMatch(/<div id="root"><.+<\/main>/s);

    const problems: string[] = [];
    page.on("pageerror", (error) => problems.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") problems.push(message.text());
    });
    await page.goto(relative);
    await expect(page).toHaveTitle(meta.tab);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      meta.description,
    );
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(problems).toEqual([]);
  });
}

test("404 page is not indexed and links back home", async ({ page }) => {
  await page.goto("./404.html");
  await expect(page).toHaveTitle(notFoundMeta.tab);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");
  await page.getByRole("link", { name: "Go to the home page" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Ideas.Engineered.");
});
