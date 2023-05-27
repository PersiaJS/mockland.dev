import authMiddleware from "@/middlewares/authMiddleware";
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

  const authResposne = await authMiddleware(req, res);
  if (!authResposne.status) {
    return res.status(authResposne.code).json({
      status: false,
      message: authResposne.message,
    });
  }

  if (!req.user?.id) {
    return res.status(401).json({
      status: false,
      message: "User not found",
    });
  }

  await prisma.member.update({
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
    user: {
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
