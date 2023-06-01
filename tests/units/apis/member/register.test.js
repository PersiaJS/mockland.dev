import member from "../../../../src/pages/api/member/register";
import prisma from "../../../../lib/prisma";
import nodeMailer from "nodemailer";

describe("Member API", () => {
  it("should return 400 if validation fails", async () => {
    const req = {
      method: "POST",
      body: {
        firstName: "John",
        lastName: "Doe",
        email: "test@test.com",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      setHeader: jest.fn().mockReturnThis(),
    };

    await member(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: false,
      message: "Validation failed",
    });
  });

  it("should return 400 if user already exists", async () => {
    const req = {
      method: "POST",
      body: {
        firstName: "John",
        lastName: "Doe",
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

    await member(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: false,
      message: "User already exists",
    });
  });

  it("should return 200 if user is created", async () => {
    const req = {
      method: "POST",
      body: {
        firstName: "John",
        lastName: "Doe",
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
    };

    jest.spyOn(prisma.member, "findUnique").mockResolvedValue(null);
    jest.spyOn(prisma.member, "create").mockResolvedValue(user);
    jest.spyOn(nodeMailer, "createTransport").mockReturnValue({
      sendMail: jest.fn().mockResolvedValue({}),
    });

    await member(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: true,
      message: "User created, to login you need to confirm your email",
    });

    expect(prisma.member.create).toHaveBeenCalledWith({
      data: {
        firstName: "John",
        lastName: "Doe",
        email: "test@test.com",
        password: expect.any(String),
        image: "https://i.pravatar.cc/150?img=3",
        securityHash: expect.any(String),
        newsletter: true,
        verified: false,
        lastLogin: expect.any(Date),
      },
    });
  });
});
