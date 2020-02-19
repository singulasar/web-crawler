const amazon = {
  getName: async (page) => {
    const selector = '#productTitle'
    await page.waitForSelector(selector);
    return await page.$eval(selector, el => el.innerText);
  },
  getPrice: async (page) => {
    const selector = '.a-color-price'
    await page.waitForSelector(selector);
    let price = await page.$eval(selector, el => el.innerText);
    price = Number(price.replace(/[^0-9.]+/g, ""));
    return price;
  },
  getImageUrl: async (page) => {
    const selector = '.itemNo0 img'
    await page.waitForSelector(selector);
    return await page.$eval(selector, el => el.src);
  },
  getCurrency: async (page) => {
    const selector = '#icp-touch-link-cop > span.icp-color-base'
    await page.waitForSelector(selector);
    let currency = await page.$eval(selector, el => el.innerText)
    currency = currency.split('-')[0].trim();
    return currency;
  },
}

module.exports = amazon;