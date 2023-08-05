const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ericaironchack@gmail.com",
    pass: process.env.MAIL_PASS,
  },
});

module.exports.sendConfirmationEmail = (comment) => {
  transporter
    .sendMail({
      from: "Anna & Pedro <ericaironchack@gmail.com>",
      to: comment.email,
      subject: "Comment to approve",
      html: `
        <h1>Thank you for leaving a comment</h1>
        <p>We will review it and it will be posted as soon as possible!</p>
      `,
    })
    .then((info) => console.log(info))
    .catch((error) => console.log(error));
};
