import prisma from "@/utils/prisma";

const handler = async (req, res) => {
  const { id } = req.query;

  if (req.method !== "GET") {
    res.status(200).json({
      status: false,
      message: "Method not allowed",
    });
    return;
  }

  const news = await prisma.news.findUnique({
    where: {
      id: id,
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
