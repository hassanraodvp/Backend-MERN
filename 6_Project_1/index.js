const express = require("express");
const app = express();
const port = 4150;
const path = require("path");
const fs = require("fs");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir("./tasks", (err, tasks) => {
    res.render("index", { task: tasks });
    console.log(tasks)
  });
})
app.get("/tasks/:filename", (req, res) => {
  fs.readFile(`./tasks/${req.params.filename}`, "utf-8" ,(err, data) => {
    res.render("show", { filename: req.params.filename, data:  data });
  })
})
app.post("/create", (req, res) => {
  fs.writeFile(`./tasks/${req.body.title.split(' ').join('')}.txt`, req.body.msg, (err) => {
    res.redirect("/");
  });
});
app.listen(port, () => {
  console.log(`App listening at  ${port}`);
});
