const methodMiddleware = async (req, res, method = "GET", next) => {
  if (req.method !== method) {
    return { status: false, code: 405, message: "Method not allowed" };
  }
  return { status: true, code: 200, message: "Method allowed" };
};

export default methodMiddleware;
