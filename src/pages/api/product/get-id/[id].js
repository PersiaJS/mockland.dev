import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "GET");

  const { id } = req.query;

  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  if (!product) {
    res.status(200).json({
      status: false,
      message: "Product not found",
    });
    return;
  }

  res.status(200).json({
    status: true,
    message: "Product fetched",
    data: product,
  });
};

export default handler;
