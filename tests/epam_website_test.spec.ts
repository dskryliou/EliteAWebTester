import { test, expect } from '@playwright/test';

test('EPAM website test scenario', async ({ page }) => {
  // Step 1: Navigate to the https://www.epam.com/ website
  await page.goto('https://www.epam.com/');

  // Step 2: Maximize the browser window
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Step 3: Click the "Accept cookies" button
  await page.getByRole('button').first().click();

  // Step 4: Select "Services" from the header menu
  await page.locator('span').filter({ hasText: 'Services Services' }).getByRole('link').click();

  // Step 5: Click the "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Step 6: Verify that the "Client Work" text is visible on the page
  await expect(page.getByText('Client Work')).toBeVisible();
});