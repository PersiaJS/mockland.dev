import prisma from "@/utils/prisma";
import Validator from "validatorjs";

const handler = async (req, res) => {
  const rules = {
    firstName: "required|string",
    lastName: "required|string",
    newsletter: "required|boolean",
  };

  const validation = new Validator(req.body, rules);

  if (validation.fails()) {
    return res.status(400).json({
      status: false,
      message: "Validation failed",
    });
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: false, message: "Method not allowed" });
  }

  const { firstName, lastName, newsletter } = req.body;

  const { auth } = req.headers;

  if (!auth) {
    return res
      .status(400)
      .json({ status: false, message: "auth header is required" });
  }

  try {
    if (!jwt.verify(auth, process.env.JWT_SECRET)) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid auth token" });
    }
  } catch (err) {
    return res
      .status(400)
      .json({ status: false, message: "Invalid auth token" });
  }

  const user = await prisma.user.findFirst({
    where: {
      auth,
    },
  });

  if (!user) {
    return res
      .status(400)
      .json({ status: false, message: "User does not exist" });
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      firstName,
      lastName,
      newsletter,
    },
  });

  return res.status(200).json({
    status: true,
    message: "User updated",
  });
};

export default handler;
