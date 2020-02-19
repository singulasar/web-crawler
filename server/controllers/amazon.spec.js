const fetchData = require("./fetchProductData");
const url =
  "https://www.amazon.com/dp/B00F0W1RIW/ref=s9_acss_bw_cg_E171302A_md1_w?ref=E17SL4";

describe("amazon", () => {
  it("should return the correct data", async () => {
    const result = await fetchData(url);

    expect(result.name).toContain(
      "Philips HF3500/60 Wake-Up Light Therapy Alarm Clock with Sunrise Simulation, White"
    );
    expect(result.price).toEqual(41.35);
    expect(result.currency).toEqual("USD");
    expect(result.url).toContain(
      "https://www.amazon.com/dp/B00F0W1RIW/ref=s9_acss_bw_cg_E171302A_md1_w?ref=E17SL4"
    );
    expect(result.imageUrl).toContain(
      "https://images-na.ssl-images-amazon.com/images/I/51EcD3MDpyL"
    );
  });
});