import userAuthMiddleware from "@/middlewares/userAuthMiddleware";
import methodMiddleware from "@/middlewares/methodMiddleware";
import Validator from "validatorjs";
import prisma from "../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "POST");
  await tokenMiddleware(req, res);

  await userAuthMiddleware(req, res);

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

  await prisma.member.update({
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
