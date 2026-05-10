const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('TC-001 Verify Home page is opened successfully', async ({ page }) => {

  const homePage = new HomePage(page);

  await homePage.open();

  await expect(page).toHaveTitle(/Redmine/);

  await expect(page.locator('body'))
    .toContainText('Redmine');

  await expect(page.locator('body'))
    .toContainText('flexible project management web application');
});