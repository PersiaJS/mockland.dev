import methodMiddleware from "@/middlewares/methodMiddleware";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import Validator from "validatorjs";
import prisma from "../../../../lib/prisma";
import corsMiddleware from "@/middlewares/corsMiddleware";
import tokenCounterMiddleware from "@/middlewares/tokenCounterMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);

  const methodResponse = await methodMiddleware(req, res, "POST");
  if (!methodResponse.status) {
    return res.status(methodResponse.code).json({
      status: false,
      message: methodResponse.message,
    });
  }

  const tokenResponse = await tokenMiddleware(req, res);
  if (!tokenResponse.status) {
    return res.status(tokenResponse.code).json({
      status: false,
      message: tokenResponse.message,
    });
  }

  await tokenCounterMiddleware(req, res);

  const rules = {
    title: "required",
    description: "required",
    content: "required",
    image: "required",
    slug: "required",
    author: "required",
    slug: "required",
  };

  const validation = new Validator(req.body, rules);

  if (validation.fails()) {
    res.status(422).json({
      status: false,
      message: "Validation failed",
      errors: validation.errors.all(),
    });
    return;
  }

  const newsCheckSlug = await prisma.news.findFirst({
    where: {
      slug: req.body.slug,
    },
  });

  if (newsCheckSlug) {
    res.status(200).json({
      status: false,
      message: "News already exists",
    });
    return;
  }

  await prisma.news.create({
    data: {
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      image: req.body.image,
      author: req.body.author,
      slug: req.body.slug,
      memberId: req.user.id,
      publishedAt: new Date(),
    },
  });

  res.status(200).json({
    status: true,
    message: "News created successfully",
  });
};

export default handler;
