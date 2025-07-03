const express = require('express');
const app = express();
const port = 4000;
const model = require('./userModal');

app.get('/createuser', async (req, res) => {
    let createdUser = await model.create({
        name: "Hassan Akhtar",
        email: "hassan@gmail.com",
        password: "123456",
        age: 23,
    })
    res.send(createdUser)
})
app.get('/readuser', async (req, res) => {
    let readuser = await model.find()
    res.send(readuser)
})
app.get('/updateuser', async (req, res) => {
    let updateuser = await model.create({
        name: "Faizan",
        email: "faizan@gmail.com",
        password: "123456",
        age: 21,
    })
    res.send(updateuser)
})
app.get('/deleteuser', async (req, res) => {
    let deleteuser = await model.findOneAndDelete({name: "Faizan "})
    res.send(deleteuser)
})
app.get('/', (req, res) => {
    res.send('Complete Basic CRUD Operations using Mongoose')
})
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})