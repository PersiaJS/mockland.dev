import methodMiddleware from "@/middlewares/methodMiddleware";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import Validator from "validatorjs";
import prisma from "../../../../lib/prisma";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "POST");

  await tokenMiddleware(req, res);

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

  await prisma.cart.create({
    data: {
      productId: req.body.productId,
      quantity: req.body.quantity,
      memberId: req.user.id,
    },
  });

  res.status(200).json({
    status: true,
    message: "Cart created successfully",
  });
};

export default handler;
