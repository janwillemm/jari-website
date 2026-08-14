import { defineConfig, devices } from '@playwright/test';

const port = Number(process.env.E2E_PORT || 4000);
const baseURL = process.env.E2E_BASE_URL || `http://127.0.0.1:${port}`;

/**
 * Playwright e2e suite for the InteractGGZ Jekyll site.
 * Starts `jekyll serve` automatically unless E2E_BASE_URL points elsewhere.
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    locale: 'nl-NL',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
    },
  ],
  webServer: process.env.E2E_BASE_URL
    ? undefined
    : {
        command: `bundle exec jekyll serve --host 127.0.0.1 --port ${port} --livereload false`,
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});
