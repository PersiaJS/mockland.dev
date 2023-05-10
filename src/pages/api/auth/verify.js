import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";
import tokenCounterMiddleware from "@/middlewares/tokenCounterMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "POST");
  await tokenMiddleware(req, res);
  await tokenCounterMiddleware(req, res);

  const { securityHash } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      securityHash,
    },
  });

  if (!user) {
    return res.status(200).json({ status: false, message: "User not found" });
  }

  const newSecurityHash = Math.random().toString(36).substring(2, 15);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      verified: true,
      securityHash: newSecurityHash,
    },
  });

  return res.status(200).json({ status: true, message: "User verified" });
};

export default handler;
