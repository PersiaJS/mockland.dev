import prisma from "@/utils/prisma";
import Validator from "validatorjs";
import sendEmail from "../../../utils/sendEmail";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  const rules = {
    firstName: "required|string",
    lastName: "required|string",
    email: "required|email",
    password: "required|string",
  };

  const validation = new Validator(req.body, rules);

  if (validation.fails()) {
    return res.status(400).json({
      status: false,
      message: "Validation failed",
    });
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: false, message: "Method not allowed" });
  }
  const { firstName, lastName, email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
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
    },
  });

  await sendEmail({
    email,
    subject: "Welcome to the community",
    message: `
      <h1>Welcome to the community</h1>
      <p>Thank you for registering, we hope you enjoy your stay.</p>
      <br />
      <p>
        In order to verify your account, please click on the following link:
        <a href="${process.env.CLIENT_URL}/?securityHash=${securityHash}">Verify</a>
      </p>
      <br />
      <p>Regards, Gazar.dev</p>
      <p>https://gazar.dev</p>
    `,
  });

  res.status(200).json({ status: true, message: "User created" });
};

export default handler;
