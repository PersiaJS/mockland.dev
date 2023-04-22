import data from "../../../../mocks/news";

const handler = async (req, res) => {
  const { slug } = req.query;

  if (req.method !== "GET") {
    res.status(200).json({
      status: false,
      message: "Method not allowed",
    });
    return;
  }

  const newsList = data.find((item) => item.slug === slug);

  if (!newsList) {
    res.status(200).json({
      status: false,
      message: "Invalid slug",
    });
    return;
  }

  res.status(200).json({
    status: true,
    data: newsList,
  });
};

export default handler;
