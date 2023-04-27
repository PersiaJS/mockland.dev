import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "PUT");

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

  const { id } = req.query;
  const post = await prisma.post.findFirst({
    where: {
      id: id,
      memberId: req.user.id,
    },
  });

  if (!post) {
    res.status(200).json({
      status: false,
      message: "Post not found",
    });
    return;
  }

  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: req.body.title,
      body: req.body.body,
      tags: req.body.tags,
      reactions: req.body.reactions,
      images: req.body.images,
    },
  });

  res.status(200).json({
    status: true,
    message: "Post updated successfully",
  });
};

export default handler;
