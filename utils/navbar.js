async function clickPasar(page) {
    const pasar = page.locator('span.fontsize12.align-middle', { hasText: 'Pasar' }).first();
    await pasar.waitFor({ state: 'visible', timeout: 5000 });
    await pasar.scrollIntoViewIfNeeded();
    await pasar.click();
  }
  
  module.exports = { clickPasar };
  
async function clickOrder(page) {
    const pasar = page.locator('span.fontsize12.align-middle', { hasText: 'Order' }).first();
    await pasar.waitFor({ state: 'visible', timeout: 5000 });
    await pasar.scrollIntoViewIfNeeded();
    await pasar.click();
  }
  
  module.exports = { clickOrder };
