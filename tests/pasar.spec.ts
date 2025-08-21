const { test, expect } = require('@playwright/test');
const { login } = require('../utils/login');
const { clickPasar, clickOrder } = require('../utils/navbar');

import dotenv from 'dotenv';


dotenv.config(); // load .env

const VALID_EMAIL = process.env.MIFX_EMAIL as string;
const VALID_PASS  = process.env.MIFX_PASSWORD as string;
const Product = "Nasdaq"


test.beforeEach(async ({ page }) => {
  await page.goto('/clientarea/index');
});


test('Search Product in Pasar', async ({ page }) => {
    await login(page, VALID_EMAIL, VALID_PASS);     // <-- panggil function login
    await clickPasar(page);
    await page.waitForSelector('#searchproduct:visible');
    await page.fill('#searchproduct:visible', Product);
    // await page.keyboard.press('Enter'); 
    // const ProductBtn = page.locator('div.align-self-center.color45526C.fontsize17.semi-bold', { hasText: Product });
    // await page.click(ProductBtn);

    // // loop semua match dan klik yang visible pertama
    // const count = await ProductBtn.count();
    // for (let i = 0; i < count; i++) {
    //     const el = ProductBtn.nth(i);
    // if (await el.isVisible()) {
    //     await el.scrollIntoViewIfNeeded();
    //     await el.click();
//     // break; // stop setelah klik
//   }
// }

});