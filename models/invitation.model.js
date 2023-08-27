const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const invitationSchema = new Schema(
  {
    referencePerson: {
      type: String,
      required: "referencePerson is required",
    },
    status: {
      type: String,
      required: "status is required",
    },
    guests: [
      {
        name: String,
        confirmed: Boolean,
      },
    ],
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
  }
);

const Invitation = mongoose.model("Invitation", invitationSchema);
module.exports = Invitation;
