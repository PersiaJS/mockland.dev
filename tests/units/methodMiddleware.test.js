const { default: methodMiddleware } = require("@/middlewares/methodMiddleware");

describe("methodMiddleware", () => {
  const req = { method: "POST" };
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  it("Should respond with code 405 with message: 'Method not allowed'", async () => {
    const methodResponse = await methodMiddleware(req, res);
    expect(methodResponse).toEqual({
      status: false,
      code: 405,
      message: "Method not allowed",
    });
  });
  it("Should respond with code 200 with message: 'Method allowed'", async () => {
    const methodResponse = await methodMiddleware(req, res, "POST");
    expect(methodResponse).toEqual({
      status: true,
      code: 200,
      message: "Method allowed",
    });
  });
});
