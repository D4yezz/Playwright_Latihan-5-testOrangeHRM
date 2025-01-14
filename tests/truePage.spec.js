// @ts-check
const { test, expect } = require("@playwright/test");

test("test menu dan fitur search", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "admin123");
  await page.click('button[type="submit"]');

//   masuk ke menu Admin
  await page.getByRole("link", { name: "Admin" }).click();
  await expect(page.locator("h5").innerText()).resolves.toBe("System Users");

//   mencari menu My Info
  await page.fill('input[placeholder="Search"]', "my info");
  await page.getByRole("link", { name: "My Info" }).click();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');

});
