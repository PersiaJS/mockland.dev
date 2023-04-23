import prisma from "@/utils/prisma";
import jwt from "jsonwebtoken";

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

  try {
    if (!jwt.verify(auth, process.env.JWT_SECRET)) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid auth token" });
    }
  } catch (err) {
    return res
      .status(400)
      .json({ status: false, message: "Invalid auth token" });
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

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1w",
  });

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      token,
    },
  });

  return res.status(200).json({
    status: true,
    message: "New Token Generated",
    data: {
      token,
    },
  });
};

export default handler;
