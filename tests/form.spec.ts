import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('file:///C:/Users/archi/Downloads/automation-practice-master-main/automation-practice-master-main/app/index.html', {timeout: 10000});

})

test('should submit the form successfully', async ({page}) => {

  await page.getByRole('link', { name: '📝 Form Submission Practice' }).click();
  await expect(page).toHaveTitle('Form Submission Practice'), { timeout: 10000 };

  await page.getByLabel('Full Name *').fill('John');
  await page.getByLabel('Email Address *').fill('rana.archit12@gmail.com');
  await page.getByLabel('Password *').fill('Password123');
  await page.getByLabel('Phone Number').fill('8826448600');

  await page.getByPlaceholder('Enter your age').hover();
  await page.getByPlaceholder('Enter your age').fill('25');

});


test('test Button Interactions', async ({ page }) => {
  await page.getByRole('link', { name: '🔘 Button Interactions Learn' }).click();
  await page.getByRole('button', { name: 'Primary Button' }).click();
  await page.getByRole('button', { name: 'Secondary Button' }).click();
  await page.getByRole('button', { name: 'Success Button' }).click();
  await page.getByRole('button', { name: 'Danger Button' }).click();
  await page.getByRole('button', { name: 'Click Me!', exact: true }).click({
    clickCount: 9
  });
  await page.getByRole('button', { name: 'Enable/Disable Button' }).click();
  await page.getByRole('button', { name: 'Enabled Button' }).click();
  await page.getByRole('button', { name: 'Enabled Button' }).click();
  await page.getByRole('button', { name: 'Add New Button' }).click();
  await page.getByRole('button', { name: 'Add New Button' }).click();
  await page.getByRole('button', { name: 'Add New Button' }).click();
  await page.getByRole('button', { name: 'Remove Last Button' }).click();
  await page.getByRole('button', { name: 'Double Click Me!' }).dblclick();
  await page.getByRole('button', { name: 'Click Me (3s delay)' }).click();
  await page.getByRole('button', { name: 'Right Click Me!' }).click();
});

