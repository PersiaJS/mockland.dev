import prisma from "../../lib/prisma";

const tokenCounterMiddleware = async (req, res) => {
  const { user } = req;
  const date = new Date();

  if (user) {
    const tokenUsage = await prisma.tokenUsage.findFirst({
      where: {
        month: date.getMonth(),
        year: date.getFullYear(),
        memberId: user.id,
      },
    });

    if (tokenUsage) {
      await prisma.tokenUsage.update({
        where: {
          id: tokenUsage.id,
        },
        data: {
          count: tokenUsage.count + 1,
        },
      });
    } else {
      await prisma.tokenUsage.create({
        data: {
          month: date.getMonth(),
          year: date.getFullYear(),
          memberId: user.id,
          count: 1,
        },
      });
    }
  }
};

export default tokenCounterMiddleware;
