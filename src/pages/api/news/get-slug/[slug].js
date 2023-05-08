import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";
import corsMiddleware from "@/middlewares/corsMiddleware";
import tokenCounterMiddleware from "@/middlewares/tokenCounterMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "GET");
  await tokenCounterMiddleware(req, res);

  const { slug } = req.query;

  const news = await prisma.news.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!news) {
    res.status(200).json({
      status: false,
      message: "News not found",
    });
    return;
  }

  res.status(200).json({
    status: true,
    message: "News fetched",
    data: news,
  });
};

export default handler;
