import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma";

const authMiddleware = async (req, res) => {
  const { auth } = req.headers;
  if (!auth) {
    return { status: false, code: 400, message: "auth header is required" };
  }

  try {
    jwt.verify(auth, process.env.JWT_SECRET);
  } catch (err) {
    return { status: false, code: 400, message: "Invalid auth token" };
  }

  const user = await prisma.member.findFirst({
    where: {
      auth,
    },
  });

  if (!user) {
    return { status: false, code: 400, message: "Invalid auth" };
  }

  req.user = user;
  return { status: true, code: 200, message: "Valid auth" };
};

export default authMiddleware;
