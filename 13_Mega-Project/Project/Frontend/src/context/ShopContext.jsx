import { createContext } from "react";
import { products } from "../assets/Products/assets";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFees = 5;
  const value = {
    products: products,
    currency: currency,
    deliveryFees: deliveryFees,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
