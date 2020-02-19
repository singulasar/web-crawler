const fetchData = require("./fetchProductData");
const url =
  "https://www.otto.de/p/call-of-duty-wwii-playstation-4-603252921/#variationId=603252922";

describe("otto", () => {
  it("should return the correct data", async () => {
    const result = await fetchData(url);

    expect(result).toEqual(
      {
        "name": "Call of Duty: Ghosts Xbox One, Software Pyramide",
        "price": 15,
        "currency": "EUR",
        "url": "https://www.otto.de/p/call-of-duty-ghosts-xbox-one-software-pyramide-784658622/#variationId=784658623",
        "imageUrl": "https://i.otto.de/i/otto/30695548?h=520&w=551&sm=clamp"
      }
    );
  });
});