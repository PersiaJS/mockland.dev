import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";
import corsMiddleware from "@/middlewares/corsMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);

  const methodResponse = await methodMiddleware(req, res, "GET");
  if (!methodResponse.status) {
    return res.status(methodResponse.code).json({
      status: false,
      message: methodResponse.message,
    });
  }

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
