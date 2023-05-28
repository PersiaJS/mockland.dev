import userAuthMiddleware from "@/middlewares/userAuthMiddleware";
import jwt from "jsonwebtoken";
import prisma from "../../../lib/prisma";

describe("userAuthMiddleware", () => {
  it("Should respond with code 400 if there is no auth header in the request", async () => {
    const req = { headers: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const userAuthResponse = await userAuthMiddleware(req, res);
    expect(userAuthResponse).toEqual({
      status: false,
      code: 400,
      message: "auth header is required",
    });
  });

  it("Should respond with code 400 if the auth token is invalid", async () => {
    const req = {
      headers: {
        auth: "INVALID TOKEN",
      },
    };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const userAuthResponse = await userAuthMiddleware(req, res);
    expect(userAuthResponse).toEqual({
      status: false,
      code: 400,
      message: "Invalid auth token",
    });
  });

  it("Should respond with code 400 if the auth token is valid but the user does not exist", async () => {
    const req = {
      headers: {
        auth: jwt.sign({ id: 1 }, process.env.JWT_SECRET),
      },
    };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const userAuthResponse = await userAuthMiddleware(req, res);
    expect(userAuthResponse).toEqual({
      status: false,
      code: 400,
      message: "Invalid auth",
    });
  });

  it("Should respond with code 200 if the auth token is valid and the user exists", async () => {
    const req = {
      headers: {
        auth: jwt.sign({ id: 1 }, process.env.JWT_SECRET),
      },
    };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const user = {
      id: 1,
      name: "Test",
      email: "test@test.com",
      auth: jwt.sign({ id: 1 }, process.env.JWT_SECRET),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    prisma.user.findFirst = jest.fn().mockResolvedValue(user);

    const userAuthResponse = await userAuthMiddleware(req, res);
    expect(userAuthResponse).toEqual({
      status: true,
      code: 200,
      message: "Valid auth",
    });
  });
});
