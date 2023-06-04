const { default: axios } = require("axios");
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mockland.dev";
const endpoint = "/api/category/list";
const url = baseUrl + endpoint;

describe(endpoint, () => {
  it("Should respond with code 405 if method is not GET", async () => {
    try {
      await axios.post(url);
    } catch (err) {
      expect(err.response.status).toBe(405);
    }
  });

  it("Should send the categories list", async () => {
    const res = await (await axios.get(url)).data;
    const categories = await res.data;
    expect(categories).toHaveLength(20);
  });
});
