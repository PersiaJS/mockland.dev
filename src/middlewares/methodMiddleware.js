const methodMiddleware = async (req, res, method = "GET") => {
  if (req.method !== method) {
    res.status(405).json({ status: false, message: "Method not allowed" });
    return true;
  }
};

export default methodMiddleware;
