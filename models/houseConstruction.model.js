const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema(
  {
    soldPieces: {
      type: Number,
      required: "soldPieces is required",
    },
    remainingPieces: {
      type: Number,
      required: "remainingPieces is required",
    },
    totalPieces: {
      type: Number,
      required: "totalPieces is required",
    },
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

const House = mongoose.model("House", houseSchema);
module.exports = House;
