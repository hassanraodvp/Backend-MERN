import express from "express";
import cors from "cors"
import 'dotenv/config'
import connectDB from './config/mongodb.js'

// App config 
const app = express();
const port = process.env.PORT || 3500
connectDB()

// Middlewares 
app.use(express.json());
app.use(cors())

// API EndPoints
app.get('/', (req, res) => {
    res.send('Working!')
})
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})