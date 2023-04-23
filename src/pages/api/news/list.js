import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "GET");

  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  const news = await prisma.news.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      publishedAt: "desc",
    },
  });

  const total = await prisma.news.count();

  res.status(200).json({
    status: true,
    message: "News fetched",
    total: total,
    data: news,
  });
};

export default handler;
