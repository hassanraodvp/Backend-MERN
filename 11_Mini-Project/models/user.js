const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mini-project");
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  profilePic: {
    type: String,
    default: "default.jpg",
  },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});
module.exports = mongoose.model("user", userSchema);
