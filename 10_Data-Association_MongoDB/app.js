const express = require("express");
const app = express();
const port = 4100;
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/create", async (req, res) => {
  let user = await userModel.create({
    name: "Essa Hassan",
    email: "hassan@gmail.com",
    password: "12345678",
  });
  res.send(user);
});
app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    title: "Hello!",
    content: "This is my first post",
    user: "686d185c73cd5fe85a288247",
  });
  let user = await userModel.findById("686d185c73cd5fe85a288247");
  user.post.push(post._id);
  await user.save();
  res.send({
    post: post,
    user: user,
  });
});
app.listen(port, () => {
  console.log(`App listening at port http://localhost:${port}`);
});
