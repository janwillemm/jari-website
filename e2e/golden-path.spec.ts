import { test, expect } from '@playwright/test';
import {
  attachConsoleGuard,
  mockPortalApis,
  openMobileNavIfNeeded,
} from './helpers';
import { NAV_ITEMS, TOOL_SLUGS } from './pages';

/**
 * Golden path: één doorlopende reis door alle kernfunctionaliteit
 * van de InteractGGZ-website (navigatie, tools, lightbox, tabs,
 * formulieren, nieuwsbrief, privacy).
 */
test.describe('Golden path', () => {
  test('bezoeker doorloopt alle kernflows', async ({ page, baseURL }) => {
    test.setTimeout(120_000);

    const origin = baseURL ?? 'http://127.0.0.1:4000';
    const { errors } = attachConsoleGuard(page);
    await mockPortalApis(page, origin);

    // 1. Home: hero, tool-slider, prijzen, nieuwsbrief-sectie
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      /Innovatiestudio voor de jeugd-ggz/i
    );
    await expect(page.locator('.tool-slider')).toBeVisible();
    await expect(page.locator('#prijzen')).toBeVisible();

    const nextSlide = page.locator('[data-slider-next]');
    await nextSlide.click();
    await expect(page.locator('.tool-slider__slide.is-active')).toBeVisible();
    await expect(
      page.locator('.tool-slider__slide.is-active .tool-slider__title')
    ).not.toHaveText(/EMDR Toolkit/);

    await page.getByRole('link', { name: /Heb jij een gaaf idee/i }).first().click();
    await expect(page).toHaveURL(/\/samen-ontwikkelen\/?$/);

    // 2. Header-nav: alle primaire pagina's
    for (const item of NAV_ITEMS) {
      await openMobileNavIfNeeded(page);
      await page.locator('#site-nav').getByRole('link', { name: item.label, exact: true }).click();
      await expect(page).toHaveURL(
        item.path === '/' ? /\/$/ : new RegExp(`${item.path.replace(/\//g, '\\/')}?$`)
      );
      await expect(page.locator('main#main-content')).toBeVisible();
    }

    // 3. Tools-overzicht → elke toolpagina + lightbox + portal-CTA's
    await openMobileNavIfNeeded(page);
    await page.locator('#site-nav').getByRole('link', { name: 'Tools', exact: true }).click();
    await expect(page).toHaveURL(/\/tools\/?$/);
    await expect(page.locator('.tool-card-grid .tool-card')).toHaveCount(TOOL_SLUGS.length);

    for (const slug of TOOL_SLUGS) {
      await page.goto('/tools/');
      await page.locator(`.tool-card[href="/tools/${slug}/"]`).click();
      await expect(page).toHaveURL(new RegExp(`/tools/${slug}/?$`));

      await expect(page.getByRole('link', { name: /Probeer gratis uit/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /Koop/i })).toBeVisible();

      const lightboxTrigger = page.locator('[data-lightbox-src]').first();
      await expect(lightboxTrigger).toBeVisible();
      await lightboxTrigger.click();
      const dialog = page.locator('#image-lightbox');
      await expect(dialog).toBeVisible();
      await expect(dialog.locator('.image-lightbox__img')).toHaveAttribute('src', /.+/);
      await dialog.locator('.image-lightbox__close').click();
      await expect(dialog).toBeHidden();
    }

    // 4. Ontdekkersjaar CTA naar portal-registratie
    await page.goto('/ontdekker/');
    const ontdekkerCta = page.getByRole('link', { name: /Word ontdekker/i });
    await expect(ontdekkerCta).toBeVisible();
    await expect(ontdekkerCta).toHaveAttribute('href', /portal\.interactggz\.nl\/register/);

    // 5. Samen ontwikkelen: idee-formulier (gemockte API → bedankt)
    await page.goto('/samen-ontwikkelen/');
    await page.locator('#contact-idee').scrollIntoViewIfNeeded();
    await page.locator('#idea-name').fill('Test Gebruiker');
    await page.locator('#idea-email').fill('test@example.com');
    await page.locator('#idea-phone').fill('0612345678');
    await page.locator('#idea-description').fill('Een interactief spel over emotieregulatie.');
    await page.locator('#idea-what').fill('Een korte browsergame voor de behandelkamer.');
    await page.locator('#idea-audience').fill('Jeugd 10-14 jaar');
    await page.locator('#idea-problem').fill('Tijdens psycho-educatie.');
    await page.locator('#idea-progress').fill('Idee op papier.');
    await page.locator('#contact-idee button[type="submit"]').click();
    await expect(page).toHaveURL(/\/bedankt\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Bedankt/i);

    // 6. Over ons: waarden-tabs + contactformulier
    await page.goto('/over-ons/');
    const tabs = page.locator('[data-values-tabs] [role="tab"]');
    await expect(tabs).toHaveCount(4);
    await tabs.nth(2).click();
    await expect(tabs.nth(2)).toHaveAttribute('aria-selected', 'true');
    const panelId = await tabs.nth(2).getAttribute('aria-controls');
    expect(panelId).toBeTruthy();
    await expect(page.locator(`#${panelId}`)).toBeVisible();

    await page.locator('.contact-form').first().scrollIntoViewIfNeeded();
    await page.locator('input[name="name"]').first().fill('Contact Test');
    await page.locator('input[name="email"]').first().fill('contact@example.com');
    await page.locator('textarea[name="message"]').first().fill('Vraag over jullie tools.');
    await page.locator('.contact-form button[type="submit"]').first().click();
    await expect(page).toHaveURL(/\/bedankt\/?$/);

    // 7. Footer-nieuwsbrief + privacy
    await page.goto('/');
    const footerForm = page.locator('.praktijkbrief-signup--footer form.contact-form');
    await footerForm.scrollIntoViewIfNeeded();
    await footerForm.locator('input[name="email"]').fill('nieuwsbrief@example.com');
    await footerForm.locator('input[name="name"]').fill('Nieuwsbrief Test');
    await footerForm.locator('input[name="consent"]').check();
    await footerForm.locator('button[type="submit"]').click();
    await expect(page).toHaveURL(/\/bedankt-nieuwsbrief\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Bedankt/i);

    await page.goto('/bevestigd-nieuwsbrief/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/bevestigd/i);

    await page.goto('/');
    await page.locator('footer a[href="/privacy/"]').click();
    await expect(page).toHaveURL(/\/privacy\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Privacybeleid/i);

    // 8. Foutpagina-varianten (productflow bij mislukte submits)
    await page.goto('/fout/?reden=invalid');
    await expect(page.locator('#fout-reden')).toContainText(/velden/i);

    expect(errors, 'geen console/page errors tijdens golden path').toEqual([]);
  });

  test('mobiel menu opent en navigeert', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile-chrome', 'Alleen relevant op mobiel viewport');

    const { errors } = attachConsoleGuard(page);
    await page.goto('/');

    const toggle = page.locator('.nav-toggle');
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#site-nav')).toHaveClass(/is-open/);

    await page.locator('#site-nav').getByRole('link', { name: 'Over ons', exact: true }).click();
    await expect(page).toHaveURL(/\/over-ons\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Over ons/i);

    expect(errors).toEqual([]);
  });
});
