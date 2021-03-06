const express = require("express");
const config = require("./config");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const userRouter = require("./routers/userRouter");
const categoryRouter = require("./routers/categoryRouter");
const productRouter = require("./routers/productRouter");

const run = async () => {
  try {
    await mongoose.connect(config.db.url + config.db.name, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      autoIndex: true,
    });
  } catch (error) {
    console.error(error);
    return;
  }
  console.log("Connected to mongodb.");
  

  app.use(cors());
  app.use(express.static("public"));
  app.use(express.json());

  app.use("/users", userRouter);
  app.use("/categories", categoryRouter);
  app.use("/products", productRouter);

  app.listen(config.port, () => {
    console.log(`Server started on ${config.port} port.`);
  });
};
run();
