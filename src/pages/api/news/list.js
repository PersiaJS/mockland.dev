import data from "../../../mocks/news";

const handler = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  if (req.method !== "GET") {
    res.status(200).json({
      status: false,
      message: "Method not allowed",
    });
    return;
  }

  const newsList = data.slice((page - 1) * limit, page * limit);

  res.status(200).json({
    status: true,
    data: newsList,
    page: page,
    limit: limit,
    total: data.length,
  });
};

export default handler;
