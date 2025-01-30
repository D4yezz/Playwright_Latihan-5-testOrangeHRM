// @ts-check
const { test, expect } = require('@playwright/test');

test('Login dan mencari nama di pim', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "admin123");
  await page.click('button[type="submit"]');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.fill('div.oxd-autocomplete-text-input>input', "Charlotte");
  await page.click('button[type="submit"]');
  await page.waitForTimeout(4000);
  expect(await page.getByText('00392')).toBeVisible();
});



