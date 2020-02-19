const coolblue = {
  getName: async (page) => {
    const selector = '#js-product-scope > h1 > span'
    await page.waitForSelector(selector);
    return await page.$eval(selector, el => el.innerText);
  },
  getPrice: async (page) => {
    const selector = '.sales-price__current'
    await page.waitForSelector(selector);
    let price = await page.$eval(selector, el => el.innerText);
    /*
      Swapping "." and "," to conform with number standard
      12,5 should become 12.5 to not lose the decimals when converting to a Number
      Then all symbols except for numbers and "." are removed before converting to number
    */
    price = Number(price.replace(/[.,]/g, function ($1) { return $1 === '.' ? ',' : '.' }).replace(/[^0-9.]+/g, ""));
    return price;
  },
  getImageUrl: async (page) => {
    const name = await coolblue.getName(page);

    const selector = 'img[alt="' + name + ' Main Image"'
    await page.waitForSelector(selector);
    return await page.$eval(selector, el => el.src);
  },
  getCurrency: async (page) => {
    return 'EUR';
  },
}

module.exports = coolblue;