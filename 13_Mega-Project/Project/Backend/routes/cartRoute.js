import express from "express";
import { addToCart, updateCart, getCart } from "../controllers/cartController";
import authUser from "../middleware/auth";
const cartRouter = express.Router();

// Route to add product to cart
cartRouter.post("/add", authUser,addToCart);
// Route to update product quantity in cart
cartRouter.post("/update", authUser ,updateCart);
// Route to get user cart
cartRouter.get("/get", authUser ,getCart);

export default cartRouter;
