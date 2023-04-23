import prisma from "@/utils/prisma";

const handler = async (req, res) => {
  const { id } = req.query;

  if (req.method !== "PUT") {
    res.status(200).json({
      status: false,
      message: "Method not allowed",
    });
    return;
  }

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
