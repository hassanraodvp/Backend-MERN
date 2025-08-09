import express from 'express'
import { singleProduct, removeProducts, addProducts, listProducts } from "../controllers/productController.js";
import upload from '../middleware/multer.js';
const productRouter = express.Router();

// Route for Add Product
productRouter.post('/add', upload.fields([{name: 'image1', maxCount: 1 }, {name: 'image2', maxCount: 1 }, {name: 'image3', maxCount: 1 }, {name: 'image4', maxCount: 1 }]), addProducts)
// Route for List Product
productRouter.get('/list', listProducts)
// Route for Remove Product
productRouter.post('/remove', removeProducts)
// Route for Single Product
productRouter.post('/single', singleProduct)

export default productRouter
