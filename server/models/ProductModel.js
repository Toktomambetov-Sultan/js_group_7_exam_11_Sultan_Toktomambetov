const mongoose = require("mongoose");
const mongooseIdValidator = require("mongoose-id-validator");
const config = require("../config");
const Schema = mongoose.Schema;
const fs = require("fs").promises;

const ProductModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

ProductModel.plugin(mongooseIdValidator);

ProductModel.pre("deleteMany", async () => {
  const data = await mongoose.model("Product").find();
  for (item of data) {
    item.image &&
      (await fs.unlink(config.ImageUploadingDir + "/" + item.image));
  }
});

module.exports = ProductModel;
