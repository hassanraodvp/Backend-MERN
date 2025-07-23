import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import navLogo from "../assets/logo/nav_logo.svg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <section className="bg-[#302c42] overflow-hidden px-4 md:px-8 mb-5">
      <header className="flex mx-auto justify-between items-center max-w-[1300px] py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <figure>
              <img
                src={navLogo}
                alt="nav_Logo"
                className="w-8 md:w-20 bg-white p-1 md:p-3 rounded-full cursor-pointer"
              />
            </figure>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:inline-block">
          <ul className="flex gap-3 md:gap-5">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="text-2xl cursor-pointer text-white hover:text-gray-300"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Cart */}
        <div className="flex items-center gap-2 cursor-pointer text-white">
          <FaOpencart className="text-4xl" />
          <h2 className="text-2xl">Cart</h2>
        </div>

        {/* Desktop Sign In Button */}
        <div className="hidden sm:flex gap-3 md:gap-5 lg:gap-9">
          <Link
            to="/login"
            className="font-bold text-md rounded-[40px] py-1 px-3 md:py-2 md:px-4 lg:px-9 text-[#302c42] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:bg-primary"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="sm:hidden inline-block">
          {mobileOpen ? (
            <IoClose className="text-4xl text-white" />
          ) : (
            <FaBarsStaggered className="text-4xl text-white" />
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-[#302c42] border-t border-white px-4 pb-4">
          <ul className="flex flex-col gap-4 my-8">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="uppercase font-bold text-xs text-white"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/login"
              className="uppercase text-center font-bold text-md rounded-[40px] py-2 px-4 text-[#302c42] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
