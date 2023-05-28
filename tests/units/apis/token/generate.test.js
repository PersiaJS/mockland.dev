import generate from "../../../../src/pages/api/token/generate";
import prisma from "../../../../lib/prisma";
import jwt from "jsonwebtoken";

describe("token/generate", () => {
  it("should return new token", async () => {
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
    });

    jwt.verify = jest.fn().mockReturnValue(true);

    await generate(req, res);
    // expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: true,
      message: "New Token Generated",
      data: {
        token: expect.any(String),
      },
    });
  });
});
