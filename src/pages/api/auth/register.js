const handler = async (req, res) => {
  setTimeout(() => {
    res.status(200).json({
      status: true,
      message: "Registration successful.",
    });
  }, 1000);
};

export default handler;
