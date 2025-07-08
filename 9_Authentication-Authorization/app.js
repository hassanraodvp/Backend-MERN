const express = require("express");
const app = express();
const port = 3700;
const path = require("path");
app.use(express.urlencoded({ extended: true }));
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//! bcrypt (Encryption) Start
// app.get("/", (req, res) => {
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash("password", salt, (err, hash) => {
//       console.log("Hashed Password:", hash);
//       // Store Pass in Hash in DB
//     });
//   });
// });
//! bcrypt (Encryption) End
//! bcrypt (Decryption) Start
// app.get("/", (req, res) => {
//   bcrypt.compare("password", "$2b$10$12dR4bukmNSTPw6XcRF6geVBlt9avaffpe/WzCHpWL5k5MML5Xn6O", (err, result) => {
//     console.log("Decrypted Password:", result);
//     // Check Pass in Hash in DB
//   });
// });

//! JWT Start
// app.get("/", (req, res) => {
//   let token = jwt.sign({email: "hassan@gmail.com"}, "secret");
//   res.cookie("token", token);
//   res.send("Token Generated and Cookie Set");
// });
// app.get("/profile", (req, res) => {
//   let data = jwt.verify(req.cookies.token, "secret");
//   console.log("Data from Token:", data);
// });
//! JWT End

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
