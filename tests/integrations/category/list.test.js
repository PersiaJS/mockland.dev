const { default: axios } = require("axios");
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mockland.dev";
const endpoint = "/api/category/list";
const url = baseUrl + endpoint;

describe(endpoint, () => {
  it("Should send the categories list", async () => {
    const res = await (await axios.get(url)).data;
    const categories = await res.data;
    expect(categories).toHaveLength(20);
  });
});
