const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('TC-004 Verify Help page is opened', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.helpLink.click();

  await expect(page).toHaveURL(/redmine\.org\/guide/);
  await expect(page.locator('body')).toContainText('User guide');
});