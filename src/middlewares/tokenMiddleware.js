import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma";

const tokenMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return { status: false, code: 400, message: "token header is required" };
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return { status: false, code: 400, message: "Invalid token" };
  }

  const user = await prisma.member.findFirst({
    where: {
      token,
    },
  });

  if (!user) {
    return { status: false, code: 400, message: "Invalid token" };
  }

  req.user = user;
  return { status: true, code: 200, message: "Valid token" };
};

export default tokenMiddleware;
