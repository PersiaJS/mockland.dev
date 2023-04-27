import userAuthMiddleware from "@/middlewares/userAuthMiddleware";
import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "GET");
  await tokenMiddleware(req, res);

  await userAuthMiddleware(req, res);

  await prisma.user.update({
    where: {
      id: req.user.id,
    },
    data: {
      lastLogin: new Date(),
    },
  });

  return res.status(200).json({
    status: true,
    message: "User logged in",
    data: {
      id: req.user.id,
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      image: req.user.image,
      newsletter: req.user.newsletter,
      lastLogin: req.user.lastLogin,
    },
  });
};

export default handler;
