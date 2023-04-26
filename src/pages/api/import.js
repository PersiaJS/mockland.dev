import prisma from "../../../lib/prisma";
import data from "./posts";

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const handler = async (req, res) => {
  await asyncForEach(data.posts, async (post) => {
    console.log("data", post.id);
    await prisma.post.create({
      data: {
        title: post.title,
        body: post.body,
        tags: post.tags,
        reactions: post.reactions,
      },
    });
  });

  res
    .status(200)
    .json({ status: true, message: "Imported Post", lenght: data.length });
};

export default handler;
