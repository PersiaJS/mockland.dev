const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({
      status: false,
      message: "Method not allowed",
    });
    return;
  }

  if (!req.headers.authorization) {
    res.status(401).json({
      status: false,
      message: "Unauthorized",
    });
    return;
  }

  setTimeout(() => {
    res.status(200).json({
      status: true,
      profile: {
        firstName: "John",
        lastName: "Doe",
        email: "john@doe.com",
      },
    });
  }, 1000);
};

export default handler;
