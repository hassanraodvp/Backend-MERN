import { useState, useRef, useEffect, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import navLogo from "../assets/logo/nav_logo.svg";
import { IoSearchOutline } from "react-icons/io5";
// import { ShopContext } from "../context/ShopContext";

const navItems = [{ name: "Add Item", to: "/add" }];

function Header({ setToken }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const handleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }

      // Close mobile menu if clicked outside
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !document.querySelector(".mobile-menu-button")?.contains(event.target)
      ) {
        setIsAnimating(false);
        setTimeout(() => setIsMenuOpen(false), 300);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen py-5 border-b border-gray-400 bg-white">
        <div className="px-4 sm:px-6 md:px-10 lg:px-12 2xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link className="flex items-center gap-3" to="/">
              <img className="h-10 w-auto" src={navLogo} alt="Logo" />
              <h2 className="font-semibold text-2xl">Admin Panel</h2>
            </Link>

            {/* Dropdown + Login + Search + Cart */}
            <div className="flex items-center gap-2 lg:gap-3 xl:gap-5">
              <div
                ref={buttonRef}
                onClick={handleDropdown}
                className="border rounded-full border-gray-400"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/26052038?v=4"
                  className="w-9 md:w-12 md:h-12 h-9 rounded-full cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dropdown Outside Header */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-50 top-24 right-5 md:right-10 w-60 md:w-80 bg-white rounded-md shadow-lg p-4"
        >
          <div className="flex space-x-4 items-center p-4">
            <img
              src="https://avatars.githubusercontent.com/u/26052038?v=4"
              alt="Name"
              className="w-16 h-16 shrink-0 rounded-full"
            />
            <div className="space-y-1">
              <div className="font-semibold text-gray-900">Name</div>
              <p className="text-sm text-gray-600">example@mail.com</p>
            </div>
          </div>
          <div className="border-t pt-2 mt-2">
            <Link
              to="/profile"
              className="block py-2 px-3 font-semibold text-primary hover:bg-gray-200 rounded-lg"
              onClick={() => setIsDropdownOpen(false)}
            >
              My Profile
            </Link>
            <Link
              to="/orders"
              className="block py-2 px-3 text-primary hover:bg-gray-200 rounded"
              onClick={() => setIsDropdownOpen(false)}
            >
              Orders
            </Link>
            <button
              onClick={() => setToken("")}
              className="block w-full flex justify-center py-2 px-3 text-white font-bold mt-5 bg-red-600 hover:bg-red-500 rounded-md"
            >
              {" "}
              Log Out
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
