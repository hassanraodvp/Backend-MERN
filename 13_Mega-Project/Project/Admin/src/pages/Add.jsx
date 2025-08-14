import React from "react";
import { FaFileArrowUp } from "react-icons/fa6";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = React.useState(false);
  const [image2, setImage2] = React.useState(false);
  const [image3, setImage3] = React.useState(false);
  const [image4, setImage4] = React.useState(false);

  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [category, setCategory] = React.useState("Men");
  const [subCategory, setsubCategory] = React.useState("Topwear");
  const [bestseller, setBestseller] = React.useState(false);
  const [sizes, setSizes] = React.useState([]);
  const [price, setPrice] = React.useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDesc('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      }else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message)
    }
  };

  return (
    <div className="pt-10 md:pt-28">
      <form onSubmit={submitHandler} className="container">
        <div className="w-full rounded-lg overflow-hidden ">
          <h2 className="text-2xl font-bold pb-5 pl-2 md:pl-5">
            Upload Images
          </h2>
          <div className="flex flex-wrap 2xl:gap-5">
            <div className="w-[50%] md:w-[43%]  xl:w-[23%] p-3">
              <div className="relative   border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center flex-col items-center">
                {!image1 ? (
                  <div className="absolute ">
                    <div className="flex flex-col  px-5 items-center space-y-4">
                      <FaFileArrowUp className="text-2xl 2xl:text-4xl text-blue-700" />
                      <span className="block text-center align-items-center text-gray-400 font-normal">
                        Attach your files here
                      </span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={URL.createObjectURL(image1)}
                    alt=""
                    className="h-[90%] w-full mx-auto flex justify-center items-center rounded-md"
                  />
                )}

                <input
                  onChange={(e) => setImage1(e.target.files[0])}
                  type="file"
                  className="h-full w-full opacity-0"
                  name=""
                />
              </div>
            </div>
            <div className="w-[50%] md:w-[43%]  xl:w-[23%] p-3">
              <div className="relative   border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center flex-col items-center">
                {!image2 ? (
                  <div className="absolute ">
                    <div className="flex flex-col  px-5 items-center space-y-4">
                      <FaFileArrowUp className="text-2xl 2xl:text-4xl text-blue-700" />
                      <span className="block text-center align-items-center text-gray-400 font-normal">
                        Attach your files here
                      </span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={URL.createObjectURL(image2)}
                    alt=""
                    className="h-[90%] w-full mx-auto flex justify-center items-center rounded-md"
                  />
                )}

                <input
                  onChange={(e) => setImage2(e.target.files[0])}
                  type="file"
                  className="h-full w-full opacity-0"
                  name=""
                />
              </div>
            </div>
            <div className="w-[50%] md:w-[43%]  xl:w-[23%] p-3">
              <div className="relative   border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center flex-col items-center">
                {!image3 ? (
                  <div className="absolute ">
                    <div className="flex flex-col  px-5 items-center space-y-4">
                      <FaFileArrowUp className="text-2xl 2xl:text-4xl text-blue-700" />
                      <span className="block text-center align-items-center text-gray-400 font-normal">
                        Attach your files here
                      </span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={URL.createObjectURL(image3)}
                    alt=""
                    className="h-[90%] w-full mx-auto flex justify-center items-center rounded-md"
                  />
                )}

                <input
                  onChange={(e) => setImage3(e.target.files[0])}
                  type="file"
                  className="h-full w-full opacity-0"
                />
              </div>
            </div>
            <div className="w-[50%] md:w-[43%]  xl:w-[23%] p-3">
              <div className="relative   border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center flex-col items-center">
                {!image4 ? (
                  <div className="absolute ">
                    <div className="flex flex-col  px-5 items-center space-y-4">
                      <FaFileArrowUp className="text-2xl 2xl:text-4xl text-blue-700" />
                      <span className="block text-center align-items-center text-gray-400 font-normal">
                        Attach your files here
                      </span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={URL.createObjectURL(image4)}
                    alt=""
                    className="h-[90%] w-full mx-auto flex justify-center items-center rounded-md"
                  />
                )}

                <input
                  onChange={(e) => setImage4(e.target.files[0])}
                  type="file"
                  className="h-full w-full opacity-0"
                />
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type Product Name"
              className="px-3 py-2 outline-none border border-gray-500 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[50%] pt-5 space-y-2">
            <h5 className="font-semibold text-lg">Product Description:</h5>
            <textarea
              placeholder="Type Product Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="px-3 py-2 outline-none border border-gray-500 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[50%] pt-5 space-y-2">
            <h5 className="font-semibold text-lg">Product Category:</h5>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="border px-2 py-2 rounded-md border-gray-500 outline-none"
            >
              <option disabled>Select Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className="flex flex-col w-full lg:w-[50%] pt-5 space-y-2">
            <h5 className="font-semibold text-lg">Product subCategory:</h5>
            <select
              onChange={(e) => setsubCategory(e.target.value)}
              className="border px-2 py-2 rounded-md border-gray-500 outline-none"
            >
              <option disabled>Select subCategory</option>
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="px-3 py-2 outline-none border border-gray-500 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[50%] pt-5 space-y-2">
            <h5 className="font-semibold text-lg">Product Sizes:</h5>
            <div className="flex flex-wrap items-center gap-3">
              <span
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("S")
                      ? prev.filter((item) => item !== "S")
                      : [...prev, "S"]
                  )
                }
                className={`${
                  sizes.includes("S") ? "bg-black" : "bg-gray-400"
                } rounded-md px-5 py-3 text-lg font-bold text-white cursor-pointer hover:bg-gray-600`}
              >
                S
              </span>
              <span
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("M")
                      ? prev.filter((item) => item !== "M")
                      : [...prev, "M"]
                  )
                }
                className={`${
                  sizes.includes("M") ? "bg-black" : "bg-gray-400"
                } rounded-md px-5 py-3 text-lg font-bold text-white cursor-pointer hover:bg-gray-600`}
              >
                M
              </span>
              <span
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("L")
                      ? prev.filter((item) => item !== "L")
                      : [...prev, "L"]
                  )
                }
                className={`${
                  sizes.includes("L") ? "bg-black" : "bg-gray-400"
                } rounded-md px-5 py-3 text-lg font-bold text-white cursor-pointer hover:bg-gray-600`}
              >
                L
              </span>
              <span
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("XL")
                      ? prev.filter((item) => item !== "XL")
                      : [...prev, "XL"]
                  )
                }
                className={`${
                  sizes.includes("XL") ? "bg-black" : "bg-gray-400"
                } rounded-md px-3 md:px-5 py-3 text-lg font-bold text-white cursor-pointer hover:bg-gray-600`}
              >
                XL
              </span>
              <span
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("XXL")
                      ? prev.filter((item) => item !== "XXL")
                      : [...prev, "XXL"]
                  )
                }
                className={`${
                  sizes.includes("XXL") ? "bg-black" : "bg-gray-400 text-black"
                } rounded-md px-3 md:px-5 py-3 text-lg font-bold text-white cursor-pointer hover:bg-gray-600`}
              >
                XXL
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full lg:w-[50%] pt-5">
            <input
              type="checkbox"
              id="bestseller"
              onChange={() => setBestseller((prev) => !prev)}
              checked={bestseller}
            />
            <label
              className="font-semibold text-lg cursor-pointer"
              htmlFor="bestseller"
            >
              Add To Best Seller
            </label>
          </div>
          <div className="flex items-center gap-2 w-full lg:w-[50%] mt-5">
            <button
              type="submit"
              className="px-5 py-3 bg-black rounded-md cursor-pointer text-white font-bold"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
