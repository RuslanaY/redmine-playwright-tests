const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('TC-003 Verify Download page is opened', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.downloadLink.click();

  await expect(page).toHaveURL(/Download/);
  await expect(page.locator('body')).toContainText('Download');
  await expect(page.locator('body')).toContainText('Redmine');
});