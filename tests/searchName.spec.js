// @ts-check
const { test, expect } = require("@playwright/test");

test("Login dan mencari nama yang salah", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "admin123");
  await page.click('button[type="submit"]');
  await page.getByRole("link", { name: "PIM" }).click();
  await page.fill("div.oxd-autocomplete-text-input>input", "*#@!$");
  await page.click('button[type="submit"]');
  await page.waitForTimeout(4000);
  const records = page.locator('span').filter({ hasText: 'No Records Found' });
  await expect(records).toBeVisible();
});
