import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdChecklistRtl } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="pt-23">
      <div className="px-4 md:px-10">
        <div className="cursor-pointer md:min-h-screen border-b md:border-b-0 md:border-r">
          <div className="flex md:flex-col flex-row md:gap-5 justify-center items-center">
            <NavLink to="/add">
              <div className="flex flex-col gap-2 pb-5 md:pt-5  mx-5 ">
                <IoAddCircleOutline className="text-2xl xl:text-4xl md:mx-auto font-bold" />
                <h2 className="font-semibold md:mx-auto">Add Item</h2>
              </div>
            </NavLink>
            <NavLink to="/list">
              <div className="flex flex-col gap-2 pb-5 md:pt-5  mx-5 ">
                <MdChecklistRtl className="text-2xl xl:text-4xl md:mx-auto font-bold" />
                <h2 className="font-semibold md:mx-auto">List Item</h2>
              </div>
            </NavLink>
            <NavLink to="/order">
              <div className="flex flex-col gap-2 pb-5 md:pt-5  mx-5 ">
                <FaJediOrder  className="text-2xl xl:text-4xl md:mx-auto font-bold" />
                <h2 className="font-semibold md:mx-auto">Order Item</h2>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
