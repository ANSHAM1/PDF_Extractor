const router = require("express").Router();
const path = require("path");
const { child } = require("../child_python.js");
const { upload } = require("./img_multer.js");
const fs = require("fs");

router.route("/upload").post(upload.single("file"), (req, res) => {
  child("pdf_extract.py");
});

router.route("/Images").get((req, res) => {
  const dirPath = path.join(__dirname, "../static/Images");

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(500).send("Unable to scan directory");
    }
    const fileList = files.filter((file) =>
      fs.lstatSync(path.join(dirPath, file)).isFile()
    );

    res.json(fileList);
  });
});

router.route("/show_text").get((req, res) => {
  const file = path.join(__dirname, "../static/Content/output.txt");
  const text = fs.readFileSync(file, "utf-8");
  res.json(text);
});

module.exports = { router };
