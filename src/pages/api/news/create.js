import Validator from "validatorjs";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(200).json({
      status: false,
      message: "Method not allowed",
    });
    return;
  }

  const rules = {
    title: "required",
    descrtipion: "required",
    content: "required",
    image: "required",
    author: "required",
    slug: "required",
  };

  const validation = new Validator(req.body, rules);

  if (validation.fails()) {
    res.status(200).json({
      status: false,
      message: "Validation failed",
      errors: validation.errors.all(),
    });
    return;
  }

  if (!req.header?.token) {
    res.status(200).json({
      status: false,
      message: "Token is required",
    });
    return;
  }
};

export default handler;
