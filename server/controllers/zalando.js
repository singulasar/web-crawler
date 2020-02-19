async function getProductData(page) {
  const selector = '#z-vegas-pdp-props';
  await page.waitForSelector(selector);
  const scriptContent = await page.$eval(selector, el => el.innerText);
  let script = JSON.parse(scriptContent.slice(9, scriptContent.length - 3));
  return script.model.articleInfo;
}

const zalando = {
  getName: async (page) => {
    const productData = await getProductData(page);
    const brand = productData.brand.name;
    const prodName = productData.name;
    return brand + ' - ' + prodName;
  },
  getPrice: async (page) => {
    const productData = await getProductData(page);
    return productData.displayPrice.price.value;
  },
  getImageUrl: async (page) => {
    const productData = await getProductData(page);
    const imageUrl = productData.colors[0].pictureUrl;
    return imageUrl;
  },
  getCurrency: async (page) => {
    const productData = await getProductData(page);
    return productData.displayPrice.price.currency;
  },
}


module.exports = zalando;