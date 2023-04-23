import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma";

const tokenMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res
      .status(400)
      .json({ status: false, message: "token header is required" });
  }

  if (!jwt.verify(token, process.env.JWT_SECRET)) {
    return res.status(400).json({ status: false, message: "Invalid token" });
  }

  const user = await prisma.user.findFirst({
    where: {
      token,
    },
  });

  if (!user) {
    return res
      .status(400)
      .json({ status: false, message: "User does not exist" });
  }

  req.user = user;
};

export default tokenMiddleware;
