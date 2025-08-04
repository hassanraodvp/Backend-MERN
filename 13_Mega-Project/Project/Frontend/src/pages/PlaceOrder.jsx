import React from "react";
import Title from "../components/Title";
import CartTotal from "../components/cartTotal";
import { assets } from "../assets/Products/assets";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = React.useState("stripe");
  const navigate = useNavigate();
  return (
    <div className="pt-32 min-h-screen">
      <div className="container">
        <Title text1="Delivery" text2="Information" />
        <div className="flex flex-col lg:flex-row gap-5 pt-[3%]">
          {/* Left side  */}
          <div className="flex flex-col space-y-5 px-[2%] py-[4%] bg-gray-300 rounded-lg w-full lg:w-[45%] h-[40%]">
            <div className="flex items-center gap-5">
              <input
                type="text"
                placeholder="First name"
                className="border-gray-600 w-full border outline-none px-3 py-2 text-black rounded-md tracking-wide"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border-gray-600 w-full border outline-none px-3 py-2 text-black rounded-md tracking-wide"
              />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="email"
                placeholder="Email"
                className="border-gray-600 font-semibold w-full border outline-none px-3 py-2 text-black rounded-md tracking-wide"
              />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="text"
                placeholder="City"
                className="border-gray-600 w-full border outline-none px-3 py-2 text-black rounded-md tracking-wide"
              />
              <input
                type="text"
                placeholder="State"
                className="border-gray-600 w-full border outline-none px-3 py-2 text-black rounded-md tracking-wide"
              />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="text"
                placeholder="Enter Complete Address"
                className="border-gray-600 font-semibold w-full border outline-none px-3 py-2 text-black rounded-md tracking-wide"
              />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="number"
                placeholder="City Zip/Postal Code"
                className="border-gray-600 w-full border outline-none px-3 py-2 text-black rounded-md tracking-wide"
              />
              <input
                type="text"
                placeholder="Country"
                className="border-gray-600 w-full border outline-none px-3 py-2 text-black rounded-md tracking-wide"
              />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="number"
                placeholder="Phone Number with Country Code"
                className="border-gray-600 w-full border tracking-wide font-semibold outline-none px-3 py-2 text-black rounded-md "
              />
            </div>
          </div>
          {/* Right Side  */}
          <div className="flex flex-col w-full lg:w-[55%]">
            <div className="">
              <CartTotal className="py-10" />
            </div>
            <div className="pb-10">
              <Title text1="Payment" text2="Method" />
              <div className="flex flex-col lg:flex-row gap-3 py-10 px-5 border border-gray-200 mt-10">
                <div
                  onClick={() => setMethod("stripe")}
                  className="flex justify-center w-full items-center gap-3 border-gray-200 border p-3 rounded-md px-5 cursor-pointer"
                >
                  <p
                    className={`h-4 w-4 rounded-full border ${
                      method === "stripe"
                        ? "bg-green-500 border-green-500"
                        : "bg-gray-50 border-gray-50"
                    }`}
                  ></p>
                  <img src={assets.stripe_logo} className="h-4" alt="stripe" />
                </div>
                <div
                  onClick={() => setMethod("cod")}
                  className="flex justify-center w-full items-center gap-3 border-gray-200 border p-3 rounded-md px-5 cursor-pointer"
                >
                  <p
                    className={`h-4 w-4 rounded-full border ${
                      method === "cod"
                        ? "bg-green-500 border-green-500"
                        : "bg-gray-50 border-gray-50"
                    }`}
                  ></p>
                  <p>Cash on Delivery</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => navigate("/checkout")}
                  className="bg-primary rounded-md text-white px-5 py-3 cursor-pointer hover:bg-secondary mt-5"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
