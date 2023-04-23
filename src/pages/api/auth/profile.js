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

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      lastLogin: new Date(),
    },
  });

  return res.status(200).json({
    status: true,
    message: "User logged in",
    data: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.image,
      newsletter: user.newsletter,
      lastLogin: user.lastLogin,
    },
  });
};

export default handler;
