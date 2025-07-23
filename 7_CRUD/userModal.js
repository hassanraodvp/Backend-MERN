const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/practice')
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    gender: String,
})
module.exports = mongoose.model('User', userSchema)