const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user')

const userSchema = new mongoose.Schema({ 
    name: String,
    email: String,
    password: String,
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
})
module.exports = mongoose.model('User', userSchema);

