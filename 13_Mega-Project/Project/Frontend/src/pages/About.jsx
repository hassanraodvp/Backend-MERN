import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/Products/assets";

const About = () => {
  return (
    <div className="py-28 min-h-screen">
      <div className="container">
        <div>
          <Title text1="About" text2="Us" />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 items-center pt-[5%]">
          <div className="w-full h-full">
            <img src={assets.about_img} alt="about" className="w-full h-full" />
          </div>
          <div> 
            <p className="w-full md:w-[80%] lg:w-[70%] tracking-wide">
              Welcome to our E-commerce platform – your one-stop online store
              for the latest fashion and lifestyle products. We are committed to
              delivering top-quality items at affordable prices, right to your
              doorstep. Our mission is to make online shopping simple, secure,
              and enjoyable for everyone. With a wide range of categories, fast
              shipping, and excellent customer support, we strive to exceed your
              expectations. Thank you for choosing us and being part of our
              journey!
            </p>
            <h2 className="font-semibold pt-5 pb-2 text-xl md:text-2xl">
              Our Mission
            </h2>
            <p className="w-full md:w-[80%] lg:w-[70%] tracking-wide">
              Our mission is to revolutionize online shopping by offering
              high-quality products at competitive prices. We aim to provide a
              seamless, trustworthy, and satisfying shopping experience to every
              customer. We are dedicated to constantly improving our services,
              expanding our product range, and ensuring fast, safe delivery.
              Customer satisfaction is at the heart of everything we do. We
              believe in building long-term relationships through transparency,
              reliability, and innovation.
            </p>
          </div>
        </div>
        <div className="pt-[7%]">
          <Title text1="Why" text2="Choose Us" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[5%] border border-gray-300 py-10">
          <div className="flex flex-col space-y-3 justify-center text-center border-b lg:border-b-0 lg:border-r items-center py-10 ">
            <h2 className="font-semibold text-2xl">Quality assurance</h2>
            <p className="w-[80%]">
              We ensure every product meets strict quality standards before it
              reaches you.Our team carefully inspects and sources items to
              guarantee durability, authenticity, and customer satisfaction.
            </p>
          </div>
           <div className="flex flex-col space-y-3 justify-center border-b lg:border-r  lg:border-b-0 text-center items-center py-10 ">
            <h2 className="font-semibold text-2xl">Quality assurance</h2>
            <p className="w-[80%]">
              We ensure every product meets strict quality standards before it
              reaches you.Our team carefully inspects and sources items to
              guarantee durability, authenticity, and customer satisfaction.
            </p>
          </div>
           <div className="flex flex-col space-y-3 justify-center text-center items-center  py-10 rounded-md">
            <h2 className="font-semibold text-2xl">Quality assurance</h2>
            <p className="w-[80%]">
              We ensure every product meets strict quality standards before it
              reaches you.Our team carefully inspects and sources items to
              guarantee durability, authenticity, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
