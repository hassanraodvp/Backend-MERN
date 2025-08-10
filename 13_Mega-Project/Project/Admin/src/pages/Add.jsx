import React from "react";
import { FaFileArrowUp } from "react-icons/fa6";

const Add = () => {
  return (
    <div className="pt-10 md:pt-28">
      <div className="container">
        <div class="w-full rounded-lg overflow-hidden ">
          <h2 className="text-2xl font-bold pb-5 pl-2 md:pl-5">
            Upload Images
          </h2>
          <div class="flex flex-wrap 2xl:gap-5">
            <div class="w-[50%] md:w-[43%]  xl:w-[23%] p-3">
              <div class="relative   border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                <div class="absolute ">
                  <div class="flex flex-col  px-5 items-center space-y-4">
                    <FaFileArrowUp className="text-2xl 2xl:text-4xl text-blue-700" />
                    <span class="block text-center align-items-center text-gray-400 font-normal">
                      Attach your files here
                    </span>
                  </div>
                </div>

                <input type="file" class="h-full w-full opacity-0" name="" />
              </div>
            </div>
            <div class="w-[50%] md:w-[43%]  xl:w-[23%] p-3">
              <div class="relative   border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                <div class="absolute ">
                  <div class="flex flex-col  px-5 items-center space-y-4">
                    <FaFileArrowUp className="text-2xl 2xl:text-4xl text-blue-700" />
                    <span class="block text-center align-items-center text-gray-400 font-normal">
                      Attach your files here
                    </span>
                  </div>
                </div>

                <input type="file" class="h-full w-full opacity-0" name="" />
              </div>
            </div>
            <div class="w-[50%] md:w-[43%]  xl:w-[23%] p-3">
              <div class="relative   border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                <div class="absolute ">
                  <div class="flex flex-col  px-5 items-center space-y-4">
                    <FaFileArrowUp className="text-2xl 2xl:text-4xl text-blue-700" />
                    <span class="block text-center align-items-center text-gray-400 font-normal">
                      Attach your files here
                    </span>
                  </div>
                </div>

                <input type="file" class="h-full w-full opacity-0" name="" />
              </div>
            </div>
            <div class="w-[50%] md:w-[43%]  xl:w-[23%] p-3">
              <div class="relative   border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                <div class="absolute ">
                  <div class="flex flex-col  px-5 items-center space-y-4">
                    <FaFileArrowUp className="text-2xl 2xl:text-4xl text-blue-700" />
                    <span class="block text-center align-items-center text-gray-400 font-normal">
                      Attach your files here
                    </span>
                  </div>
                </div>

                <input type="file" class="h-full w-full opacity-0" name="" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <h2 className="text-2xl font-bold pb-5 pl-2 md:pl-5">
            Product Info.
          </h2>
          <div className="flex flex-col w-full lg:w-[50%] space-y-2">
            <h5 className="font-semibold text-lg">Product Name:</h5>
            <input
              type="text"
              placeholder="Type Product Name"
              className="px-3 py-2 outline-none border border-gray-500 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[50%] pt-5 space-y-2">
            <h5 className="font-semibold text-lg">Product Description:</h5>
            <textarea
              placeholder="Type Product Description"
              className="px-3 py-2 outline-none border border-gray-500 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[50%] pt-5 space-y-2">
            <h5 className="font-semibold text-lg">Product Category:</h5>
            <select className="border px-2 py-2 rounded-md border-gray-500 outline-none">
              <option disabled>Select Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className="flex flex-col w-full lg:w-[50%] pt-5 space-y-2">
            <h5 className="font-semibold text-lg">Product SubCategory:</h5>
            <select className="border px-2 py-2 rounded-md border-gray-500 outline-none">
              <option disabled>Select SubCategory</option>
              <option value="Topwear">Top Wear</option>
              <option value="Bottomwear">Bottom Wear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          <div className="flex flex-col w-full lg:w-[50%] pt-5 space-y-2">
            <h5 className="font-semibold text-lg">Product Price:</h5>
            <input
              type="number"
              placeholder="Type Product Price"
              className="px-3 py-2 outline-none border border-gray-500 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[50%] pt-5 space-y-2">
            <h5 className="font-semibold text-lg">Product Sizes:</h5>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-gray-400 rounded-md px-5 py-3 text-lg font-bold text-white cursor-pointer hover:bg-gray-600">
                S
              </span>
              <span className="bg-gray-400 rounded-md px-5 py-3 text-lg font-bold text-white cursor-pointer hover:bg-gray-600">
                M
              </span>
              <span className="bg-gray-400 rounded-md px-5 py-3 text-lg font-bold text-white cursor-pointer hover:bg-gray-600">
                L
              </span>
              <span className="bg-gray-400 rounded-md px-3 md:px-5 py-3 text-lg font-bold text-white cursor-pointer hover:bg-gray-600">
                XL
              </span>
              <span className="bg-gray-400 rounded-md px-3 md:px-5 py-3 text-lg font-bold text-white cursor-pointer hover:bg-gray-600">
                XXL
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full lg:w-[50%] pt-5">
            <input type="checkbox" id="bestseller" />
            <label
              className="font-semibold text-lg cursor-pointer"
              htmlFor="bestseller"
            >
              Add To Best Seller
            </label>
          </div>
          <div className="flex items-center gap-2 w-full lg:w-[50%] mt-5">
            <button className="px-5 py-3 bg-black rounded-md cursor-pointer text-white font-bold">Add Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
