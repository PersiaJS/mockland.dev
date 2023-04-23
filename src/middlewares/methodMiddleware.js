const methodMiddleware = async (req, res, method = "GET") => {
  if (req.method !== method) {
    return res
      .status(405)
      .json({ status: false, message: "Method not allowed" });
  }
};

export default methodMiddleware;
