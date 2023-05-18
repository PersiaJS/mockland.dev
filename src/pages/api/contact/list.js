import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import Validator from "validatorjs";
import corsMiddleware from "@/middlewares/corsMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "GET");

  const contacts = await prisma.contact.findMany();

  const total = await prisma.contact.count();

  res.status(200).json({
    status: true,
    message: "Contacts fetched",
    total: total,
    data: contacts,
  });
};

export default handler;
