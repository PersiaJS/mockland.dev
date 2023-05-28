import checkTokenMiddleware from "@/middlewares/checkTokenMiddleware";
import prisma from "../../../lib/prisma";

describe("checkTokenMiddleware", () => {
  it("should req has user property", async () => {
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const req = { headers: { token: "DEFINED TOKEN" } };

    prisma.member.findFirst = jest.fn().mockResolvedValue({
      id: 1,
      name: "Test",
      email: "test@test.com",
      token: "TOKEN",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await checkTokenMiddleware(req, res);
    expect(req).toHaveProperty("user");
  });
});
