import methodMiddleware from "@/middlewares/methodMiddleware";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import Validator from "validatorjs";
import prisma from "../../../../lib/prisma";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "POST");

  await tokenMiddleware(req, res);

  const rules = {
    title: "required",
    description: "required",
    price: "required",
    discountPercentage: "required",
    rating: "required",
    stock: "required",
    brand: "required",
    category: "required",
    thumbnail: "required",
    images: "required",
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

  await prisma.product.create({
    data: {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      discountPercentage: req.body.discountPercentage,
      rating: req.body.rating,
      stock: req.body.stock,
      brand: req.body.brand,
      category: req.body.category,
      thumbnail: req.body.thumbnail,
      images: req.body.images,
      memberId: req.user.id,
    },
  });

  res.status(200).json({
    status: true,
    message: "Prodcut created successfully",
  });
};

export default handler;
