import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import navLogo from "../assets/logo/nav_logo.svg";
import { IoSearchOutline } from "react-icons/io5";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Products", to: "/products" },
  { name: "Contact", to: "/contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen py-5 border-b border-gray-400">
        <div className="px-6">
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
                  className="rounded-lg px-2 py-1 text-xl font-semibold text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Dropdown + Login */}
            <div className="flex items-center gap-4">
              <div>
                <IoSearchOutline className="text-2xl mr-3 cursor-pointer" />
              </div>
              <div className="border border-gray-400 rounded-full p-3">
                <BsHandbag className="text-2xl  cursor-pointer "/>
              </div>
              <div
                ref={buttonRef}
                onClick={handleDropdown}
                className="border rounded-full border-gray-400"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/26052038?v=4"
                  className="w-12 h-12 rounded-full cursor-pointer"
                />
              </div>
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-6 py-2 border rounded-4xl hover:bg-gradient-to-l from-blue-600 to-white hover:border-gray-100 duration-100 animate-pulse"
                >
                  Login
                </Link>
              </div>
              {/* Mobile Menu Icon */}
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-900">
                  <GiHamburgerMenu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dropdown Outside Header */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-50 top-24 right-10  w-80 bg-white rounded-md shadow-lg p-4"
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
              to="/"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded"
              onClick={() => setIsDropdownOpen(false)}
            >
              Панель управления
            </Link>
            <Link
              to="/profile"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded"
              onClick={() => setIsDropdownOpen(false)}
            >
              Профиль
            </Link>
            <Link
              to="/accounts"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded"
              onClick={() => setIsDropdownOpen(false)}
            >
              Игровые аккаунты
            </Link>
            <button
              className="block w-full text-left py-2 px-3 text-gray-800 hover:bg-gray-100 rounded"
              onClick={() => setIsDropdownOpen(false)}
            >
              Выход
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
