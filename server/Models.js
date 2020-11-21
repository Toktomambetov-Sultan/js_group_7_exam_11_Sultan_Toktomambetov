const mongoose = require("mongoose");

const UserModel = require("./models/UserModel");

const User = mongoose.model("User", UserModel);

module.exports = {
  User,
};
