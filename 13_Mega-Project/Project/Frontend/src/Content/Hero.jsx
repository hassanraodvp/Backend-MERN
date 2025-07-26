import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { assets } from "../assets/Products/assets";
import Line from "../assets/Line/line.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="Home pt-44">
      <div className="container">
        <div className="flex flex-col md:flex-row px-6 md:px-8 items-center gap-2 md:gap-10">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="flex flex-col space-y-5">
              <div className="flex items-center w-full gap-5 text-primary text-xl lg:text-2xl font-bold">
                <span className="rounded-lg">
                  <img src={Line} alt="line" />
                </span>
                New Arrivals
              </div>
              <h1 className="text-2xl lg:text-5xl font-bold w-[90%] lg:w-[80%]">
                Discover the latest trends in fashion
              </h1>
              <p className="w-[90%] lg:w-[80%] text-lg">
                Explore our collection of the most exclusive and unique fashion
                items from around the world.
              </p>
              <div className="flex items-center w-full gap-5 text-primary text-xl lg:text-2xl font-bold">
                <Link
                  to="/product"
                  className="text-blue-600 hover:text-blue-500 underline underline-offset-4"
                >
                  Shop Now
                </Link>
                <span className="rounded-lg">
                  <img src={Line} alt="line" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <figure>
              <img
                src={assets.hero_img}
                alt="world"
                className="w-full opacity-70 hover:opacity-100 cursor-pointer pt-2 md:pt-10"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
