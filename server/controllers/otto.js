const otto = {
  getName: async (page) => {
    const selector = 'h1[itemprop="name"]';
    await page.waitForSelector(selector);
    return await page.$eval(selector, el => el.innerText);
  },
  getPrice: async (page) => {
    const reducedPriceAmount = await page.$$eval(
      "#reducedPriceAmount",
      el => el[0] && el[0].innerText
    );
    const normalPriceAmount = await page.$$eval(
      "#normalPriceAmount",
      el => el[0] && el[0].innerText
    );
    let price = reducedPriceAmount || normalPriceAmount || "0";
    price = Number(price.replace(/[.,]/g, function ($1) { return $1 === '.' ? ',' : '.' }).replace(/[^0-9.]+/g, ""));
    return price;
  },
  getImageUrl: async (page) => {
    const selector = '#prd_mainProductImage'
    await page.waitForSelector(selector);
    return await page.$eval(selector, el => el.src);
  },
  getCurrency: async (page) => {
    return 'EUR';
  }
}

module.exports = otto;