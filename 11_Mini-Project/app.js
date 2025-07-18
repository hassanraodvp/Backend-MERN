const express = require("express");
const app = express();
const port = 2300;
const userModel = require("./models/user");
const postModel = require("./models/post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const crypto = require("crypto")
const path = require("path");
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/upload", (req, res) => {
  res.render("img");
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

app.post("/upload", isLoggedIn , upload.single("image"), async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  user.profilePic = req.file.filename;
  await user.save();
  res.redirect("/profile")
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isLoggedIn, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("post");
  res.render("profile", { user });
});

app.post("/post", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  let { title, content } = req.body;
  let post = await postModel.create({
    author: user._id,
    title,
    content,
  });
  user.post.push(post._id);
  await user.save();
  res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id });
  res.render("edit", { post });
});

app.post("/update/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOneAndUpdate({ _id: req.params.id });
  let { title, content } = req.body;
  post.title = title;
  post.content = content;
  await post.save();
  res.redirect("/profile");
});

app.get("/delete/:id", async (req, res) => {
  let id = req.params.id;
  let post = await postModel.findByIdAndDelete(id);
  res.redirect("/profile");
});

app.post("/register", async (req, res) => {
  let { name, username, email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    res.json({ message: "User already exists" });
  }
  bcrypt.genSalt(10, async (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      console.log(hash);
      let user = await userModel.create({
        name,
        username,
        email,
        password: hash,
      });
      let token = jwt.sign({ email: email, userid: user._id }, "secret", {
        expiresIn: "1h",
      });
      res.cookie("token", token);
      res.redirect("/login");
    });
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.status(400).send("Invalid Credential");
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "secret", {
        expiresIn: "1h",
      });
      res.cookie("token", token);
      res.status(200).redirect("/profile");
    } else {
      res.redirect("/login");
    }
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

function isLoggedIn(req, res, next) {
  if (!req.cookies.token || req.cookies.token === "") {
    return res.redirect("/login");
  }
  try {
    let data = jwt.verify(req.cookies.token, "secret");
    req.user = data;
    next();
  } catch (err) {
    return res.send("Invalid Token");
  }
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
