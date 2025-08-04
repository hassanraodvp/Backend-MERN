import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const cartTotal = () => {
    const { currency, deliveryFees, totalCartAmount } = useContext(ShopContext)
  return (
    <div className="py-10">
      <div className="container">
        <div className="w-full pb-[2%]">
          <Title text1="Total" text2="Cart" />
        </div>
        <div className="flex flex-col gap-3 bg-gray-100 px-5 py-7">
            <div className="flex justify-between items-center">
                <p>SubTotal</p>
                <p>{currency}{totalCartAmount()}.00</p>
            </div>
            <div className="flex items-center justify-between">
                <p>Delivery Fees</p>
                <p>{currency}{deliveryFees}.00</p>
            </div>
            <div className="flex items-center justify-between">
                <p>Total</p>
                <p>{currency}{ totalCartAmount() === 0 ? 0 : totalCartAmount() + deliveryFees}.00</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default cartTotal;
