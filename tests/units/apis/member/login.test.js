import login from "../../../../src/pages/api/member/login";
import prisma from "../../../../lib/prisma";
import nodeMailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

describe("login member api", () => {
  it("should return 200 if validation failed", async () => {
    const req = {
      method: "POST",
      body: {
        email: "test@test.com",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      setHeader: jest.fn().mockReturnThis(),
    };
    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: false,
      message: "Validation failed",
    });
  });

  it("Should return 200 if user does not exist", async () => {
    const req = {
      method: "POST",
      body: {
        email: "test@test.com",
        password: "password",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      setHeader: jest.fn().mockReturnThis(),
    };

    jest.spyOn(prisma.member, "findUnique").mockResolvedValue(null);

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: false,
      message: "User does not exist",
    });
  });

  it("Should return 200 if Invalid credentials", async () => {
    const req = {
      method: "POST",
      body: {
        email: "test@test.com",
        password: "password2",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      setHeader: jest.fn().mockReturnThis(),
    };

    const user = {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "test@test.com",
      password: "password",
      image: "https://i.pravatar.cc/150?img=3",
      securityHash: "123456",
      newsletter: true,
      verified: false,
      lastLogin: new Date(),
    };

    jest.spyOn(prisma.member, "findUnique").mockResolvedValue(user);

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: false,
      message: "Invalid credentials",
    });
  });

  it("Should return 200 if user not verified", async () => {
    const req = {
      method: "POST",
      body: {
        email: "test@test.com",
        password: "password",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      setHeader: jest.fn().mockReturnThis(),
    };

    const user = {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "test@test.com",
      password: "password",
      image: "https://i.pravatar.cc/150?img=3",
      securityHash: "123456",
      newsletter: true,
      verified: false,
      lastLogin: new Date(),
    };

    jest.spyOn(prisma.member, "findUnique").mockResolvedValue(user);
    jest.spyOn(nodeMailer, "createTransport").mockReturnValue({
      sendMail: jest.fn().mockResolvedValue({}),
    });
    jest.spyOn(bcrypt, "compare").mockResolvedValue(true);

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: false,
      unVerified: true,
      message: "User not verified",
    });
  });
  it("Should return 200 if login successfull", async () => {
    const req = {
      method: "POST",
      body: {
        email: "test@test.com",
        password: "password",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      setHeader: jest.fn().mockReturnThis(),
    };

    const user = {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "test@test.com",
      password: "password",
      image: "https://i.pravatar.cc/150?img=3",
      securityHash: "123456",
      newsletter: true,
      verified: true,
      lastLogin: new Date(),
    };

    jest.spyOn(prisma.member, "findUnique").mockResolvedValue(user);
    jest.spyOn(nodeMailer, "createTransport").mockReturnValue({
      sendMail: jest.fn().mockResolvedValue({}),
    });
    jest.spyOn(bcrypt, "compare").mockResolvedValue(true);
    jest.spyOn(jwt, "sign").mockReturnValue("mockedToken");

    await login(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: true,
      message: "Login successful",
      auth: "mockedToken",
    });
  });
});
