import tokenMiddleware from "@/middlewares/tokenMiddleware";
import { createMockContext } from "../../context";
import prisma from "../../lib/prisma";
import jwt from "jsonwebtoken";

let mockCtx;
let ctx;

describe("tokenMiddleware", () => {
  beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx;
  });
  it("Should respond with code 400 if the token header is not provided", async () => {
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const req = { headers: { token: undefined } };
    await tokenMiddleware(req, res);
    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({
      status: false,
      message: "token header is required",
    });
  });
  it("Should respond with code 400 if the provided token is invalid", async () => {
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const req = { headers: { token: "INVALID TOKEN" } };

    await tokenMiddleware(req, res);
    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({
      status: false,
      message: "Invalid token",
    });
  });
  it("Should respond with code 400 if there is no user related to the provided token", async () => {
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const req = { headers: { token: "TOKEN_NOT_EXIST" } };
    jwt.verify = jest.fn().mockReturnValue(true);
    prisma.member.findFirst = jest.fn().mockResolvedValue(null);
    await tokenMiddleware(req, res);
    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({
      status: false,
      message: "User does not exist",
    });
  });
  it("Should set req.user to a valid user object if the token is OK", async () => {
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const req = { headers: { token: "MEMBER_TEST_TOKEN" } };
    jwt.verify = jest.fn().mockReturnValue(true);
    prisma.member.findFirst = jest.fn().mockResolvedValue({
      id: 1,
      name: "Test",
      email: "test@test.com",
      token: "TOKEN",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await tokenMiddleware(req, res);
    expect(req.user).toBeDefined();
  });
});
