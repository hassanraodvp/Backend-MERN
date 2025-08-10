import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// create tOKEN
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// Route for Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not Found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Password" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// Route for Register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    // Check User is already Exist or not
    if (userExist) {
      return res.json({ success: false, message: "User already exist!" });
    }
    // Validation for Email & Strong  Password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email!" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should be at least 8 characters long!",
      });
    }
    // Hash Password
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashPass,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// Route for Admin
const adminUser = async (req, res) => {
  try {
    const {email , password} = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
      const token = jwt.sign(email+password, process.env.JWT_SECRET);
      res.json({success: true, token})
    }
  } catch (error) {
    console.log(error)
    res.json({success: false, message: error.message})
  }
};

export { loginUser, registerUser, adminUser };
