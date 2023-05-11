const {
  default: userAuthMiddleware,
} = require("@/middlewares/userAuthMiddleware");

const req = { headers: {} };
const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
describe("userAuthMiddleware", () => {
  it("Should respond with code 400 if there is no auth header in the request", async () => {
    await userAuthMiddleware(req, res);
    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({
      status: false,
      message: "auth header is required",
    });
  });
  // it("Should respond with code 400 if the provided auth token is invalid", async () => {
  //   req.headers.auth = process.env.INVALID_TOKEN;
  //   try {
  //     await userAuthMiddleware(req, res);
  //   } catch (err) {}
  //   expect(res.status).toBeCalledWith(400);
  //   expect(res.json).toBeCalledWith({
  //     status: false,
  //     message: "Invalid auth token",
  //   });
  // });
  // it("Should respond with code 400 if there is no user related to the token", async () => {
  //   req.headers.auth = process.env.TOKEN_NOT_EXIST;
  //   await userAuthMiddleware(req, res);
  //   expect(res.status).toBeCalledWith(400);
  //   expect(res.json).toBeCalledWith({
  //     status: false,
  //     message: "User does not exist",
  //   });
  // });
});
