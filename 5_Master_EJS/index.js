const express = require("express");
const app = express();
const path = require("path");
const port = 5500;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
// Dynamic Routing 
app.get("/profile/:username/:age", (req, res) => {
  res.send(`Welcome ${req.params.username } your age is ${req.params.age}`);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
