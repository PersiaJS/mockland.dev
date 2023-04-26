import prisma from "../../../lib/prisma";
import data from "./categories";

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const handler = async (req, res) => {
  await asyncForEach(data, async (category) => {
    console.log("category", category);
    await prisma.category.create({
      data: {
        name: category,
      },
    });
  });

  res
    .status(200)
    .json({ status: true, message: "Imported Post", lenght: data.length });
};

export default handler;
