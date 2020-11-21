const express = require("express");
const schema = require("../Models");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await schema.Category.find();
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
