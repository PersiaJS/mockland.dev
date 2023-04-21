const handler = async (req, res) => {
  setTimeout(() => {
    res.status(200).json({
      status: true,
      token: "1234567890",
      message: "Login successful.",
    });
  }, 1000);
};

export default handler;
