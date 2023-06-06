const { default: axios } = require("axios");
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mockland.dev";
const endpoint = "/api/news/create";
const url = baseUrl + endpoint;
const loginUrl = baseUrl + "/api/auth/login";

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

  xit("Should respond with code 400 if the token is not provided", async () => {
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
            token: "INVALID TOKEN",
          },
        }
      );
    } catch (err) {
      expect(res.status).toBe(400);
    }
  });
  xit("Should respond 200 if the token is valid", async () => {
    const resLogin = await axios.post(loginUrl, {
      email: "cytahiki@mailinator.com",
      password: "Pa$$w0rd!",
    });
    const token = resLogin.data.data.token;
    // const res = await axios.post(url, {
    //   title: "test",
    //   description: "test",
    //   content: "test",
    //   image: "test",
    //   slug: "test",
    //   author: "test",
    //   slug: "test",
    // });

    // expect(res.status).toBe(200);
  });
});
