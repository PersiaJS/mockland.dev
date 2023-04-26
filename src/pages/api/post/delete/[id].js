import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "DELETE");

  await tokenMiddleware(req, res);

  const { id } = req.query;

  const post = await prisma.post.findFirst({
    where: {
      id: id,
      memberId: req.user.id,
    },
  });

  if (!post) {
    res.status(200).json({
      status: false,
      message: "Post not found",
    });
    return;
  }

  await prisma.post.delete({
    where: {
      id: id,
    },
  });

  res.status(200).json({
    status: true,
    message: "Post deleted successfully",
  });
};

export default handler;
