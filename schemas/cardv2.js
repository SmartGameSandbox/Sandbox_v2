const mongoose = require("mongoose");
const {
  Schema
} = mongoose;

const cardv2Schema = new Schema({
  id: {
    type: String,
    required: true,
    immutable: true,
    unique: true
  },
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
  imageSource: {
    front: {
      data: Buffer,
      contentType: String
    },
    back: {
      data: Buffer,
      contentType: String,
    },
    pile: {type: Array, default: []},
    type: { type: String, required: true, enum: ["front", "back"] },
    isFlipped: { type: Boolean, required: true },
    isLandscape: {
      type: Boolean,
      default: false,
    },
  },
}, {
  timestamps: true
});

module.exports.cardv2Schema = cardv2Schema;
module.exports.CardV2 = mongoose.model("cardsv2", cardv2Schema);