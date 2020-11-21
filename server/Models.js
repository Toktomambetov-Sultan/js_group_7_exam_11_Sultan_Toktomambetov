const mongoose = require("mongoose");

const UserModel = require("./models/UserModel");
const CategoryModel = require("./models/CategoryModel");
const ProductModel = require("./models/ProductModel");

const User = mongoose.model("User", UserModel);
const Category = mongoose.model("Category", CategoryModel);
const Product = mongoose.model("Product", ProductModel);

module.exports = {
  User,
  Category,
  Product,
};
