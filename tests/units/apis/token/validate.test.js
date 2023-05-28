import validate from "../../../../src/pages/api/token/validate";
import prisma from "../../../../lib/prisma";
import jwt from "jsonwebtoken";

describe("token/validate", () => {
  it("should return token validated", async () => {
    const req = {
      method: "GET",
      headers: {
        token: jwt.sign({ id: 1 }, process.env.JWT_SECRET),
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

    await validate(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: true,
      message: "Token Validated",
    });
  });
});
