import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "PUT");

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

  const { id } = req.query;
  const product = await prisma.product.findFirst({
    where: {
      id: id,
      userId: req.user.id,
    },
  });

  if (!product) {
    res.status(200).json({
      status: false,
      message: "Product not found",
    });
    return;
  }

  await prisma.product.update({
    where: {
      id: id,
    },
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
    },
  });

  res.status(200).json({
    status: true,
    message: "Product updated successfully",
  });
};

export default handler;
