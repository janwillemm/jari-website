import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../assets/images/tools');

const TOOLS = {
  'context-driehoek': 'http://localhost:8082/',
  emdr: 'http://localhost:8083/',
  'act-avontuur': 'http://localhost:8084/',
};

const viewport = { width: 1440, height: 900 };

async function prepareToolPage(page, slug, { paid = false } = {}) {
  await page.addInitScript(
    ({ toolSlug, devPaid }) => {
      localStorage.setItem(`jari-tool-${toolSlug}-onboarded`, '1');
      if (devPaid) localStorage.setItem('jari:dev-access-override', 'paid');
    },
    { toolSlug: slug, devPaid: paid }
  );
}

async function hideDevChrome(page) {
  await page.evaluate(() => {
    document.querySelector('.jari-dev-access-pill')?.remove();
    document.querySelector('.jari-onboarding-backdrop')?.remove();
    document.querySelector('.act-game__quit')?.remove();
    document.querySelector('.act-debug-panel')?.remove();
    document.querySelector('.cd-debug-panel')?.remove();
    document.querySelector('.cd-debug-svg')?.remove();
    document.querySelector('.cd-triangle-container')?.classList.remove('cd-debug-mode');
  });
}

async function screenshotElement(page, selector, filename) {
  const element = page.locator(selector).first();
  await element.waitFor({ state: 'visible', timeout: 15000 });
  await hideDevChrome(page);
  await page.waitForTimeout(300);
  await element.screenshot({
    path: path.join(outDir, filename),
    animations: 'disabled',
  });
}

async function captureDriehoek(page) {
  await prepareToolPage(page, 'context-driehoek');
  await page.goto(TOOLS['context-driehoek'], { waitUntil: 'networkidle' });
  await page.keyboard.press('Control+d');
  await page.waitForTimeout(800);
  await page.evaluate(() => {
    for (const section of document.querySelectorAll('.cd-collapse--sidebar')) {
      section.open = true;
    }
  });
  await screenshotElement(page, '.cd-content-area', 'context-driehoek.png');
}

async function captureEmdr(page) {
  await prepareToolPage(page, 'emdr');
  await page.goto(TOOLS.emdr, { waitUntil: 'networkidle' });
  await page.locator('#btn-play').click();
  await page.waitForTimeout(1200);
  await screenshotElement(page, '.layout', 'emdr-lichtbol.png');
}

async function captureActAvontuur(page) {
  await prepareToolPage(page, 'act-avontuur');
  await page.goto(TOOLS['act-avontuur'], { waitUntil: 'networkidle' });

  await page
    .locator('.act-adventure-card')
    .filter({ hasText: 'Ruimtereis' })
    .click();
  await page.getByRole('button', { name: 'Start avontuur' }).click();
  await page.waitForTimeout(500);

  await page.keyboard.press('Control+d');
  await page.locator('.act-debug-panel__round-btn').nth(2).click();
  await page.waitForTimeout(600);

  await screenshotElement(page, '.act-stage', 'act-avontuur.png');
}

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport, deviceScaleFactor: 2 });

try {
  await captureDriehoek(page);
  await captureEmdr(page);
  await captureActAvontuur(page);
  console.log('Screenshots saved to', outDir);
} finally {
  await browser.close();
}
