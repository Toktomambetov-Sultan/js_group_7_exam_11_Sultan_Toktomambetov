const schema = require("./Models");
const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const config = require("./config");
mongoose.connect(config.db.url + config.db.name, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  autoIndex: true,
});
const db = mongoose.connection;

db.once("open", async () => {
  try {
    await db.dropDatabase();
  } catch (e) {
    console.log("Collections were not present, skipping drop...");
  }
  const user = await schema.User.create({
    username: "Sultan",
    password: "H1h2h3h4",
    displayName: "Sultan",
    phoneNumber: "+996700120324",
    token: nanoid(),
  });
  const [category1, category2] = await schema.Category.create(
    {
      name: "technics",
    },
    {
      name: "medicine",
    },
    {
      name: "transport",
    },
    {
      name: "chancellery",
    }
  );
  // const [product1, product2] = await schema.Category.create
  db.close();
});
