const {
  default: checkTokenMiddleware,
} = require("@/middlewares/checkTokenMiddleware");

describe("checkTokenMiddleware", () => {
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  const req = { headers: { token: undefined } };
  it("Should respond with code 400 if the provided token is invalid", async () => {
    try {
      req.headers.token = process.env.INVALID_TOKEN;
      await checkTokenMiddleware(req, res);
    } catch (err) {
      expect(res.status).toBeCalledWith(400);
      expect(res.json).toBeCalledWith({
        status: false,
        message: "Invalid token",
      });
    }
  });
  it("Should respond with code 400 if there is no user related to the provided token ", async () => {
    try {
      req.headers.token = process.env.TOKEN_NOT_EXIST;
      await checkTokenMiddleware(req, res);
    } catch (err) {
      expect(res.status).toBeCalledWith(400);
      expect(res.json).toBeCalledWith({
        status: false,
        message: "User does not exist",
      });
    }
  });
  it("Should set req.user to a valid user object", async () => {
    req.headers.token = process.env.MEMBER_TEST_TOKEN;
    await checkTokenMiddleware(req, res);
    expect(req.user).toBeDefined();
  });
});
