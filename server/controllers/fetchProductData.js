const puppeteer = require('puppeteer');

function getController(url) {
  const shop = url.split('.')[1];
  return require('./' + shop)
}

async function getMessage(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const controller = getController(url);

  const name = await controller.getName(page);
  const price = await controller.getPrice(page);
  const currency = await controller.getCurrency(page);
  const image = await controller.getImageUrl(page)

  await browser.close();

  return { name: name, price: price, currency: currency, url: page.url(), imageUrl: image };
};


module.exports = getMessage;