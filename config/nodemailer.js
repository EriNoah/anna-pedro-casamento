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
      subject: "Comentário enviado com sucesso",
      html: `
        <h1>Thank you for leaving a comment</h1>
        <p>Seu comentário será revisado e, caso aprovado, será disponibilizado o mais breve possível.</p>
      `,
    })
    .then((info) => console.log(info))
    .catch((error) => console.log(error));
};

module.exports.sendNewCommentEmail = () => {
  transporter
    .sendMail({
      from: "Anna & Pedro <ericaironchack@gmail.com>",
      to: "alnwolff@gmail.com",
      subject: "Comment to approve",
      html: `
        <h1>Nuevo comentario!</h1>
        <p>Hay un nuevo comentario pendiente de aprobacion</p>
      `,
    })
    .then((info) => console.log(info))
    .catch((error) => console.log(error));
};
