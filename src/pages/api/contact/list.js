import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import corsMiddleware from "@/middlewares/corsMiddleware";
import authMiddleware from "@/middlewares/authMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);

  const methodResponse = await methodMiddleware(req, res, "GET");
  if (!methodResponse.status) {
    return res.status(methodResponse.code).json({
      status: false,
      message: methodResponse.message,
    });
  }

  const authResposne = await authMiddleware(req, res);
  if (!authResposne.status) {
    return res.status(authResposne.code).json({
      status: false,
      message: authResposne.message,
    });
  }

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
