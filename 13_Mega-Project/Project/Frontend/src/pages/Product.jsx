import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { RiStarSFill } from "react-icons/ri";
import RelatedProducts from "../components/relatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [image, setImage] = useState("");
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState();
  const [activeTab, setActiveTab] = useState("desc");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
    console.log(productData);
  }, [productId]);

  const description = [
    "This product is good for your health and well-being. It is a good product for your health and well-being. It is a good product for your health and well-being.",
    "We also provide free delivery and 30 days return policy. If you're not satisfied, you can return within 30 days and get your money back.",
  ];

  const reviews = [
    "This is an amazing product! Highly recommended. ⭐⭐⭐⭐⭐",
    "Really loved it. Would buy again! 🔥",
  ];
  const contentToShow = activeTab === "desc" ? description : reviews;
  return productData ? (
    <div className="pb-26 pt-32">
      <div className="container">
        {/* Product Data  */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* products Images  */}
          <div className="flex-1 flex flex-col md:flex-row gap-3 md:gap-5">
            <div className="flex md:flex-col overflow-x-auto md:overflow-y-scroll justify-between md:justify-normal w-full md:w-[20%] 2xl:w-[18%]">
              {productData.image.map((item, index) => {
                return (
                  <img
                    onClick={() => setImage(item)}
                    key={index}
                    className="mb-3 ml-3 md:ml-0 w-full"
                    src={item}
                    alt="product-img"
                  />
                );
              })}
            </div>
            <div className="w-full md:w-[90%] h-full">
              <img
                src={image}
                alt="img"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          {/* Product Info  */}
          <div className="flex-1 space-y-1 lg:space-y-4 xl:pt-[5%]">
            <h1 className="font-bold text-xl lg:text-2xl xl:text-4xl w-[80%] lg:w-[60%]">
              {productData.name}
            </h1>
            <p className="text-sm text-secondary w-[90%] xl:w-[60%]">
              {productData.description}
            </p>
            <div className="flex items-center gap-2 text-xl lg:text-2xl xl:text-4xl text-yellow-400">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <p className="pl-1 text-md text-secondary font-semibold">(122)</p>
            </div>
            <p className="text-secondary font-bold text-lg lg:text-2xl w-[80%] xl:w-[60%]">
              Category: {productData.category}
            </p>
            <p className="text-secondary text-lg lg:text-2xl font-bold w-[80%] xl:w-[60%]">
              Sub Category: {productData.subCategory}
            </p>
            <div className="flex flex-col lg:gap-4">
              <p className="text-lg lg:text-2xl text-secondary tracking-wider font-bold w-[80%] xl:w-[60%]">
                Select Size:{" "}
              </p>
              <div className="flex gap-2 lg:pt-[1%] ">
                {productData.sizes.map((item, index) => {
                  return (
                    <button
                      onClick={() => setSize(item)}
                      className={`bg-gray-300 rounded-sm ${
                        size === item ? "bg-red-400 text-white" : ""
                      } px-3 py-1 font-bold cursor-pointer`}
                      key={index}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="text-secondary text-xl lg:text-2xl font-bold w-[80%] xl:w-[60%] pt-[1%]">
              <span className="text-lg lg:text-xl font-bold">Price:</span> $
              {productData.price}
            </p>
            <button className="bg-secondary hover:bg-primary cursor-pointer text-white px-5 py-3 rounded-md">
              ADD to CART
            </button>
          </div>
        </div>
        <div className="pt-20">
          <div className="flex">
            <button
              onClick={() => setActiveTab("desc")}
              className={`border-t border-b border-l hover px-5 py-2 cursor-pointer ${
                activeTab === "desc"
                  ? "bg-black border-black text-white"
                  : "hover:bg-gray-700 hover:text-white hover:border-black"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`border px-5 py-2 cursor-pointer ${
                activeTab === "reviews"
                  ? "bg-black border-black text-white"
                  : "hover:bg-gray-700 hover:text-white hover:border-black"
              }`}
            >
              Reviews (122)
            </button>
          </div>

          <div className="flex flex-col border border-gray-200 rounded-md px-5 py-10 mt-3 w-[90%] lg:w-[80%]">
            {contentToShow.map((text, index) => (
              <p key={index} className="w-[90%] lg:w-[80%] mb-4">
                {text}
              </p>
            ))}
          </div>
        </div>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : null;
};

export default Product;
