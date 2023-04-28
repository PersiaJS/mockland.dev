import corsMiddleware from "@/middlewares/corsMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  res.status(200).json({ text: "Hello World" });
};

export default handler;
