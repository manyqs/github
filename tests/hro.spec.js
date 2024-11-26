import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tw-test.hillsretailorder.com');
  await expect(page.locator('#truste-consent-content')).toBeVisible();
  await page.getByRole('button', { name: 'Accept All' }).click();
  const privacyScreenshot = await page.screenshot({ fullPage: true });
  await test.step('Full Page Screenshot', async () => {
    await test.info().attach('Full Page Screenshot', { body: privacyScreenshot, contentType: 'image/png' });
  });
  await expect(page.getByRole('heading', { name: '登入' })).toBeVisible();
  await expect(page.getByPlaceholder('電子郵件 *')).toBeVisible();
  await expect(page.getByPlaceholder('密碼 *')).toBeVisible();
  await expect(page.locator('#gigya-login-form')).toContainText('登入');
});