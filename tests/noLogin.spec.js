const { test, expect } = require('@playwright/test');

test('Apakah halaman bisa diakses tanpa login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const loginForm = page.locator('form.oxd-form');
  await expect(loginForm).toBeVisible();
});
