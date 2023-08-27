const Invitation = require("../models/invitation.model");
const nodemailer = require("../config/nodemailer");

module.exports.list = (req, res, next) => {
  Invitation.find({ referencePerson: req.params.referencePerson })
    .then((invitation) => {
      if (!invitation.length) {
        return res.status(404).json({ message: "Convite não encontrado" });
      }

      if (invitation[0].status === "confirmed") {
        return res.status(400).json({ message: "Convite já confirmado" });
      }

      return res.json(invitation);
    })
    .catch((error) => next(error));
};

module.exports.update = (req, res, next) => {
  const { updatedInvitation, email } = req.body;
  const updatedGuests = updatedInvitation.guests
    .filter((guest) => {
      return guest.confirmed;
    })
    .map((guest) => {
      return guest.name;
    });

  Invitation.findByIdAndUpdate(updatedInvitation.id, {
    guests: updatedInvitation.guests,
    status: updatedInvitation.status,
  })
    .then((invitation) => {
      nodemailer.sendInvitationUpdated(updatedGuests, email);
      nodemailer.sendNewConfirmation(updatedGuests, email);
      res.json(invitation);
    })
    .catch((error) => next(error));
};
