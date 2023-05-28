import tokenMiddleware from "@/middlewares/tokenMiddleware";
import prisma from "../../../lib/prisma";
import jwt from "jsonwebtoken";

describe("tokenMiddleware", () => {
  it("Should respond with code 400 if the token header is not provided", async () => {
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const req = { headers: { token: undefined } };
    const tokenResponse = await tokenMiddleware(req, res);
    expect(tokenResponse).toEqual({
      status: false,
      code: 400,
      message: "token header is required",
    });
  });
  it("Should respond with code 400 if the provided token is invalid", async () => {
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const req = { headers: { token: "INVALID TOKEN" } };

    const tokenResponse = await tokenMiddleware(req, res);
    expect(tokenResponse).toEqual({
      status: false,
      code: 400,
      message: "Invalid token",
    });
  });
  it("Should respond with code 400 if there is no user related to the provided token", async () => {
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const req = { headers: { token: "TOKEN_NOT_EXIST" } };
    jwt.verify = jest.fn().mockReturnValue(true);
    prisma.member.findFirst = jest.fn().mockResolvedValue(null);
    const tokenResponse = await tokenMiddleware(req, res);
    expect(tokenResponse).toEqual({
      status: false,
      code: 400,
      message: "Invalid token",
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
    const tokenResponse = await tokenMiddleware(req, res);
    expect(tokenResponse).toEqual({
      status: true,
      code: 200,
      message: "Valid token",
    });
  });
});
