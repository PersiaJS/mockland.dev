const { default: axios } = require("axios");
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mockland.dev";
const endpoint = "/api/news/list";
const url = baseUrl + endpoint;

describe(endpoint, () => {
  describe(endpoint, () => {
    it("Should send 10 news. (Default page is 1 and limit is 10)", async () => {
      const res = await (await axios.get(url)).data;
      const news = await res.data;
      expect(news).toHaveLength(10);
    });
  });
});
