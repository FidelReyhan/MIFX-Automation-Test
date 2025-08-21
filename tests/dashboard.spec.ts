const { test, expect } = require('@playwright/test');
const { login } = require('../utils/login');
const { clickPasar, clickOrder } = require('../utils/navbar');
import dotenv from 'dotenv';



dotenv.config(); // load .env

const VALID_EMAIL = process.env.MIFX_EMAIL as string;
const VALID_PASS  = process.env.MIFX_PASSWORD as string;


test.beforeEach(async ({ page }) => {
  await page.goto('/clientarea/index');
});

test('Open dashboard after login', async ({ page }) => {
    await login(page, VALID_EMAIL, VALID_PASS);     // <-- panggil function login

});
  
test('Open dashboard after login and logout', async ({ page }) => {
    await login(page, VALID_EMAIL, VALID_PASS);     // <-- panggil function login
    await page.click('a.logoutMix'); 

});

test('Deposit in Demo Account', async ({ page }) => {
    await login(page, VALID_EMAIL, VALID_PASS);     // <-- panggil function login
    await page.click('div.col-8:has-text("Deposit")');
    await expect(page.locator('text=Anda Belum Dapat Melakukan Deposit').first()).toBeVisible();
});

test('Tarik Dana in Demo Account', async ({ page }) => {
    await login(page, VALID_EMAIL, VALID_PASS);     // <-- panggil function login
    await page.click('div.col-8:has-text("Tarik Dana")');
    await expect(page.locator('text=Belum Dapat Melakukan Tarik Dana').first()).toBeVisible();
});

test('Overbook in Demo Account', async ({ page }) => {
    await login(page, VALID_EMAIL, VALID_PASS);     // <-- panggil function login
    await page.click('div.col-8:has-text("Overbook")');
    await expect(page.locator('text=Belum Dapat Melakukan Overbook').first()).toBeVisible();
});

test('Click Pasar in Demo Account', async ({ page }) => {
    await login(page, VALID_EMAIL, VALID_PASS);     // <-- panggil function login
    await clickPasar(page);
});

test('Click Order in Demo Account', async ({ page }) => {
    await login(page, VALID_EMAIL, VALID_PASS);     // <-- panggil function login
    await clickOrder(page);
});

