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
    /*
      Swapping "." and "," to conform with number standard
      12,5 should become 12.5 to not lose the decimals when converting to a Number
      Then all symbols except for numbers and "." are removed before converting to number
    */
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