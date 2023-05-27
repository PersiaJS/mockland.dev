import authMiddleware from "@/middlewares/authMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";
import methodMiddleware from "@/middlewares/methodMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);

  const methodResponse = await methodMiddleware(req, res, "GET");
  if (!methodResponse.status) {
    return res.status(methodResponse.code).json({
      status: false,
      message: methodResponse.message,
    });
  }

  const authResposne = await authMiddleware(req, res);
  if (!authResposne.status) {
    return res.status(authResposne.code).json({
      status: false,
      message: authResposne.message,
    });
  }

  return res.status(200).json({
    status: true,
    message: "User logged in",
    data: {
      token: req.user.token,
    },
  });
};

export default handler;
