import prisma from "@/utils/prisma";

const handler = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  if (req.method !== "GET") {
    res.status(200).json({
      status: false,
      message: "Method not allowed",
    });
    return;
  }

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
    total,
    data: news,
  });
};

export default handler;
