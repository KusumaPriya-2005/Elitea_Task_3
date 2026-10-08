import { test, expect } from '@playwright/test';

test('Verify Client Work page navigation from Services', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const acceptAllButton = page.getByRole('button', { name: 'Accept All' });
  if (await acceptAllButton.isVisible()) {
    await acceptAllButton.click();
  }

  // Open the responsive navigation menu observed on the live page.
  await page.locator('.hamburger-menu-ui').click();

  await page.getByRole('link', { name: 'Services', exact: true }).click();

  await page
    .getByRole('link', { name: 'Explore Our Client Work' })
    .click();

  await expect(page).toHaveURL(
    'https://www.epam.com/services/client-work'
  );

  await expect(
    page.getByRole('heading', { name: 'Client Work', level: 1 })
  ).toBeVisible();
});
