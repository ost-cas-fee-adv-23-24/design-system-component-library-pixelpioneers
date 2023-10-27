import { expect, test } from '@playwright/test';

test('button-component', async ({ page }, testInfo) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-button--primary');
    await expect(page.locator('#button')).toHaveScreenshot(`${testInfo.title}.png`);
});
