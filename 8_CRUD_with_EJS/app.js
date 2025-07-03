const express = require('express');
const app = express();
const port = 4000;
const userModel = require('./models/user');
const Path = require('path');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.render('index')
})
app.post("/create", async (req, res) => {
    let {name, email, password, image} = req.body
    let createdUser = await userModel.create({
        name,
        email,
        password,
        image
    })
    res.redirect('/read');
})
app.get("/read", async (req, res) => {
    let readUser = await userModel.find();
    res.render('read', {users: readUser})
})
app.get("/edit/:userid", async (req, res) => {
    let user = await userModel.findOne({_id: req.params.userid});
    res.render('edit', {user: user})
})
app.post("/update/:userid", async (req, res) => {
    let {name, email, password, image} = req.body
    let user = await userModel.findOneAndUpdate({_id: req.params.userid}, {name, email, password, image}, {new: true});
    res.redirect('/read');
})
app.get("/delete/:id", async (req, res) => {
    let id = req.params.id;
    let user = await userModel.findByIdAndDelete(id);
    res.redirect('/read');
})
app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})