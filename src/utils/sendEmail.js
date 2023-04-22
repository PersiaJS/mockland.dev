import nodeMailer from "nodemailer";

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodeMailer.createTransport({
    host: process.env.SEND_IN_BLUE_URL,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SEND_IN_BLUE_USER,
      pass: process.env.SEND_IN_BLUE_PASSWORD,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: "me@gazar.dev",
    to: options.email,
    subject: options.subject,
    html: `
      ${options.message}    
    `,
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
