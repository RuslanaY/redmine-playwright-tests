const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('TC-002 Verify navigation links are visible', async ({ page }) => {

  const homePage = new HomePage(page);

  await homePage.open();

  await expect(homePage.homeLink).toBeVisible();

  await expect(homePage.projectsLink).toBeVisible();

  await expect(homePage.helpLink).toBeVisible();

  await expect(homePage.signInLink).toBeVisible();

  await expect(homePage.registerLink).toBeVisible();
});