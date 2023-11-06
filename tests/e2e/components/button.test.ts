import { expect, test } from '@playwright/test';

test('button-component', async ({ page }, testInfo) => {
    await page.goto('/iframe.html?id=components-button--primary');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('#button')).toHaveScreenshot(`${testInfo.title}.png`);
});
