async function login(page, email, password) {
    await page.fill('input[name="username"]', email);
    await page.fill('input[name="password"]', password);
    await page.click('input[name="submit"]');
    await page.waitForTimeout(500);
    // assertion redirect opsional, bisa juga di testnya
    // await page.waitForURL(/.*dashboard.*/);
  }
  
  module.exports = { login };
  