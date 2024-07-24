const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./static");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "." + "pdf");
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
