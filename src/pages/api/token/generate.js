import authMiddleware from "@/middlewares/authMiddleware";
import methodMiddleware from "@/middlewares/methodMiddleware";
import jwt from "jsonwebtoken";
import prisma from "../../../../lib/prisma";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "GET");
  await authMiddleware(req, res);

  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, {
    expiresIn: "1w",
  });

  await prisma.user.update({
    where: {
      id: req.user.id,
    },
    data: {
      token,
    },
  });

  return res.status(200).json({
    status: true,
    message: "New Token Generated",
    data: {
      token,
    },
  });
};

export default handler;
