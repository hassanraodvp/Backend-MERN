import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Checkout = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="pt-28">
      <div className="container">
        <Title text1={"My"} text2={"Orders"} />
        <div className="flex flex-col gap-5 pt-[2%]">
          {products.slice(0, 3).map((product) => (
            <div className="flex flex-col md:flex-row items-center justify-between border-b  py-5" key={product.id}>
              <div className="flex items-center gap-5 w-[100%] md:w-[30%]">
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex flex-col">
                  <h2 className="font-semibold">{product.name}</h2>
                  <div className="flex gap-5">
                    <p className="text-sm text-gray-500">
                      {currency}
                      {product.price}
                    </p>
                    <p className="text-sm text-gray-500">Quantity: 1</p>
                    <p className="text-sm text-gray-500">Size: M</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center border border-gray-200 rounded-md px-3 py-2 cursor-pointer mt-5 md:mt-0 w-full md:w-auto justify-center">
                <p className="h-3 w-3 bg-green-500 rounded-full"></p>
                <p className="text-sm text-gray-500">Ready To ship</p>
              </div>
              <div className="flex gap-3 items-center justify-center border border-gray-200 rounded-md px-3 py-2 cursor-pointer mt-5 md:mt-0 w-full md:w-auto">
                <p className="text-sm text-gray-500">Track Order</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
