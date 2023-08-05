const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: {
    type: String,
    required: "Comment text is required",
  },
  confirm: {
    type: Boolean,
    default: false,
  },
  author: {
    type: String,
    required: "Author is required",
    minlength: [3, "Author needs at least 2 chars"],
    unique: true
  },
  email: {
    type: String,
    required: "Email is required",
    match: [/^\S+@\S+\.\S+$/, "User email must be valid"],
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