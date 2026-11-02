import { defineConfig } from "@playwright/test";
const basePath = (process.env.BASE_PATH || "/").replace(/\/+$/, "") + "/";
const previewUrl = "http://127.0.0.1:4173" + basePath;
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  use: { baseURL: previewUrl, headless: true, reducedMotion: "reduce" },
  webServer: {
    command: "npm run build && npm run preview -- --port 4173 --strictPort",
    url: previewUrl,
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
