import React, { useState, useContext, useEffect } from "react";
import {ShopContext} from "../context/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    if (products) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);
  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-3">
          <Title text1="Latest" text2="Collection" />
          <p className="w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-lg">
            Explore Our latest products, also check out our bestsellers. We have
            a wide variety of products that you can choose from.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-[5%]">
          {latestProducts.map((item, index) => {
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
      </div>
    </section>
  );
};

export default LatestCollection;
