import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma";

const checkTokenMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(400).json({ status: false, message: "Invalid token" });
    }

    const user = await prisma.member.findFirst({
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
  }
};

export default checkTokenMiddleware;
