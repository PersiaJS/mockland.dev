import corsMiddleware from "@/middlewares/corsMiddleware";

const handler = (req, res) => {
  await corsMiddleware(req, res);
  res.status(200).json({ text: "Hello World" });
};

export default handler;
