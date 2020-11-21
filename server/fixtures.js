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
  const [user1, user2] = await schema.User.create(
    {
      username: "Sultan",
      password: "H1h2h3h4",
      displayName: "Sultan",
      phoneNumber: "+996700111111",
      token: nanoid(),
    },
    {
      username: "Alisher",
      password: "H1h2h3h4",
      displayName: "Alish",
      phoneNumber: "+996700222222",
      token: nanoid(),
    }
  );

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
  await schema.Product.create(
    {
      image: "image1.jpeg",
      category: category1._id,
      title: "Title1",
      price: 40,
      description: "description1",
      user: user1._id,
    },
    {
      image: "image2.jpeg",
      category: category2._id,
      title: "Title22",
      price: 42,
      description: "description2",
      user: user2._id,
    }
  );
  db.close();
});
