import { expect, test } from '@playwright/test';

test('icons-element', async ({ page }, testInfo) => {
    await page.goto('/iframe.html?id=elements-icons--single-icon-story');
    await expect(page.locator('#iconMumble')).toHaveScreenshot(`${testInfo.title}.png`);
});
