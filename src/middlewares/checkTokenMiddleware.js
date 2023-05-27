import prisma from "../../lib/prisma";

// JUST CHECKING, NOT PREVENTING ANYTHING
const checkTokenMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    const user = await prisma.member.findFirst({
      where: {
        token,
      },
    });
    req.user = user;
  }
};

export default checkTokenMiddleware;
