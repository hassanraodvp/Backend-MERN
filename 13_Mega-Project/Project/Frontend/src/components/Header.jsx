import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import navLogo from "../assets/logo/nav_logo.svg";
import { IoSearchOutline } from "react-icons/io5";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Collection", to: "/collection" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsMenuOpen(false), 300); // Match this with your transition duration
    }
  };

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
        !document.querySelector('.mobile-menu-button')?.contains(event.target)
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
        <div className="px-2 md:px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link className="flex items-center" to="/">
              <img className="h-10 w-auto" src={navLogo} alt="Logo" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex md:items-center md:gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="rounded-lg px-2 py-1 text-xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Dropdown + Login + Search + Cart */}
            <div className="flex items-center gap-2 lg:gap-3 xl:gap-5">
              <div>
                <IoSearchOutline className="text-2xl md:text-4xl mr-1 md:mr-3 cursor-pointer" />
              </div>
              <div className="border border-gray-400 rounded-full p-2 md:p-3">
                <Link to="/Cart" className=" relative">
                  <BsHandbag className="text-lg md:text-2xl  cursor-pointer " />
                  <p className="absolute font-medium md:font-bold bg-black text-white px-1 md:px-2 md:py-1 py-0 rounded-full  -right-5">99</p>
                </Link>
              </div>
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
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-6 py-2 border rounded-full hover:bg-gradient-to-l from-blue-600 to-white hover:border-gray-100 transition-all duration-300"
                >
                  Login
                </Link>
              </div>
              {/* Mobile Menu Icon */}
              <div className="md:hidden">
                <button 
                  onClick={toggleMenu} 
                  className="mobile-menu-button text-white p-2 md:p-3 bg-primary rounded-full"
                >
                  {isMenuOpen ? (
                    <IoMdClose className="h-5 w-5 md:w-6 md:h-6" />
                  ) : (
                    <GiHamburgerMenu className="h-5 w-5 md:w-6 md:h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`fixed inset-0 z-20 pt-30 bg-white transition-all duration-700 ease-in-out ${
            isAnimating ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
        >
          <div className="flex flex-col items-center h-full space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-3xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300"
                onClick={() => {
                  setIsAnimating(false);
                  setTimeout(() => setIsMenuOpen(false), 300);
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="w-[90%] mt-8 px-8 py-3 text-xl font-bold flex justify-center border-2 rounded-full hover:bg-gradient-to-l from-blue-600 to-white hover:border-gray-100 transition-all duration-300"
              onClick={() => {
                setIsAnimating(false);
                setTimeout(() => setIsMenuOpen(false), 300);
              }}
            >
              Login
            </Link>
          </div>
        </div>
      )}

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
            <Link
              to="/accounts"
              className="block w-full flex justify-center py-2 px-3 text-white font-bold mt-5 bg-red-600 hover:bg-red-500 rounded-md"
              onClick={() => setIsDropdownOpen(false)}
            >
              LOGOUT
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;