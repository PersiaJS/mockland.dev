const { default: axios } = require("axios");
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mockland.dev";
const endpoint = "/api/news/create";
const url = baseUrl + endpoint;

describe(endpoint + "/list", () => {
  it("Should respond with code 422 if validation fails", async () => {
    const res = await axios.post(url, {
      title: "test",
      description: "test",
      content: "test",
      image: "test",
      slug: "test",
      author: "test",
    });
    expect(res.status).toBe(422);
  });
});
