const { default: methodMiddleware } = require("@/middlewares/methodMiddleware");

describe("methodMiddleware", () => {
  const req = { method: "POST" };
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  it("Should respond with code 405 with message: 'Method not allowed'", async () => {
    await methodMiddleware(req, res);
    expect(res.status).toBeCalledWith(405);
    expect(res.json).toBeCalledWith({
      status: false,
      message: "Method not allowed",
    });
  });
});
