const { default: axios } = require("axios");
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mockland.dev";
const endpoint = "/api/news/create";
const url = baseUrl + endpoint;
const token = process.env.INVALID_TOKEN;

describe(endpoint, () => {
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

  it("Should respond with code 400 if the token is not provided", async () => {
    try {
      await axios.post(url, {
        title: "test",
        description: "test",
        content: "test",
        image: "test",
        slug: "test",
        author: "test",
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data.message).toBe("token header is required");
    }
  });

  xit("Should respond with code 400 if the token is invalid or doesn't exist", async () => {
    try {
      const res = await axios.post(
        url,
        {
          title: "test",
          description: "test",
          content: "test",
          image: "test",
          slug: "test",
          author: "test",
        },
        {
          headers: {
            token,
          },
        }
      );
      console.log(res);
      expect(res.status).toBe(400);
    } catch (err) {
      console.log(err);
    }
  });
});
