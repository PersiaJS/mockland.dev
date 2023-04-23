import prisma from "@/utils/prisma";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ status: false, message: "Method not allowed" });
  }

  const { token } = req.headers;

  if (!token) {
    return res.status(400).json({ status: false, message: "Invalid token" });
  }

  jwt.decode(token, process.env.JWT_SECRET);

  if (!jwt.verify(token, process.env.JWT_SECRET)) {
    return res.status(400).json({ status: false, message: "Invalid token" });
  }

  res.status(200).json({
    status: true,
    message: "Token Validated",
  });
};

export default handler;
