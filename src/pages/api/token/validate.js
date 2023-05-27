import corsMiddleware from "@/middlewares/corsMiddleware";
import methodMiddleware from "@/middlewares/methodMiddleware";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  await corsMiddleware(req, res);

  const methodResponse = await methodMiddleware(req, res, "GET");
  if (!methodResponse.status) {
    return res.status(methodResponse.code).json({
      status: false,
      message: methodResponse.message,
    });
  }

  const { token } = req.headers;

  if (!token) {
    return res.status(400).json({ status: false, message: "Invalid token" });
  }

  jwt.decode(token, process.env.JWT_SECRET);

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return { status: false, code: 400, message: "Invalid token" };
  }

  res.status(200).json({
    status: true,
    message: "Token Validated",
  });
};

export default handler;
