import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.co.in/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright');
  await page.getByRole('combobox', { name: 'Search' }).press('Tab');
  await page.getByRole('button', { name: 'Google Search' }).click();
  await page.close();
});