import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import checkTokenMiddleware from "@/middlewares/checkTokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";
import tokenCounterMiddleware from "@/middlewares/tokenCounterMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);

  const methodResponse = await methodMiddleware(req, res, "GET");
  if (!methodResponse.status) {
    return res.status(methodResponse.code).json({
      status: false,
      message: methodResponse.message,
    });
  }

  await checkTokenMiddleware(req, res);
  await tokenCounterMiddleware(req, res);

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

  const carts = await prisma.cart.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: where,
    orderBy: {
      createdAt: "desc",
    },
  });

  const total = await prisma.cart.count({
    where: where,
  });

  res.status(200).json({
    status: true,
    message: "Cart fetched",
    total: total,
    data: carts,
  });
};

export default handler;
