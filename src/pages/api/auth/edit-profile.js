import authMiddleware from "@/middlewares/authMiddleware";
import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "@/utils/prisma";
import Validator from "validatorjs";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "POST");

  await authMiddleware(req, res);

  const rules = {
    firstName: "required|string",
    lastName: "required|string",
    newsletter: "required|boolean",
  };

  const validation = new Validator(req.body, rules);

  if (validation.fails()) {
    return res.status(400).json({
      status: false,
      message: "Validation failed",
    });
  }

  const { firstName, lastName, newsletter } = req.body;

  await prisma.user.update({
    where: {
      id: req.user.id,
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
