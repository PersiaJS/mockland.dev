import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";
import tokenCounterMiddleware from "@/middlewares/tokenCounterMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);

  const methodResponse = await methodMiddleware(req, res, "DELETE");
  if (!methodResponse.status) {
    return res.status(methodResponse.code).json({
      status: false,
      message: methodResponse.message,
    });
  }

  const tokenResponse = await tokenMiddleware(req, res);
  if (!tokenResponse.status) {
    return res.status(tokenResponse.code).json({
      status: false,
      message: tokenResponse.message,
    });
  }

  await tokenCounterMiddleware(req, res);

  const { id } = req.query;

  const cart = await prisma.cart.findFirst({
    where: {
      id: id,
      memberId: req.user.id,
    },
  });

  if (!cart) {
    res.status(200).json({
      status: false,
      message: "Cart not found",
    });
    return;
  }

  await prisma.cart.delete({
    where: {
      id: id,
    },
  });

  res.status(200).json({
    status: true,
    message: "Cart deleted successfully",
  });
};

export default handler;
