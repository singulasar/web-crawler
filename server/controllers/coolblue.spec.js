const fetchData = require("./fetchProductData");
const url =
  "https://www.coolblue.be/en/product/835051/apple-macbook-air-13-3-inch-2019-mvfj2fn-a-space-gray-azerty.html";

describe("coolblue", () => {
  it("should return the correct data", async () => {
    const result = await fetchData(url);

    expect(result).toEqual(
      {
        "name": "Apple MacBook Air 13.3-inch (2019) MVFJ2FN/A Space Gray AZERTY",
        "price": 1329,
        "currency": "EUR",
        "url": "https://www.coolblue.be/en/product/835051/apple-macbook-air-13-3-inch-2019-mvfj2fn-a-space-gray-azerty.html",
        "imageUrl": "https://image.coolblue.be/max/500x500/products/1387944"
      }
    );
  });
});