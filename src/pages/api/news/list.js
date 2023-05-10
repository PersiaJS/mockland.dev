import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import checkTokenMiddleware from "@/middlewares/checkTokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";
import tokenCounterMiddleware from "@/middlewares/tokenCounterMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "GET");
  await checkTokenMiddleware(req, res);
  await tokenCounterMiddleware(req, res);

  const page = req.query?.page || 1;
  const limit = req.query?.limit || 10;
  let where = {};

  if (req.user?.id) {
    where = {
      OR: [
        {
          memberId: req.user.id,
        },
        {
          memberId: "MAIN",
        },
      ],
    };
  }

  const news = await prisma.news.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: where,
    orderBy: {
      publishedAt: "desc",
    },
  });

  const total = await prisma.news.count({
    where: where,
  });

  res.status(200).json({
    status: true,
    message: "News fetched",
    total: total,
    data: news,
  });
};

export default handler;
