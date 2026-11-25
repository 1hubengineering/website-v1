import { test, expect } from "@playwright/test";
import { sectors } from "../src/content/sectors";
import { families, aiOperations, solutionCount } from "../src/content/solutions";
import { founders, services } from "../src/content/site";

test("solutions: three groups, seven solutions; four services", () => {
  expect(families.map((family) => [family.tagline, family.color])).toEqual([
    ["Solutions for the factory floor", "blue"],
    ["Solutions from factory to buyer", "green"],
    ["Solutions for schools and building sites", "navy"],
  ]);
  expect(solutionCount).toBe(7);
  const ids = families.flatMap((family) => family.solutions.map((solution) => solution.id));
  expect(new Set(ids).size).toBe(ids.length);
  expect(services).toEqual([
    "Software Development",
    "Systems Engineering",
    "Process Automation",
    "AI-Driven Operations",
  ]);
});

test("eight sectors, each complete for the sector page template", () => {
  expect(sectors).toHaveLength(8);
  const slugs = sectors.map((sector) => sector.slug);
  expect(new Set(slugs).size).toBe(8);
  const solutionIds = new Set(
    families.flatMap((family) => family.solutions.map((solution) => solution.id)),
  );
  for (const sector of sectors) {
    expect(sector.slug, sector.name).toMatch(/^[a-z]+(-[a-z]+)*$/);
    expect(sector.headline.length, sector.name).toBeGreaterThan(0);
    // Intro is two sentences.
    expect(sector.intro.split(/(?<=\.)\s+/), sector.name).toHaveLength(2);
    expect(sector.solutions.length, sector.name).toBeGreaterThanOrEqual(3);
    for (const row of sector.solutions) {
      if (row.solutionId) expect(solutionIds.has(row.solutionId), row.name).toBe(true);
    }
    expect(sector.pilot.length, sector.name).toBeGreaterThan(0);
    expect(sector.cta.label.length, sector.name).toBeGreaterThan(0);
    expect(sector.images.length, sector.name).toBeGreaterThan(0);
    for (const image of sector.images) expect(image.alt.length, image.src).toBeGreaterThan(10);
    expect(sector.seo.title.length, sector.seo.title).toBeLessThan(60);
    expect(sector.seo.description.length, sector.seo.description).toBeLessThan(155);
  }
});

test("client-facing content avoids banned words and jargon", () => {
  const text = JSON.stringify({ sectors, families, aiOperations, founders, services });
  expect(text).not.toMatch(/consultanc/i);
  expect(text).not.toMatch(/\b(MBSE|SysML|API|ERP)\b/);
  // Partner organisations stay off the public site until confirmed.
  expect(text).not.toMatch(/Ethiopian Airlines|EAII|Shager/i);
});
