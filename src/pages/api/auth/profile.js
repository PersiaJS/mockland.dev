import prisma from "@/utils/prisma";
import Validator from "validatorjs";

const handler = async (req, res) => {
  const rules = {
    token: "required|string",
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

  const { token } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      token,
    },
  });

  if (!user) {
    return res
      .status(400)
      .json({ status: false, message: "User does not exist" });
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      lastLogin: new Date(),
    },
  });

  return res.status(200).json({
    status: true,
    message: "User logged in",
    data: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.image,
      newsletter: user.newsletter,
      lastLogin: user.lastLogin,
    },
  });
};

export default handler;
