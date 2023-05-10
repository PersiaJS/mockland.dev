import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "PUT");

  const { securityHash } = req.body;

  const user = await prisma.member.findFirst({
    where: {
      securityHash,
    },
  });

  if (!user) {
    return res.status(200).json({ status: false, message: "User not found" });
  }

  const newSecurityHash = Math.random().toString(36).substring(2, 15);

  await prisma.member.update({
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
