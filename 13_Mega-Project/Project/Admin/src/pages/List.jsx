import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { currency } from "../App";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.error.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };
  useEffect(() => {
    fetchList();
  });
  return (
    <div className="pt-5 md:pt-28">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-semibold">All Product List</h2>
        <div className="flex flex-col gap-2">
          <div className="hidden md:grid grid-cols-[1fr_3fr_1fr__1fr_1fr] items-center py-1 px-3 border border-gray-400 bg-gray-300 mt-5 rounded-md">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b className="text-center">Action</b>
          </div>
          {list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] gap-2 py-1 px-2 border items-center"
            >
              <img src={item.image[0]} alt="" className="w-14 rounded-md" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>
                {currency}
                {item.price}
              </p>
              <p onClick={() => removeProduct(item._id)} className="text-right md:text-center flex justify-center cursor-pointer text-lg font-bold">
                <ImCross className="text-2xl text-red-500 font-bold " />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
