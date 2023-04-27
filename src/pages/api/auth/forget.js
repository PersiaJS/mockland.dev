import Validator from "validatorjs";
import sendEmail from "../../../utils/sendEmail";
import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import tokenMiddleware from "@/middlewares/tokenMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";

const handler = async (req, res) => {
  await corsMiddleware(req, res);
  await methodMiddleware(req, res, "POST");
  await tokenMiddleware(req, res);

  const rules = {
    email: "required|email",
    clientUrl: "required|string",
  };

  const validation = new Validator(req.body, rules);

  if (validation.fails()) {
    return res.status(400).json({
      status: false,
      message: "Validation failed",
    });
  }

  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
      memberId: req.user.id,
    },
  });

  if (!user) {
    return res
      .status(400)
      .json({ status: false, message: "User does not exist" });
  }

  await sendEmail({
    email,
    subject: `Password reset for user ${req.user.id}`,
    message: `
        <h1>Password reset</h1>
        <br />
        <p>
            Click the link below to reset your password
            <a href="${req.body.clientUrl}/?reset=${user.securityHash}">Reset password</a>
        </p>
        <br />
        <p>Regards, MockLand.dev</p>
        <p>https://mockland.dev</p>
    `,
  });

  return res.status(200).json({
    status: true,
    message: "Email sent",
  });
};

export default handler;
