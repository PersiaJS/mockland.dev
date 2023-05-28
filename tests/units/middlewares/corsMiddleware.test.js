import corsMiddleware from "@/middlewares/corsMiddleware";

describe("corsMiddleware", () => {
  it("should set cors headers", async () => {
    const req = {};
    const res = {
      setHeader: jest.fn(),
    };

    corsMiddleware(req, res);

    expect(res.setHeader).toHaveBeenCalledWith(
      "Access-Control-Allow-Origin",
      "*"
    );
    expect(res.setHeader).toHaveBeenCalledWith(
      "Access-Control-Allow-Methods",
      "GET, HEAD, OPTIONS, POST, PUT, DELETE"
    );
    expect(res.setHeader).toHaveBeenCalledWith(
      "Access-Control-Allow-Headers",
      "*"
    );
  });
});
