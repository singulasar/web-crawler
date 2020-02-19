const fetchData = require("./fetchProductData");
const url =
  "https://www.zalando.be/moschino-sneakers-laag-black-6mo12o004-q11.html";

describe("zalando", () => {
  it("should return the correct data", async () => {
    const result = await fetchData(url);

    expect(result).toEqual(
        {
            "name": "MOSCHINO - Sneakers laag - black",
            "price": 409.95,
            "currency": "EUR",
            "url": "https://www.zalando.be/moschino-sneakers-laag-black-6mo12o004-q11.html",
            "imageUrl": "https://mosaic03.ztat.net/vgs/media/thumb_hd/6M/O1/2O/00/4Q/11/6MO12O004-Q11@9.jpg"
        }
    );
  });
});