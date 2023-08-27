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

module.exports.sendInvitationUpdated = (updatedGuests, email) => {
  transporter
    .sendMail({
      from: "Anna & Pedro <ericaironchack@gmail.com>",
      to: email,
      subject: "Sua presença foi confirmada",
      html: `
        <h1>Obrigado por confirmar a sua presença no nosso casamento!</h1>
        <p>Abaixo você pode conferir os nomes dos convidados confirmados:

        ${updatedGuests.map((guest) => `<li>${guest}</li>`).join("")}

        Caso haja algum equívoco na lista acima, favor enviar um email para _annaluisabhz14@gmail.com_ solicitando a correção.
        
        Aproveitamos essa oportunidade para divulgar também nossa <link>lista de presentes</link para a pagina lista de presente>. Ajudaria muito a darmos o nosso próximo passo.
        
        Muito obrigado e aguardamos vocês para celebrar nossa união!
        
        Anna Luisa e Pedro</p>
      `,
    })
    .then((info) => console.log(info))
    .catch((error) => console.log(error));
};

module.exports.sendNewConfirmation = (updatedGuests) => {
  transporter
    .sendMail({
      from: "Anna & Pedro <ericaironchack@gmail.com>",
      to: "alnwolff@gmail.com",
      subject: "Confirmação de convidados",
      html: `
        <h1>Nova confirmação de convidados para o casamento:</h1>
        <p>${updatedGuests.map((guest) => `<li>${guest}</li>`).join("")}</p>
      `,
    })
    .then((info) => console.log(info))
    .catch((error) => console.log(error));
};
