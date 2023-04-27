import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma";

const userAuthMiddleware = async (req, res) => {
  const { auth } = req.headers;
  if (!auth) {
    return res
      .status(400)
      .json({ status: false, message: "auth header is required" });
  }

  if (!jwt.verify(auth, process.env.JWT_SECRET)) {
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

  req.user = user;
};

export default userAuthMiddleware;
