import express from "express";
import cors from "cors"
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// App config 
const app = express();
const port = process.env.PORT || 3500
connectDB()
connectCloudinary()

// Middlewares 
app.use(express.json());
app.use(cors())

// API EndPoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req, res) => {
    res.send('Working!')
})
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})