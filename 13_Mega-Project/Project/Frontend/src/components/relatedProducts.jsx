import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";

const relatedProducts = ({ category, subCategory }) => {
  const [relatedProduct, setRelatedProduct] = React.useState();
  const { products } = useContext(ShopContext);
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelatedProduct(productsCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-3xl font-bold">
          <Title text1={"Related"} text2={"Products"} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-[5%]">
          {relatedProduct?.map((item, index) => (
            <Productitem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default relatedProducts;
