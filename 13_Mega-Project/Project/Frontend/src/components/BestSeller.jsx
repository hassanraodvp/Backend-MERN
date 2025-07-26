import React, { useEffect, useState, useContext } from "react";
import Title from "../components/Title";
import Productitem from "./Productitem";
import { assets } from "../assets/Products/assets";
import { ShopContext } from "../context/ShopContext";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
    console.log("All Products:", products);
    console.log("Filtered Best Sellers:", bestProduct);
  }, [products]);
  return (
    <div className="pb-10">
      <div className="container">
        <div className="flex flex-col space-y-2">
          <Title text1="Best" text2="Seller" />
          <p className="w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-lg">
            We are the best seller in the world. We have more than 1000 products
            in our store.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 pb-[20%] md:pb-[15%] lg:pb-[10%] xl:pb-[5%] pt-[5%]">
          {bestSeller.map((item, index) => {
            return (
              <Productitem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
        <Title text1="Our" text2="Policy"/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-[5%]">
          <div className="flex flex-col items-center gap-3 text-center border-b  md:border-0 pb-10">
            <figure>
              <img src={assets.exchange_icon} alt="" />
            </figure>
            <h2 className="text-xl lg:text-2xl font-bold">Easy Exchange Policy</h2>
            <p className="w-[90%] lg:w-[60%]">We Offer free exchange policy for our valuable customers.</p>
          </div>
           <div className="flex flex-col items-center gap-3 text-center border-b md:border-0 pb-10">
            <figure>
              <img src={assets.quality_icon} alt="" />
            </figure>
            <h2 className="text-xl lg:text-2xl font-bold">Quality Products</h2>
            <p className="w-[90%] lg:w-[60%]">We offer the best quality products in the market.</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <figure>
              <img src={assets.support_img} alt="" />
            </figure>
            <h2 className="text-xl lg:text-2xl font-bold">24/7 Support</h2>
            <p className="w-[90%] lg:w-[60%]">We are always available to help our customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
