const {
  default: checkTokenMiddleware,
} = require("@/middlewares/checkTokenMiddleware");

describe("checkTokenMiddleware", () => {
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  const req = { headers: { token: undefined } };
  xit("Should respond with code 400 if the provided token is invalid", async () => {
    req.headers.token = process.env.INVALID_TOKEN;
    await checkTokenMiddleware(req, res);
    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({
      status: false,
      message: "Invalid token",
    });
  });
  xit("Should respond with code 400 if there is no user related to the provided token ", async () => {
    req.headers.token = process.env.TOKEN_NOT_EXIST;
    await checkTokenMiddleware(req, res);
    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({
      status: false,
      message: "User does not exist",
    });
  });
  xit("Should set req.user to a valid user object if the token is OK", async () => {
    req.headers.token = process.env.MEMBER_TEST_TOKEN;
    await checkTokenMiddleware(req, res);
    expect(req.user).toBeDefined();
  });
});