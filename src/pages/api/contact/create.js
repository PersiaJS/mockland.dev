import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import Validator from "validatorjs";
import sendEmail from "@/utils/sendEmail";

const handler = async (req, res) => {
  const methodResponse = await methodMiddleware(req, res, "POST");
  if (!methodResponse.status) {
    return res.status(methodResponse.code).json({
      status: false,
      message: methodResponse.message,
    });
  }

  const rules = {
    email: "required|email",
    name: "required",
    description: "required",
  };

  const validation = new Validator(req.body, rules);
  if (validation.fails()) {
    return res.status(400).json({
      status: false,
      message: "Validation failed",
    });
  }

  await prisma.contact.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      description: req.body.description,
    },
  });

  await sendEmail({
    email: "me@ehsangazar.com",
    subject: `New Contact Message From ${req.body.name}`,
    message: `
      <h1>${req.body.name}</h1>
      <h2>${req.body.email}</h2>
      <br />
      <h4>message: </h4>
      <p>${req.body.description}</p>
      <p>https://mockland.dev</p>
    `,
  });

  res.status(200).json({
    status: true,
    message: "Contact request created successfully",
  });
};

export default handler;
