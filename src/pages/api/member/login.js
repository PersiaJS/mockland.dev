import Validator from "validatorjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sendEmail from "@/utils/sendEmail";
import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";

const handler = async (req, res) => {
  const methodResponse = await methodMiddleware(req, res, "POST");
  if (!methodResponse.status) {
    return res.status(methodResponse.code).json({
      status: false,
      message: methodResponse.message,
    });
  }

  const rules = {
    email: "required|email",
    password: "required|string",
  };

  const validation = new Validator(req.body, rules);

  if (validation.fails()) {
    return res.status(200).json({
      status: false,
      message: "Validation failed",
    });
  }
  const { email, password } = req.body;

  const user = await prisma.member.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res
      .status(200)
      .json({ status: false, message: "User does not exist" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res
      .status(200)
      .json({ status: false, message: "Invalid credentials" });
  }

  if (!user.verified) {
    await sendEmail({
      email,
      subject: "Verify your email",
      message: `
      <h1>Verify your email</h1>
      <p>Hi ${user.firstName},</p>
      <br />
      <p>Your code: <b>${user.securityHash}</b></p>
      <br />
      <p>
        Please click the link below to verify your email address.
        <a href="${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify?securityHash=${user.securityHash}">Verify</a>
      </p>
      <br />
      <p>Regards, MockLand.dev</p>
      <p>https://mockland.dev</p>
    `,
    });

    return res
      .status(200)
      .json({ status: false, unVerified: true, message: "User not verified" });
  }

  const auth = jwt.sign(
    {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.image,
      newsletter: user.newsletter,
      lastLogin: user.lastLogin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1w",
    }
  );

  const securityHash = Math.random().toString(36).substring(2, 15);

  await prisma.member.update({
    where: {
      id: user.id,
    },
    data: {
      auth,
      lastLogin: new Date(),
      securityHash,
    },
  });

  return res.status(200).json({
    status: true,
    message: "Login successful",
    auth,
  });
};

export default handler;
