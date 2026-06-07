import { chromium } from 'playwright';
import { mkdir, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../assets/videos/tools');
const tmpDir = path.resolve(__dirname, '../.tmp/tool-videos');

const TOOL_URL = 'http://localhost:8082/';
const OUTPUT_SIZE = { width: 960, height: 540 };

const FACTORS = [
  { text: 'Recente scheiding ouders' },
  { text: 'Concentratieproblemen op school' },
  { text: 'Pestincident op het schoolplein' },
  { text: 'Weinig structuur thuis' },
  { text: 'Lage frustratietolerantie' },
  { text: 'Grote klas, veel prikkels' },
];

async function preparePage(page) {
  await page.addInitScript(() => {
    localStorage.setItem('jari-tool-context-driehoek-onboarded', '1');
  });
}

async function frameContentArea(page) {
  await page.evaluate(() => {
    document.querySelector('.jari-tool-header')?.remove();
    document.querySelector('.jari-dev-access-pill')?.remove();
    document.querySelector('.jari-onboarding-backdrop')?.remove();
    document.querySelector('.cd-debug-panel')?.remove();
    document.querySelector('.cd-debug-svg')?.remove();
    document.querySelector('.cd-triangle-container')?.classList.remove('cd-debug-mode');

    const panel = document.querySelector('.cd-input-panel');
    if (panel) {
      panel.style.position = 'fixed';
      panel.style.left = '-9999px';
      panel.style.top = '0';
      panel.style.width = '480px';
    }

    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
    document.querySelector('.jari-tool-layout')?.style.setProperty('min-height', '0');
    document.querySelector('.jari-tool-main')?.style.setProperty('padding', '0');
    document.querySelector('.jari-tool-main')?.style.setProperty('max-width', 'none');

    const workspace = document.querySelector('.cd-workspace');
    if (workspace) workspace.style.gap = '0';

    const content = document.querySelector('.cd-content-area');
    if (content) {
      content.style.margin = '0';
      content.style.minHeight = '100vh';
    }
  });
}

async function addFactor(page, index, text) {
  const input = page.locator('.cd-factor-input .cd-add-row input').nth(index % 3);
  await input.fill(text, { force: true });
  await input.press('Enter', { force: true });
}

async function addHypothesis(page, text) {
  await page.locator('#cd-input-hypotheses').evaluate((el) => {
    el.open = true;
  });
  const input = page.locator('#cd-input-hypotheses .cd-add-row input').first();
  await input.fill(text, { force: true });
  await input.press('Enter', { force: true });
}

function convertVideo(rawPath, outputPath) {
  const result = spawnSync(
    'ffmpeg',
    [
      '-y',
      '-ss',
      '1.2',
      '-i',
      rawPath,
      '-t',
      '11',
      '-vf',
      `scale=${OUTPUT_SIZE.width}:${OUTPUT_SIZE.height}:force_original_aspect_ratio=increase,crop=${OUTPUT_SIZE.width}:${OUTPUT_SIZE.height}`,
      '-c:v',
      'libx264',
      '-pix_fmt',
      'yuv420p',
      '-movflags',
      '+faststart',
      '-an',
      outputPath,
    ],
    { stdio: 'inherit' }
  );

  if (result.status !== 0) {
    throw new Error(`ffmpeg failed for ${outputPath}`);
  }
}

async function captureDriehoekVideo() {
  await mkdir(outDir, { recursive: true });
  await rm(tmpDir, { recursive: true, force: true });
  await mkdir(tmpDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    recordVideo: {
      dir: tmpDir,
      size: OUTPUT_SIZE,
    },
    viewport: OUTPUT_SIZE,
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  try {
    await preparePage(page);
    await page.goto(TOOL_URL, { waitUntil: 'networkidle' });
    await frameContentArea(page);
    await page.locator('.cd-content-area').first().waitFor({ state: 'visible' });
    await page.waitForTimeout(250);

    await page.locator('#basisgegevens').fill(
      'Jongen, 9 jaar. School meldt concentratieproblemen.'
    );
    await page.waitForTimeout(350);

    for (const [index, factor] of FACTORS.entries()) {
      await addFactor(page, index, factor.text);
      await page.waitForTimeout(450);
    }

    await addHypothesis(page, 'Spanning thuis beïnvloedt schoolprestaties');
    await page.waitForTimeout(500);
  } finally {
    const video = page.video();
    await context.close();
    await browser.close();

    if (!video) throw new Error('No video recorded');

    const rawPath = await video.path();
    const outputPath = path.join(outDir, 'context-driehoek.mp4');
    convertVideo(rawPath, outputPath);
    console.log('Video saved to', outputPath);
  }
}

await captureDriehoekVideo();
