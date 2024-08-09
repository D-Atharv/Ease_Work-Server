const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, "../uploads"),
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

router.post("/upload", upload.single("image"), (req, res) => {
  res.json({ success: true, message: "Image uploaded successfully!" });
});

module.exports = router;
