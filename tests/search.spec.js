const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('TC-005 Verify search functionality', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.search('installation');

  await expect(page).toHaveURL(/search/);
  await expect(page.locator('body')).toContainText('Search');
  await expect(page.locator('body')).toContainText('installation');
});