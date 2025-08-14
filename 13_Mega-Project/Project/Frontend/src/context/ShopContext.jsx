import { createContext, useEffect } from "react";
import React from "react";
import { toast } from "react-toastify";
export const ShopContext = createContext();
import axios from "axios";

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFees = 5;
  const [search, setSearch] = React.useState("");
  const [showSearch, setShowSearch] = React.useState(false);
  const [cartItems, setCartItems] = React.useState({});
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = React.useState("");
  const [products, setProducts] = React.useState([]);
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select the Size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCart = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateCart = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] = quantity;
      }
    }
    setCartItems(cartData);
  };
  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const getProductData = async () => {
    try {
      console.log("Fetching products from:", `${backendUrl}/api/product/list`);
      const response = await axios.get(`${backendUrl}/api/product/list`);
      console.log("Response:", response.data);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Error fetching products:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);
  const value = {
    products: products,
    currency: currency,
    deliveryFees: deliveryFees,
    search: search,
    setSearch: setSearch,
    showSearch: showSearch,
    setShowSearch: setShowSearch,
    cartItems: cartItems,
    setCartItems: setCartItems,
    addToCart: addToCart,
    getCart: getCart,
    updateCart: updateCart,
    totalCartAmount: totalCartAmount,
    backendUrl,
    token,
    setToken,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
