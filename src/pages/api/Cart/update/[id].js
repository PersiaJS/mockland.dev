import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";
import tokenCounterMiddleware from "@/middlewares/tokenCounterMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);

  const methodResponse = await methodMiddleware(req, res, "PUT");
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

  const rules = {
    productId: "required",
    quantity: "required",
  };

  const validation = new Validator(req.body, rules);

  if (validation.fails()) {
    res.status(200).json({
      status: false,
      message: "Validation failed",
      errors: validation.errors.all(),
    });
    return;
  }

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

  await prisma.cart.update({
    where: {
      id: id,
    },
    data: {
      productId: req.body.productId,
      quantity: req.body.quantity,
    },
  });

  res.status(200).json({
    status: true,
    message: "Cart updated successfully",
  });
};

export default handler;
