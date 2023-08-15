const Comment = require("../models/comment.model");
const nodemailer = require("../config/nodemailer");

module.exports.list = (req, res, next) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((error) => next(error));
};
module.exports.create = (req, res, next) => {
  Comment.create({
    text: req.body.text,
    author: req.body.author,
    email: req.body.email,
  })
    .then((comment) => {
      nodemailer.sendConfirmationEmail(comment);
      nodemailer.sendNewCommentEmail();
      res.json(comment);
    })
    .catch((error) => next(error));
};
