import prisma from "@/utils/prisma";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ status: false, message: "Method not allowed" });
  }

  const { auth } = req.headers;

  if (!auth) {
    return res
      .status(400)
      .json({ status: false, message: "auth header is required" });
  }

  const user = await prisma.user.findFirst({
    where: {
      auth,
    },
  });

  if (!user) {
    return res
      .status(400)
      .json({ status: false, message: "User does not exist" });
  }

  return res.status(200).json({
    status: true,
    message: "User logged in",
    data: {
      token: user.token,
    },
  });
};

export default handler;
