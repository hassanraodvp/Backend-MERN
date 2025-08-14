// add product ot user cart
const addToCart = async (req, res) => {
  const { userId, itemId, size } = req.body;
  const userData = await userModel.findById(userId);
  let cartData = await userData.cartData;
  if (cartData[itemId]){
    if (cartData[itemId][size]){
        cartData[itemId][size] += 1
    } else {
        cartData[itemId][size] = 1
    }
  }
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  const cart = await Cart.findOne({ userId });
};

// update product quantity in cart
const updateCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;
  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
};

// get user cart
const getCart = async (req, res) => {
  const userId = req.user.id;
  const cart = await Cart.findOne({ userId });
  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }
  res.status(200).json(cart);
};

export { addToCart, updateCart, getCart };
