// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // load .env

const VALID_EMAIL = process.env.MIFX_EMAIL as string;
const VALID_PASS  = process.env.MIFX_PASSWORD as string;

test.beforeEach(async ({ page }) => {
  await page.goto('/clientarea/index');
});


test('Login with valid credentials', async ({ page }) => {
  await page.fill('input[name="username"]', VALID_EMAIL);
  await page.fill('input[name="password"]', VALID_PASS);
  await page.click('input[name="submit"]');
  await page.waitForTimeout(500);

  // assertion cek redirect / login success
  await expect(page).toHaveURL(/.*dashboard.*/);
});

test('Login with invalid email', async ({ page }) => {
    await page.fill('input[name="username"]', "wrongemail@gmail.com");
    await page.fill('input[name="password"]', VALID_PASS);
    await page.click('input[name="submit"]');
    await page.waitForTimeout(500);
  
    // assertion cek redirect / login failed
    await expect(
        page.getByText(/Akun atau kata sandi salah|Incorrect username or password/i)
      ).toBeVisible({ timeout: 5000 });
      });
  
test('Login with invalid password', async ({ page }) => {
    await page.fill('input[name="username"]', VALID_EMAIL);
    await page.fill('input[name="password"]', "Xy72618!2");
    await page.click('input[name="submit"]');
    await page.waitForTimeout(500);
  
    // assertion cek redirect / login failed
    await expect(
        page.getByText(/Akun atau kata sandi salah|Incorrect username or password/i)
      ).toBeVisible({ timeout: 5000 });
      });

test('Login without fill password', async ({ page }) => {
    await page.fill('input[name="username"]', VALID_EMAIL);
    await page.click('input[name="submit"]');
    await page.waitForTimeout(500);
  
    // assertion cek redirect / login failed
    await expect(
        page.getByText(/Please Fill All Fields/i)
      ).toBeVisible({ timeout: 5000 });
      });
  
