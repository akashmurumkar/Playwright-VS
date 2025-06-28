import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.co.in/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright');
  await expect(page.locator('#SIvCob')).toMatchAriaSnapshot(`- link "বাংলা"`);
  await page.locator('.L3eUgb > div:nth-child(2)').click();
  await page.getByRole('button', { name: 'Google Search' }).click();
});