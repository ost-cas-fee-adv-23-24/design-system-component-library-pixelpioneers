import { expect, test } from '@playwright/test';

test('button-component', async ({ context }, testInfo) => {
    const page = await context.newPage();
    await page.goto('/iframe.html?id=components-button--primary');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('#button')).toHaveScreenshot(`${testInfo.title}.png`);
    await context.close();
});
