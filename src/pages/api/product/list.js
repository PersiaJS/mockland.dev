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
          userId: req.user.id,
        },
        {
          userId: "MAIN",
        },
      ],
    };
  }

  const products = await prisma.products.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: where,
    orderBy: {
      publishedAt: "desc",
    },
  });

  const total = await prisma.products.count({
    where: where,
  });

  res.status(200).json({
    status: true,
    message: "Products fetched",
    total: total,
    data: products,
  });
};

export default handler;
