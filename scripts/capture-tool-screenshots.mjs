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
  bloom: 'http://localhost:8085/',
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
    document.querySelector('.bloom-debug-panel')?.remove();
  });
}

async function screenshotElement(page, selector, filename) {
  const element = page.locator(selector).first();
  await element.waitFor({ state: 'visible', timeout: 15000 });
  await hideDevChrome(page);
  await page.evaluate(() => {
    document.getElementById('demo-cursor')?.remove();
    document.querySelector('.stage-toolbar')?.classList.remove('visible');
  });
  await page.waitForTimeout(300);
  await element.screenshot({
    path: path.join(outDir, filename),
    animations: 'disabled',
    caret: 'hide',
  });
}

async function captureDriehoek(page) {
  await prepareToolPage(page, 'context-driehoek');
  await page.goto(TOOLS['context-driehoek'], { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    for (const section of document.querySelectorAll('.cd-collapse--sidebar')) {
      section.open = true;
    }
  });
  await screenshotElement(page, '.cd-content-area', 'context-driehoek.png');
}

async function captureEmdr(page) {
  await prepareToolPage(page, 'emdr', { paid: true });
  await page.goto(TOOLS.emdr, { waitUntil: 'networkidle' });
  await page.locator('#emdr-tab-uitvoeren-kinderen').click();
  await page.locator('.stimulus-option[data-stimulus="vlinder"]').click();
  await page.locator('#btn-play').click();
  await page.locator('#lightbulb.stimulus-vlinder').waitFor({ state: 'visible', timeout: 10000 });
  await page.locator('.controls').waitFor({ state: 'visible', timeout: 10000 });
  await page.waitForTimeout(600);
  await page.evaluate(() => {
    document.querySelector('.kinderen-mode-notice')?.remove();
    document.body.classList.remove('fullscreen-mode', 'controls-drawer-open');
  });
  await screenshotElement(page, '.emdr-host .layout', 'emdr-lichtbol.png');
}

async function captureActAvontuur(page) {
  await prepareToolPage(page, 'act-avontuur');
  await page.goto(TOOLS['act-avontuur'], { waitUntil: 'networkidle' });

  await page
    .locator('.act-adventure-card')
    .filter({ hasText: 'Ruimtereis' })
    .click();
  await page.getByRole('button', { name: 'Start avontuur' }).click();
  await page.locator('.act-stage').waitFor({ state: 'visible', timeout: 10000 });
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.id = 'screenshot-cleanup';
    style.textContent = `
      .act-thoughts-layer,
      .act-cockpit__alert,
      .act-challenge-console { display: none !important; }
      .act-cockpit__scene { visibility: hidden !important; }
    `;
    document.head.appendChild(style);
  });
  await page.waitForTimeout(400);

  await screenshotElement(page, '.act-stage', 'act-avontuur.png');
}

async function captureBloom(page) {
  await prepareToolPage(page, 'bloom');
  await page.goto(TOOLS.bloom, { waitUntil: 'networkidle' });

  await page.keyboard.press('Control+d');
  await page.getByRole('button', { name: 'State 3' }).click();
  await page.waitForTimeout(600);

  await screenshotElement(page, '.bloom-results-garden__scene', 'bloom.png');
}

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport, deviceScaleFactor: 2 });

try {
  const only = process.argv.slice(2);
  const captures = [
    ['driehoek', captureDriehoek],
    ['emdr', captureEmdr],
    ['act', captureActAvontuur],
    ['bloom', captureBloom],
  ];
  for (const [name, fn] of captures) {
    if (only.length && !only.includes(name)) continue;
    await fn(page);
  }
  console.log('Screenshots saved to', outDir);
} finally {
  await browser.close();
}
