const sendEmail = require("./sendEmail");
const sendResetPasswordEmail = async ({ name, email, token, origin }) => {
  const resetURL = `${origin}/user/reset-password?token=${token}&email=${email}`;

  const message = `<p>Please confirm your email by clicking on the following link: <a href="${resetURL}">click here to verify</a></p>`;

  return sendEmail({
    to: email,
    subject: "Reset Password",
    html: `<h4>Hello, ${name}</h4> ${message}`,
  });
};

module.exports = sendResetPasswordEmail;
