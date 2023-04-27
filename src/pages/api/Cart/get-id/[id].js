import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "GET");

  const { id } = req.query;

  const cart = await prisma.cart.findUnique({
    where: {
      id: id,
    },
  });

  if (!cart) {
    res.status(200).json({
      status: false,
      message: "Cart not found",
    });
    return;
  }

  res.status(200).json({
    status: true,
    message: "Cart fetched",
    data: cart,
  });
};

export default handler;
