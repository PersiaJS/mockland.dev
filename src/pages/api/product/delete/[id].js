import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";
import tokenCounterMiddleware from "@/middlewares/tokenCounterMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "DELETE");

  await tokenMiddleware(req, res);
  await tokenCounterMiddleware(req, res);

  const { id } = req.query;

  const product = await prisma.product.findFirst({
    where: {
      id: id,
      memberId: req.user.id,
    },
  });

  if (!product) {
    res.status(200).json({
      status: false,
      message: "Product not found",
    });
    return;
  }

  await prisma.product.delete({
    where: {
      id: id,
    },
  });

  res.status(200).json({
    status: true,
    message: "Product deleted successfully",
  });
};

export default handler;
