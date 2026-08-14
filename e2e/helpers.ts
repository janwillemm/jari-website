import { expect, type Page, type Route } from '@playwright/test';

/** Collect console errors that indicate a broken page (ignore known analytics noise). */
export function attachConsoleGuard(page: Page): { errors: string[] } {
  const errors: string[] = [];
  page.on('pageerror', (error) => {
    errors.push(error.message);
  });
  page.on('console', (msg) => {
    if (msg.type() !== 'error') return;
    const text = msg.text();
    if (/umami|analytics\.interactggz|Failed to load resource.*analytics/i.test(text)) {
      return;
    }
    errors.push(text);
  });
  return { errors };
}

/** Mock portal contact + newsletter APIs with redirects back to the site. */
export async function mockPortalApis(page: Page, origin: string): Promise<void> {
  const fulfillRedirect = async (route: Route, location: string) => {
    // HTML+JS redirect is more reliable for form POSTs than a bare 302 in tests.
    await route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: `<!DOCTYPE html><html><head><meta charset="utf-8"><script>location.replace(${JSON.stringify(location)})</script></head><body>OK</body></html>`,
    });
  };

  await page.route('**/api/contact', async (route) => {
    if (route.request().method() !== 'POST') {
      await route.continue();
      return;
    }
    await fulfillRedirect(route, `${origin}/bedankt/`);
  });

  await page.route('**/api/newsletter/subscribe', async (route) => {
    if (route.request().method() !== 'POST') {
      await route.continue();
      return;
    }
    await fulfillRedirect(route, `${origin}/bedankt-nieuwsbrief/`);
  });
}

/** Open mobile nav when the toggle is visible. */
export async function openMobileNavIfNeeded(page: Page): Promise<void> {
  const toggle = page.locator('.nav-toggle');
  if (await toggle.isVisible()) {
    const expanded = await toggle.getAttribute('aria-expanded');
    if (expanded !== 'true') {
      await toggle.click();
      await expect(page.locator('#site-nav')).toHaveClass(/is-open/);
    }
  }
}

export async function expectPageHealthy(page: Page, path: string): Promise<void> {
  const response = await page.goto(path, { waitUntil: 'domcontentloaded' });
  expect(response, `expected a response for ${path}`).not.toBeNull();
  expect(response!.status(), `${path} should return 2xx`).toBeLessThan(400);
  await expect(page.locator('header.site-header')).toBeVisible();
  await expect(page.locator('footer.site-footer')).toBeVisible();
  await expect(page.locator('main#main-content')).toBeVisible();
}
