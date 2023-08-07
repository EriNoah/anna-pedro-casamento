const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: {
    type: String,
    required: "O mensagem do comentário é obrigatório",
  },
  confirm: {
    type: Boolean,
    default: false,
  },
  author: {
    type: String,
    required: "Nome é obrigatório",
    minlength: [3, "O nome precisa de pelo menos 3 caracteres"],
    unique: true
  },
  email: {
    type: String,
    required: "O e-mail é obrigatório",
    match: [/^\S+@\S+\.\S+$/, "O e-mail do usuário deve ser válido"],
    unique: true
  }
},
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  })

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;