import { expect, type Page, type Route } from '@playwright/test';

/** Collect console/page errors that indicate a broken page. */
export function attachConsoleGuard(page: Page): { errors: string[] } {
  const errors: string[] = [];

  const isIgnorableConsole = (text: string) =>
    /umami|analytics\.interactggz|fonts\.googleapis|fonts\.gstatic|localhost:3100/i.test(text) ||
    // Chromium logs this without a URL; same-origin failures are caught via `response` below.
    /^Failed to load resource: the server responded with a status of \d+/i.test(text);

  page.on('pageerror', (error) => {
    errors.push(error.message);
  });

  page.on('console', (msg) => {
    if (msg.type() !== 'error') return;
    const text = msg.text();
    if (isIgnorableConsole(text)) return;
    errors.push(text);
  });

  page.on('response', (response) => {
    const status = response.status();
    if (status < 400) return;
    const url = response.url();
    if (/umami|analytics\.interactggz|fonts\.googleapis|fonts\.gstatic|favicon\.ico|localhost:3100/i.test(url)) {
      return;
    }
    // Only flag same-origin asset/document failures.
    if (!url.startsWith('http://127.0.0.1') && !url.startsWith('http://localhost')) return;
    errors.push(`${status} ${url}`);
  });

  return { errors };
}

/** Mock portal contact + newsletter APIs with redirects back to the site. */
export async function mockPortalApis(page: Page, origin: string): Promise<void> {
  const fulfillRedirect = async (route: Route, location: string) => {
    // Serve the redirect document under a base href on the site origin so the
    // browser does not request favicons/assets from the portal mock host.
    await route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: `<!DOCTYPE html><html><head><meta charset="utf-8"><base href="${origin}/"><script>location.replace(${JSON.stringify(location)})</script></head><body>OK</body></html>`,
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
  if (!(await toggle.isVisible())) return;

  const expanded = await toggle.getAttribute('aria-expanded');
  if (expanded === 'true') return;

  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#site-nav')).toHaveClass(/is-open/);
  // Wait until a primary nav link is actually interactable.
  await expect(page.locator('#site-nav').getByRole('link', { name: 'Home', exact: true })).toBeVisible();
}

export async function expectPageHealthy(page: Page, path: string): Promise<void> {
  const response = await page.goto(path, { waitUntil: 'domcontentloaded' });
  expect(response, `expected a response for ${path}`).not.toBeNull();
  expect(response!.status(), `${path} should return 2xx`).toBeLessThan(400);
  await expect(page.locator('header.site-header')).toBeVisible();
  await expect(page.locator('footer.site-footer')).toBeVisible();
  await expect(page.locator('main#main-content')).toBeVisible();
}
