const path = require("path");
const rootDir = __dirname;
module.exports = {
  port: 8000,
  ImageUploadingDir: path.join(rootDir, "public/images"),
  rootDir,
  db: {
    name: "shop",
    url: "mongodb://localhost:27017/",
  },
};
