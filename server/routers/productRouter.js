const express = require("express");
const schema = require("../Models");
const router = express.Router();
const authorizationMiddleware = require("../tools/routers/authorizationMiddleware");
const uploadImage = require("../tools/routers/uploadImg");
const fs = require("fs").promises;
const config = require("../config");

router.get("/", async (req, res) => {
  try {
    const products = await schema.Product.find(req.query)
      .populate({
        path: "user",
      })
      .populate({
        path: "category",
      });
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post(
  "/",
  authorizationMiddleware,
  uploadImage.any(),
  async (req, res) => {
    const file = req.files.find((item) => item.fieldname === "image");
    try {
      const product = new schema.Product({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
      });
      product.image = file && file.filename;
      product.user = req.user._id;
      await product.save();

      return res.send(product);
    } catch (error) {
      file && (await fs.unlink(config.ImageUploadingDir + "/" + file.filename));
      res.status(400).send(error);
    }
  }
);

router.post("/delete", authorizationMiddleware, async (req, res) => {
  try {
    const product = await schema.Product.findOne({
      _id: req.body.id,
    });
    if (String(product.user._id) !== String(req.user._id)) {
      return res
        .status(403)
        .send({ errors: { _id: { message: "Users don't match" } } });
    }
    const ans = await schema.Product.deleteOne(req.query);
    res.send(ans);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
