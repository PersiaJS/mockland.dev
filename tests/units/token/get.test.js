import get from "../../../src/pages/api/token/get";
import prisma from "../../../lib/prisma";
import jwt from "jsonwebtoken";

describe("token/get", () => {
  it("should return token", async () => {
    const req = {
      method: "GET",
      headers: {
        auth: "TEST_TOKEN",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      setHeader: jest.fn().mockReturnThis(),
    };
    prisma.member.findFirst = jest.fn().mockResolvedValue({
      id: 1,
      token: "TEST_TOKEN",
    });

    jwt.verify = jest.fn().mockReturnValue(true);

    await get(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: true,
      message: "User logged in",
      data: {
        token: expect.any(String),
      },
    });
  });
});
