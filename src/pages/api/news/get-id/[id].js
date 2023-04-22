import data from "../../../../mocks/news";

const handler = async (req, res) => {
  const { id } = req.query;

  if (id < 0 || id > data.length) {
    res.status(200).json({
      status: false,
      message: "Invalid id",
    });
    return;
  }

  if (req.method !== "GET") {
    res.status(200).json({
      status: false,
      message: "Method not allowed",
    });
    return;
  }

  const newsList = data[id - 1];

  res.status(200).json({
    status: true,
    data: newsList,
  });
};

export default handler;
