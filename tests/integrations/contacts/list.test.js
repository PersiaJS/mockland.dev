const { default: axios } = require("axios");
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mockland.dev";
const endpoint = "/api/contact/list";
const url = baseUrl + endpoint;

describe(endpoint, () => {
  it("Should respond with code 405 if method is not GET", async () => {
    try {
      await axios.post(url);
    } catch (err) {
      expect(err.response.status).toBe(405);
    }
  });

  it("Should respond with code 400 if the auth header is not provided", async () => {
    try {
      await axios.get(url);
    } catch (error) {
      expect(error?.response?.status).toBe(400);
      expect(error?.response?.data?.message).toBe("auth header is required");
    }
  });
  xit("Should respond with code 400 if the auth header is not valid or doesn't exist", async () => {
    try {
      await axios.get(url, {
        headers: {
          auth: "INVALID_TOKEN",
        },
      });
    } catch (error) {
      expect(error?.response?.status).toBe(400);
      expect(error?.response?.data?.message).toBe("auth header is required");
    }
  });
});
