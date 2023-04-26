import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import checkTokenMiddleware from "@/middlewares/checkTokenMiddleware";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "GET");
  await checkTokenMiddleware(req, res);

  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
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

  const posts = await prisma.post.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: where,
    orderBy: {
      createdAt: "desc",
    },
  });

  const total = await prisma.post.count({
    where: where,
  });

  res.status(200).json({
    status: true,
    message: "Posts fetched",
    total: total,
    data: posts,
  });
};

export default handler;
