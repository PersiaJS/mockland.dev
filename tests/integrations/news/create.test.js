const { default: axios } = require("axios");
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mockland.dev";
const endpoint = "/api/news/create";
const url = baseUrl + endpoint;
const token = process.env.MEMBER_TEST_TOKEN;

describe(endpoint + "/list", () => {
  it("Should respond with code 405 if method is not POST", async () => {
    try {
      await axios.get(url, {
        title: "test",
        description: "test",
        content: "test",
        image: "test",
        slug: "test",
        author: "test",
      });
    } catch (err) {
      expect(err.response.status).toBe(405);
    }
  });

  xit("Should respond with code 405 if method is not POST", async () => {
    try {
      await axios.post(
        url,
        {
          title: "test",
          description: "test",
          content: "test",
          image: "test",
          slug: "test",
          author: "test",
        },
        { headers: { token } }
      );
    } catch (err) {
      expect(err.response.status).toBe(422);
    }
  });
});
