import { test, expect } from '@playwright/test';
import { attachConsoleGuard, expectPageHealthy } from './helpers';
import { NAV_ITEMS, PREVIEW_PAGES, PUBLIC_PAGES, UTILITY_PAGES } from './pages';

test.describe('Alle pagina\'s laden', () => {
  for (const pageDef of PUBLIC_PAGES) {
    test(`${pageDef.path} laadt en toont de juiste heading`, async ({ page }) => {
      const { errors } = attachConsoleGuard(page);
      await expectPageHealthy(page, pageDef.path);
      await expect(page).toHaveTitle(pageDef.title);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(pageDef.heading);
      expect(errors, `console/page errors on ${pageDef.path}`).toEqual([]);
    });
  }

  for (const pageDef of UTILITY_PAGES) {
    test(`${pageDef.path} laadt`, async ({ page }) => {
      const { errors } = attachConsoleGuard(page);
      await expectPageHealthy(page, pageDef.path);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(pageDef.heading);
      expect(errors, `console/page errors on ${pageDef.path}`).toEqual([]);
    });
  }

  for (const path of PREVIEW_PAGES) {
    test(`preview ${path} laadt zonder serverfout`, async ({ page }) => {
      const { errors } = attachConsoleGuard(page);
      await expectPageHealthy(page, path);
      expect(errors, `console/page errors on ${path}`).toEqual([]);
    });
  }
});

test.describe('Navigatie & assets', () => {
  test('hoofdnavigatie linkt naar alle header-pagina\'s', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('#site-nav');

    for (const item of NAV_ITEMS) {
      await expect(nav.getByRole('link', { name: item.label, exact: true })).toHaveAttribute(
        'href',
        item.path === '/' ? '/' : item.path
      );
    }
  });

  test('foutpagina toont rate-limit reden via querystring', async ({ page }) => {
    await page.goto('/fout/?reden=rate');
    await expect(page.locator('#fout-reden')).toContainText(/te vaak/i);
  });

  test('CSS stylesheet is bereikbaar', async ({ page, request }) => {
    await page.goto('/');
    const cssHref = await page.locator('link[rel="stylesheet"]').first().getAttribute('href');
    expect(cssHref).toBeTruthy();
    const css = await request.get(cssHref!);
    expect(css.ok()).toBeTruthy();
  });
});
