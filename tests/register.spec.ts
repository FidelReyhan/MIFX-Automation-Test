import { test, expect } from '@playwright/test';

test('Register demo account - Password to Short (Negative)', async ({ page }) => {
    await page.goto('/open-demo-account');

    // Isi form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'Pass1!');
    await page.click('body'); // klik area kosong biar field kehilangan fokus
    await page.waitForTimeout(500);
    await expect(page.getByText(/Password Min\. 8 karakter/i)).toBeVisible();
    await expect(page.locator('text=Memiliki 1 huruf besar, 1 huruf kecil, angka, dan simbol selain \\ & \' < = >')).toBeVisible();

});

test('Register demo account - Password to Long (Negative)', async ({ page }) => {
    await page.goto('/open-demo-account');
  
    // Isi form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'Pass1234567891028293!');
    await page.click('body'); // klik area kosong biar field kehilangan fokus
    await page.waitForTimeout(500);
    await expect(page.getByText(/Password Min\. 8 karakter/i)).toBeVisible();
    await expect(page.locator('text=Memiliki 1 huruf besar, 1 huruf kecil, angka, dan simbol selain \\ & \' < = >')).toBeVisible();
  
  });
  
  test('Register demo account - Password Missing Uppercase (Negative)', async ({ page }) => {
    await page.goto('/open-demo-account');
  
    // Isi form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'password1!');
    await page.click('body'); // klik area kosong biar field kehilangan fokus
    await page.waitForTimeout(500);
    await expect(page.getByText(/Password Min\. 8 karakter/i)).toBeVisible();
    await expect(page.locator('text=Memiliki 1 huruf besar, 1 huruf kecil, angka, dan simbol selain \\ & \' < = >')).toBeVisible();
  
  });

  test('Register demo account - Password Missing Special Char (Negative)', async ({ page }) => {
    await page.goto('/open-demo-account');
  
    // Isi form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'Password12');
    await page.click('body'); // klik area kosong biar field kehilangan fokus
    await page.waitForTimeout(500);
    await expect(page.getByText(/Password Min\. 8 karakter/i)).toBeVisible();
    await expect(page.locator('text=Memiliki 1 huruf besar, 1 huruf kecil, angka, dan simbol selain \\ & \' < = >')).toBeVisible();
  
  });

  test('Register demo account - Passwords don’t match (Negative)', async ({ page }) => {
    await page.goto('/open-demo-account');
  
    // Isi form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'Password1!');
    await page.fill('input[name="repass"]', 'Password1@');
    await page.waitForTimeout(500);
    await expect(page.locator('text=Password yang Anda masukkan tidak sama.')).toBeVisible();
  
  });