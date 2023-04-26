import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "GET");

  const { id } = req.query;

  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  if (!post) {
    res.status(200).json({
      status: false,
      message: "Post not found",
    });
    return;
  }

  res.status(200).json({
    status: true,
    message: "Post fetched",
    data: post,
  });
};

export default handler;
