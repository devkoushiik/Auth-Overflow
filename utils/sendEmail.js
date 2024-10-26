const nodemailer = require("nodemailer");
const { nodeMailerConfig, userMailSender } = require("./nodemailer.config");

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport(nodeMailerConfig);
  return transporter.sendMail({
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });
};

// Create a transporter object

module.exports = sendEmail;
