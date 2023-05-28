import tokenCounterMiddleware from "@/middlewares/tokenCounterMiddleware";
import prisma from "../../../lib/prisma";

describe("tokenCounterMiddleware", () => {
  it("should req has user property", async () => {
    const req = { user: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const tokenCounterResponse = await tokenCounterMiddleware(req, res);
    expect(tokenCounterResponse).toEqual(undefined);
  });

  it("should call tokenUsage.create", async () => {
    const req = { user: { id: 1 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    prisma.tokenUsage.create = jest.fn().mockResolvedValue({
      id: 1,
      month: 1,
      year: 2021,
      memberId: 1,
      count: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    prisma.tokenUsage.update = jest.fn().mockResolvedValue(null);

    jest.spyOn(prisma.tokenUsage, "create");

    const tokenCounterResponse = await tokenCounterMiddleware(req, res);
    expect(prisma.tokenUsage.create).toHaveBeenCalled();
  });
});
