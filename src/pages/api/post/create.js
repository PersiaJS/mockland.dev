import methodMiddleware from "@/middlewares/methodMiddleware";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import Validator from "validatorjs";
import prisma from "../../../../lib/prisma";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "POST");

  await tokenMiddleware(req, res);

  const rules = {
    title: "required",
    body: "required",
    tags: "required",
    reactions: "required",
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

  await prisma.post.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      tags: req.body.tags,
      reactions: req.body.reactions,
      memberId: req.user.id,
    },
  });

  res.status(200).json({
    status: true,
    message: "Post created successfully",
  });
};

export default handler;
