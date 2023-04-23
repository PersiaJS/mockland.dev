import prisma from "@/utils/prisma";

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const handler = async (req, res) => {
  res.status(200).json({ status: true, message: "Imported" });
};

export default handler;
