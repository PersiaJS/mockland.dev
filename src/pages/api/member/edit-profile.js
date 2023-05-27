import authMiddleware from "@/middlewares/authMiddleware";
import methodMiddleware from "@/middlewares/methodMiddleware";
import Validator from "validatorjs";
import prisma from "../../../../lib/prisma";

const handler = async (req, res) => {
  const methodResponse = await methodMiddleware(req, res, "PUT");
  if (!methodResponse.status) {
    return res.status(methodResponse.code).json({
      status: false,
      message: methodResponse.message,
    });
  }

  const authResposne = await authMiddleware(req, res);
  if (!authResposne.status) {
    return res.status(authResposne.code).json({
      status: false,
      message: authResposne.message,
    });
  }

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
