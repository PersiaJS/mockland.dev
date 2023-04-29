import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma";

const tokenMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    res
      .status(400)
      .json({ status: false, message: "token header is required" });
    return true;
  }

  if (!jwt.verify(token, process.env.JWT_SECRET)) {
    res.status(400).json({ status: false, message: "Invalid token" });
    return true;
  }

  const user = await prisma.member.findFirst({
    where: {
      token,
    },
  });

  if (!user) {
    res.status(400).json({ status: false, message: "User does not exist" });
    return true;
  }

  req.user = user;
};

export default tokenMiddleware;
