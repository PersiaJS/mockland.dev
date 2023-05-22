import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import Validator from "validatorjs";
import corsMiddleware from "@/middlewares/corsMiddleware";
import authMiddleware from "@/middlewares/authMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "GET");
  await authMiddleware(req, res);

  const validUserToGetData = ["me@ehsangazar.com", "exampleForTest@gmail.com"];

  if (!validUserToGetData.includes(req.user.email)) {
    return res
      .status(200)
      .json({ status: false, message: "User not access to this page!" });
  }
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
