import authMiddleware from "@/middlewares/authMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";
import methodMiddleware from "@/middlewares/methodMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "GET");
  await authMiddleware(req, res);

  return res.status(200).json({
    status: true,
    message: "User logged in",
    data: {
      token: req.user.token,
    },
  });
};

export default handler;
