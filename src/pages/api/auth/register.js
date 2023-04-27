import Validator from "validatorjs";
import sendEmail from "../../../utils/sendEmail";
import bcrypt from "bcryptjs";
import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "POST");
  await tokenMiddleware(req, res);

  const rules = {
    firstName: "required|string",
    lastName: "required|string",
    email: "required|email",
    password: "required|string",
    clientUrl: "required|string",
  };

  const validation = new Validator(req.body, rules);

  if (validation.fails()) {
    return res.status(400).json({
      status: false,
      message: "Validation failed",
    });
  }

  const { firstName, lastName, email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
      memberId: req.user.id,
    },
  });

  if (user) {
    return res
      .status(400)
      .json({ status: false, message: "User already exists" });
  }

  const securityHash = Math.random().toString(36).substring(2, 15);
  const passwordHashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: passwordHashed,
      image: "https://i.pravatar.cc/150?img=3",
      securityHash: securityHash,
      newsletter: true,
      verified: false,
      lastLogin: new Date(),
      memberId: req.user.id,
    },
  });

  await sendEmail({
    email,
    subject: `Welcome to the mockland for user ${req.user.id}`,
    message: `
      <p>
        In order to verify your account, please click on the following link:
        <a href="${req.body.clientUrl}/?securityHash=${securityHash}">Verify</a>
      </p>
      <br />
      <p>Regards, MockLand.dev</p>
      <p>https://mockland.dev</p>
    `,
  });

  res.status(200).json({
    status: true,
    message: "User created, to login you need to confirm your email",
  });
};

export default handler;
