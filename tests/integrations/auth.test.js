const axios = require("axios");
const prisma = require("../../lib/prisma");
require("dotenv").config({ path: ".env.test" });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const endPoint = "/api/auth";
let url;

describe(endPoint, () => {
  describe(`${endPoint}/register`, () => {
    beforeAll(() => {
      url = baseUrl + endPoint + "/register";
    });
    it("Should respond with code 400 if the format of the body is incorrect", async () => {
      try {
        const res = await axios.post(url, {});
        expect(res.status).toBe(400);
      } catch (err) {}
    });
  });
});
