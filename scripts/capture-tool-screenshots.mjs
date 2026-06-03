import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../assets/images/tools');
const viewport = { width: 1920, height: 1080 };

const driehoekData = {
  filename: 'voorbeeld-case',
  basisgegevens:
    'Jongen, 9 jaar. Verwijzing vanuit school wegens zorgen over gedrag en concentratie.',
  topSections: {
    hypotheses: [
      { id: 'h1', text: 'Spanning thuis beïnvloedt schoolprestaties' },
      { id: 'h2', text: 'Lage frustratietolerantie past bij ontwikkelingsleeftijd' },
    ],
    ideeen: [{ id: 'i1', text: 'Systeemgesprek met ouders plannen' }],
    vragen: [{ id: 'v1', text: 'Hoe is de omgang tussen broer en zus?' }],
  },
  items: [
    { id: '1', text: 'Veel ruzie thuis', factor: 'gezin', x: 260, y: 200 },
    { id: '2', text: 'Moeite met structuur', factor: 'gezin', x: 280, y: 230 },
    { id: '3', text: 'Snel overprikkeld', factor: 'kind', x: 200, y: 310 },
    { id: '4', text: 'Concentratieproblemen', factor: 'kind', x: 170, y: 330 },
    { id: '5', text: 'Pestervaringen op school', factor: 'omgeving', x: 130, y: 190 },
    { id: '6', text: 'Wisselende woonsituatie', factor: 'omgeving', x: 110, y: 220 },
  ],
};

async function clipFromSelectors(page, selectors) {
  return page.evaluate((ids) => {
    const rects = ids
      .map((id) => document.querySelector(id)?.getBoundingClientRect())
      .filter(Boolean);
    if (!rects.length) return null;

    const top = Math.min(...rects.map((r) => r.top)) + window.scrollY;
    const left = Math.min(...rects.map((r) => r.left));
    const right = Math.max(...rects.map((r) => r.right));
    const bottom = Math.max(...rects.map((r) => r.bottom)) + window.scrollY;

    return {
      x: Math.max(0, Math.round(left - 24)),
      y: Math.max(0, Math.round(top - 12)),
      width: Math.round(right - left + 48),
      height: Math.round(bottom - top + 24),
    };
  }, selectors);
}

async function captureDriehoek(page) {
  await page.goto('https://playground.creatievemaan.nl/tools/driehoek/', {
    waitUntil: 'networkidle',
  });

  await page.evaluate((data) => {
    localStorage.setItem('driehoek-data', JSON.stringify(data));
  }, driehoekData);

  await page.reload({ waitUntil: 'networkidle' });
  await page.locator('#welcome-btn-autosaved').click({ timeout: 5000 }).catch(() => {});

  await page.evaluate(() => {
    document.querySelector('.back')?.remove();
    document.getElementById('welcome-modal-overlay')?.remove();
    document.getElementById('naam-modal-overlay')?.remove();
    document.getElementById('new-confirm-modal-overlay')?.remove();
    document.querySelector('.credits')?.remove();
    const panel = document.getElementById('input-panel');
    if (panel) panel.style.display = 'none';
    const toolbar = document.getElementById('driehoek-toolbar');
    if (toolbar) toolbar.hidden = false;
  });

  await page.waitForTimeout(1200);

  const clip = await clipFromSelectors(page, [
    '.header',
    '#content-area',
    '#hypotheses-below',
  ]);

  if (!clip) throw new Error('Could not determine Driehoek clip region');

  await page.screenshot({
    path: path.join(outDir, 'context-driehoek.png'),
    clip,
  });
}

async function captureEmdr(page) {
  await page.goto('https://playground.creatievemaan.nl/tools/emdr/', {
    waitUntil: 'networkidle',
  });

  await page.evaluate(() => {
    document.querySelector('.back')?.remove();
    document.querySelector('.disclaimer-banner')?.remove();
    document.getElementById('info-panel')?.remove();
    document.getElementById('page-header')?.remove();
    document.querySelector('.credits')?.remove();
  });

  await page.locator('#btn-play').click();
  await page.waitForTimeout(1500);

  const clip = await clipFromSelectors(page, ['.layout']);
  if (!clip) throw new Error('Could not determine EMDR clip region');

  await page.screenshot({
    path: path.join(outDir, 'emdr-lichtbol.png'),
    clip,
  });
}

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport });

try {
  await captureDriehoek(page);
  await captureEmdr(page);
  console.log('Screenshots saved to', outDir);
} finally {
  await browser.close();
}
