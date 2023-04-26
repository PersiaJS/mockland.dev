import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "PUT");

  await tokenMiddleware(req, res);

  const rules = {
    title: "required",
    description: "required",
    content: "required",
    image: "required",
    author: "required",
    slug: "required",
    publishedAt: "required",
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
  const news = await prisma.news.findFirst({
    where: {
      id: id,
      memberId: req.user.id,
    },
  });

  if (!news) {
    res.status(200).json({
      status: false,
      message: "News not found",
    });
    return;
  }

  const newsCheckSlug = await prisma.news.findFirst({
    where: {
      slug: req.body.slug,
      NOT: {
        id: id,
      },
    },
  });

  if (newsCheckSlug) {
    res.status(200).json({
      status: false,
      message: "News already exists",
    });
    return;
  }

  await prisma.news.update({
    where: {
      id: id,
    },
    data: {
      title: req.body.title,
      slug: req.body.slug,
      description: req.body.description,
      content: req.body.content,
      image: req.body.image,
      author: req.body.author,
      slug: req.body.slug,
      publishedAt: req.body.publishedAt,
    },
  });

  res.status(200).json({
    status: true,
    message: "News updated successfully",
  });
};

export default handler;
