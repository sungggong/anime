const { test } = require('@playwright/test');
const path = require('path');

const out = (...parts) => path.join(__dirname, ...parts);
const base = process.env.ANIPICK_URL || 'http://127.0.0.1:8098/';

async function prepare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('anipick-theme', 'light');
    localStorage.setItem('anipick-theme-nudge-v1', '1');
    localStorage.setItem('anipick-analytics-consent', 'denied');
    localStorage.removeItem('anipick-watchlist-v2');
    localStorage.removeItem('anipick-watch-status-v1');
  });
  await page.setViewportSize({ width: 1270, height: 760 });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts && document.fonts.ready);
  await page.waitForTimeout(800);
}

test('capture Product Hunt screenshots', async ({ page }) => {
  await prepare(page);
  await page.screenshot({ path: out('screenshots', '01-home-hero.png') });

  await page.locator('#survey').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: out('screenshots', '02-taste-quiz.png') });

  for (let i = 0; i < 9; i++) {
    await page.locator('.survey-option').first().click();
    await page.waitForTimeout(270);
  }
  await page.waitForTimeout(1900);
  await page.locator('#surveyResult').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: out('screenshots', '03-personalized-result.png') });

  await page.locator('#recommend').scrollIntoViewIfNeeded();
  await page.locator('#recommendToggle').click();
  await page.waitForTimeout(700);
  await page.screenshot({ path: out('screenshots', '04-anime-catalog.png') });

  await page.locator('#animeGrid [data-add]').first().click();
  await page.locator('#animeGrid [data-add]').nth(1).click();
  await page.locator('#watchlist').scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  await page.screenshot({ path: out('screenshots', '05-watchlist.png') });
});
