import prisma from "@/utils/prisma";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: false, message: "Method not allowed" });
  }

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
