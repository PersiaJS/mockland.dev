import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import corsMiddleware from "@/middlewares/corsMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "GET");

  const categories = await prisma.category.findMany();

  res.status(200).json({
    status: true,
    message: "categories fetched",
    data: categories,
  });
};

export default handler;
