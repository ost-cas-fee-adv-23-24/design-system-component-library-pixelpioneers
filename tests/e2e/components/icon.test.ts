import { expect, test } from '@playwright/test';

test('icons-element', async ({ context }, testInfo) => {
    const page = await context.newPage();
    await page.goto('http://localhost:6006/iframe.html?id=elements-icons--single-icon-story');
    await expect(page.locator('#iconMumble')).toHaveScreenshot(`${testInfo.title}.png`);
    await context.close();
});
