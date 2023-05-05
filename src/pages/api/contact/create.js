import methodMiddleware from "@/middlewares/methodMiddleware";
import prisma from "../../../../lib/prisma";
import Validator from "validatorjs";

const handler = async (req, res) => {
  await methodMiddleware(req, res, "POST");

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
  };
  

  await prisma.contact.create({
    data: {
        email: req.body.email,
        name: req.body.name,
        description: req.body.description,
    }
  });

  res.status(200).json({
    status: true,
    message: "Contact request created successfully",
  });
};

export default handler;
