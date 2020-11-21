const express = require("express");
const schema = require("./../Models");
const router = express.Router();
const authorizationMiddleware = require("./../tools/routers/authorizationMiddleware");
const uploadImage = require("../tools/routers/uploadImg");
const fs = require("fs").promises;
const config = require("./../config");

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
    res.status(500).send({ message: "Some problems with server." });
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

router.delete("/", async (req, res) => {
  try {
    const ans = await schema.Product.deleteMany(req.query);
    res.send(ans);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
