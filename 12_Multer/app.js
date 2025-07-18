const express = require("express");
const app = express();
const port = 4000;
const multer = require("multer");
const crypto = require("crypto")
const path = require("path");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("view");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
      const fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});
const upload = multer({ storage: storage });

app.post("/upload", upload.single("image") ,(req, res) => {
    res.send(req.file)
    console.log(req.file)
});

app.listen(port, (req, res) => {
  console.log(`App running on port ${port}`);
});
