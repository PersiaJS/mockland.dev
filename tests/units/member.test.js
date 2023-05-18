const { PrismaClient } = require("@prisma/client");
const {
  default: editProfile,
} = require("../../src/pages/api/member/edit-profile");
import bcrypt from "bcryptjs";
const { default: login } = require("../../src/pages/api/member/login");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

jest.mock("jsonwebtoken");
jest.mock("nodemailer");

const seedTestData = async () => {
  const securityHash = Math.random().toString(36).substring(2, 15);
  const passwordHashed = await bcrypt.hash("test4321", 10);

  const user = await prisma.member.findUnique({
    where: {
      email: "exampleForTest@gmail.com",
    },
  });

  if (!user) {
    await prisma.member.create({
      data: {
        email: "exampleForTest@gmail.com",
        firstName: "John",
        lastName: "Doe",
        password: passwordHashed,
        image: "https://i.pravatar.cc/150?img=3",
        securityHash: securityHash,
        newsletter: true,
        verified: true,
        lastLogin: new Date(),
      },
    });
  }
};

describe("member", () => {
  describe("member/login", () => {
    beforeAll(async () => {
      // Connect to the test database
      await prisma.$connect();

      // Seed the test database with sample user data
      await seedTestData();
    });
    afterAll(async () => {
      // Disconnect from the test database
      await prisma.$disconnect();
    });
    it("Should response with code 200 and res validation failed", async () => {
      const req = {
        body: {
          email: "",
          password: "",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        setHeader: jest.fn(),
      };
      await login(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({
        status: false,
        message: "Validation failed",
      });
    });

    it("Should response with code 200 and res User does not exist", async () => {
      const req = {
        body: {
          email: "exampleInvalidUser@gmail.com",
          password: "test1234",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        setHeader: jest.fn(),
      };
      await login(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({
        status: false,
        message: "User does not exist",
      });
    });

    it("Should response with code 200 and res Invalid credentials", async () => {
      const req = {
        body: {
          email: "exampleForTest@gmail.com",
          password: "test1234",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        setHeader: jest.fn(),
      };
      await login(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({
        status: false,
        message: "Invalid credentials",
      });
    });

    it("Should response with code 200 and res login successfull", async () => {
      const req = {
        body: {
          email: "exampleForTest@gmail.com",
          password: "test4321",
        },
        method: "POST",
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        setHeader: jest.fn(),
      };
      await login(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Login successful",
        auth: expect.anything(),
      });
    });
  });
});
