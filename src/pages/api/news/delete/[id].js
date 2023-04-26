import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "DELETE");

  await tokenMiddleware(req, res);

  const { id } = req.query;

  const news = await prisma.news.findFirst({
    where: {
      id: id,
      memberId: req.user.id,
    },
  });

  if (!news) {
    res.status(200).json({
      status: false,
      message: "News not found",
    });
    return;
  }

  await prisma.news.delete({
    where: {
      id: id,
    },
  });

  res.status(200).json({
    status: true,
    message: "News deleted successfully",
  });
};

export default handler;
