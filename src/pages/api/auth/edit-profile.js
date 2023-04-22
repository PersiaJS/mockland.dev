import prisma from "@/utils/prisma";
import Validator from "validatorjs";

const handler = async (req, res) => {
  const rules = {
    firstName: "required|string",
    lastName: "required|string",
    newsletter: "required|boolean",
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

  const { firstName, lastName, newsletter } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      token: req.body.token,
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
      firstName,
      lastName,
      newsletter,
    },
  });

  return res.status(200).json({
    status: true,
    message: "User updated",
  });
};

export default handler;
