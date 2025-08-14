import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Productitem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const { deliveryFees } = useContext(ShopContext);
  return (
    <Link
      to={`/product/${id}`}
      className=" shadow-lg shadow-gray-500 rounded-lg"
    >
      <div className="overflow-hidden">
        <figure className="w-full h-full">
          <img
            src={image[0]}
            alt="product"
            className="hover:scale-110 w-full h-90 transition ease-in duration-400 rounded-md"
          />
        </figure>
      </div>
      <p className=" py-2 text-md font-semibold pt-3 px-5">{name}</p>
      <div className="flex items-center justify-between px-5">
        <p className=" text-2xl font-bold pb-10">
          {currency}
          {price}
        </p>
        <p>
          Delivery Fees:{" "}
          <span className="font-bold">
            {deliveryFees}
            {currency}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default Productitem;
