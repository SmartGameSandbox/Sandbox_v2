// Schema for registered users.
// Used for authentication and data retrieval.
// The field "games" contains array of game objects that have been created by this user (see game.js).

const mongoose = require("mongoose");
const { gameSchema } = require("./game");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlength: 20,
    required: true,
    index: true,
    unique: true,
  },
  email: { type: String, required: true },
  password: {
    type: String,
    min: [4, "Password too short"],
    max: [20, "Password too long"],
  },
  games: [gameSchema],
});

module.exports.userSchema = userSchema;
module.exports.User = mongoose.model("user", userSchema);
