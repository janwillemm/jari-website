import { chromium } from 'playwright';
import { mkdir, readFile } from 'node:fs/promises';
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
const FRAME_16_9 = { width: 1280, height: 720 };

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

async function openSidebarSections(page) {
  await page.evaluate(() => {
    for (const section of document.querySelectorAll('.cd-collapse--sidebar')) {
      section.open = true;
    }
  });
}

/** Fit triangle + sidebar into a 16:9 frame, matching website browser-frame crop. */
async function frameDriehoek16x9(page) {
  await page.setViewportSize(FRAME_16_9);
  await hideDevChrome(page);
  await page.evaluate(() => {
    document.getElementById('demo-cursor')?.remove();
    document.querySelector('.stage-toolbar')?.classList.remove('visible');
    document.querySelector('.jari-tool-header')?.remove();
    document.querySelector('.jari-tool-footer')?.remove();
    document.querySelector('.cd-input-panel')?.remove();
    document.querySelector('.cd-drag-hint')?.remove();

    let shotStyle = document.getElementById('cd-screenshot-style');
    if (!shotStyle) {
      shotStyle = document.createElement('style');
      shotStyle.id = 'cd-screenshot-style';
      document.head.appendChild(shotStyle);
    }
    shotStyle.textContent = `
      .cd-sidebar ul { font-size: 0.8rem; line-height: 1.35; }
      .cd-sidebar ul li { padding: 0.2rem 0; }
      .cd-collapse__summary { min-height: 2rem; padding: 0.35rem 0.5rem; }
    `;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';

    const layout = document.querySelector('.jari-tool-layout');
    if (layout) {
      layout.style.minHeight = '100vh';
      layout.style.height = '100vh';
    }

    const main = document.querySelector('.jari-tool-main');
    if (main) {
      main.style.maxWidth = 'none';
      main.style.margin = '0';
      main.style.padding = '0.85rem 1rem';
      main.style.height = '100vh';
      main.style.boxSizing = 'border-box';
    }

    const workspace = document.querySelector('.cd-workspace');
    if (workspace) {
      workspace.style.gap = '0';
      workspace.style.height = '100%';
    }

    const content = document.querySelector('.cd-content-area');
    if (content) {
      content.style.height = '100%';
      content.style.margin = '0';
      content.style.alignItems = 'stretch';
    }

    const left = document.querySelector('.cd-content-left');
    if (left) {
      left.style.flex = '0 0 auto';
      left.style.height = '100%';
      left.style.display = 'flex';
      left.style.flexDirection = 'column';
      left.style.minWidth = '0';
    }

    const wrap = document.querySelector('.cd-triangle-wrap');
    if (wrap) {
      wrap.style.flex = '1';
      wrap.style.minHeight = '0';
      wrap.style.height = '100%';
    }

    const triangle = document.querySelector('.cd-triangle-container');
    if (triangle) {
      triangle.style.width = 'auto';
      triangle.style.height = '100%';
      triangle.style.maxHeight = '100%';
      triangle.style.minWidth = '0';
      triangle.style.aspectRatio = '1';
    }

    const sidebar = document.querySelector('.cd-sidebar');
    if (sidebar) {
      sidebar.style.flex = '1 1 0';
      sidebar.style.minWidth = '220px';
      sidebar.style.maxHeight = '100%';
      sidebar.style.overflow = 'auto';
      sidebar.style.alignSelf = 'stretch';
      sidebar.style.position = 'static';
    }
  });
}

async function screenshotDriehoekFrame(page, filename) {
  await frameDriehoek16x9(page);
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(outDir, filename),
    animations: 'disabled',
    caret: 'hide',
    scale: 'css',
  });
}

async function captureDriehoek(page) {
  await prepareToolPage(page, 'context-driehoek');
  await page.goto(TOOLS['context-driehoek'], { waitUntil: 'networkidle' });
  await openSidebarSections(page);
  await screenshotDriehoekFrame(page, 'context-driehoek.png');
  await page.setViewportSize(viewport);
}

async function captureDriehoekCasus(page) {
  const fixturePath = path.resolve(
    __dirname,
    '../../jari-tools/tools/context-driehoek/src/fixtures/example-casus.jari'
  );
  const fixture = JSON.parse(await readFile(fixturePath, 'utf8'));
  const positions = Object.fromEntries(
    fixture.data.items.map((item) => [item.id, { x: item.x, y: item.y }])
  );
  await prepareToolPage(page, 'context-driehoek', { paid: true });
  await page.goto(TOOLS['context-driehoek'], { waitUntil: 'networkidle' });
  await page.locator('.jari-tool-file-actions input[type=file]').setInputFiles(fixturePath);
  await page.locator('.cd-triangle-item').first().waitFor({ state: 'visible', timeout: 10000 });
  await openSidebarSections(page);
  await frameDriehoek16x9(page);
  await page.waitForTimeout(400);
  await page.evaluate((placed) => {
    for (const el of document.querySelectorAll('.cd-triangle-item')) {
      const pos = placed[el.dataset.id];
      if (!pos) continue;
      el.dataset.x = String(pos.x);
      el.dataset.y = String(pos.y);
      el.style.left = `${(pos.x / 400) * 100}%`;
      el.style.top = `${(pos.y / 400) * 100}%`;
    }
  }, positions);
  await page.waitForTimeout(200);
  await page.screenshot({
    path: path.join(outDir, 'context-driehoek-casus.png'),
    animations: 'disabled',
    caret: 'hide',
    scale: 'css',
  });
  await page.setViewportSize(viewport);
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
    ['driehoek-casus', captureDriehoekCasus],
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
