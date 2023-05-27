import userAuthMiddleware from "@/middlewares/userAuthMiddleware";
import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";
import tokenCounterMiddleware from "@/middlewares/tokenCounterMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);

  const methodResponse = await methodMiddleware(req, res, "GET");
  if (!methodResponse.status) {
    return res.status(methodResponse.code).json({
      status: false,
      message: methodResponse.message,
    });
  }

  const tokenResponse = await tokenMiddleware(req, res);
  if (!tokenResponse.status) {
    return res.status(tokenResponse.code).json({
      status: false,
      message: tokenResponse.message,
    });
  }

  const userAuthResponse = await userAuthMiddleware(req, res);
  if (!userAuthResponse.status) {
    return res.status(userAuthResponse.code).json({
      status: false,
      message: userAuthResponse.message,
    });
  }

  await tokenCounterMiddleware(req, res);

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
