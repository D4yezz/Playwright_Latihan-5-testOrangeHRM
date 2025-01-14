// @ts-check
const { test, expect } = require('@playwright/test');

test('Mencoba login dengan username dan password yang salah', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', "salahsatu");
  await page.fill('input[name="password"]', "salahsdua");
  await page.click('button[type="submit"]');

//   pesan error
const error = page.locator('div.oxd-alert--error');
await expect(error).toBeVisible();
await expect(error).toHaveText('Invalid credentials');

});