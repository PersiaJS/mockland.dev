import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "PUT");

  await tokenMiddleware(req, res);

  const { id } = req.query;

  if (!req.header?.token) {
    res.status(200).json({
      status: false,
      message: "Token is required",
    });
    return;
  }

  const news = await prisma.news.findUnique({
    where: {
      id: id,
      userId: req.user.id,
    },
  });

  if (!news) {
    res.status(200).json({
      status: false,
      message: "News not found",
    });
    return;
  }
};

export default handler;
