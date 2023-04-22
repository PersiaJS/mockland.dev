import Validator from "validatorjs";
import bcrypt from "bcryptjs";
import prisma from "@/utils/prisma";

const handler = async (req, res) => {
  const rules = {
    password: "required|min:6",
    passwordConfirm: "required|min:6",
    securityHash: "required",
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

  const { password, passwordConfirm, securityHash } = req.body;

  if (password !== passwordConfirm) {
    return res
      .status(200)
      .json({ status: false, message: "Passwords do not match" });
  }

  const user = await prisma.user.findFirst({
    where: {
      securityHash,
    },
  });

  if (!user) {
    return res.status(200).json({
      status: false,
      message:
        "Invalid security hash, Please go to forget password journey and try again",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newSecurityHash = Math.random().toString(36).substring(2, 15);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: hashedPassword,
      securityHash: newSecurityHash,
    },
  });

  return res.status(200).json({
    status: true,
    message: "Password reset successful",
  });
};

export default handler;
