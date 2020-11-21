const mongoose = require("mongoose");
const uniqueValidate = require("../tools/models/uniqueValidate");
const Schema = mongoose.Schema;

const PostModel = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    validate: uniqueValidate("Category", "name"),
  },
});

PostModel.pre("deleteMany", async () => {});

module.exports = PostModel;
