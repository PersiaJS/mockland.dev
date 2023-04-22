import prisma from "@/utils/prisma";
import Validator from "validatorjs";
import sendEmail from "../../../utils/sendEmail";

const handler = async (req, res) => {
  const rules = {
    email: "required|email",
  };

  const validation = new Validator(req.body, rules);

  if (validation.fails()) {
    return res.status(400).json({
      status: false,
      message: "Validation failed",
    });
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: false, message: "Method not allowed" });
  }

  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res
      .status(400)
      .json({ status: false, message: "User does not exist" });
  }

  await sendEmail({
    email,
    subject: "Password reset",
    message: `
        <h1>Password reset</h1>
        <br />
        <p>
            Click the link below to reset your password
            <a href="${process.env.CLIENT_URL}/?reset=${user.securityHash}">Reset password</a>
        </p>
        <br />
        <p>
            If you did not request a password reset, please ignore this email.
        </p>
        <p>
            If you have any questions, please contact us at <a href="mailto:
            ${process.env.EMAIL_ADDRESS}">${process.env.EMAIL_ADDRESS}</a>
        </p>
        <br />
        <p>Regards, Gazar.dev</p>
        <p>https://gazar.dev</p>
    `,
  });

  return res.status(200).json({
    status: true,
    message: "Email sent",
  });
};

export default handler;
