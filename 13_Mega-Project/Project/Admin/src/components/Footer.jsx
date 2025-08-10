import React from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/" },
];

const socialLinks = [
  { icon: <FaLinkedin />, to: "/" },
  { icon: <FaGithub />, to: "/" },
  { icon: <FaTwitter />, to: "/" },
  { icon: <IoLogoWhatsapp />, to: "/" },
  { icon: <FaFacebook />, to: "/" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center space-y-10 p-10 bg-gray-50 ">
      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-6 cursor-pointer text-gray-500 font-medium">
        {navLinks.map((link) => (
          <a
            key={link.label}
            to={link.to}
            className="hover:text-gray-900 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center cursor-pointer space-x-6 text-2xl text-gray-600">
        {socialLinks.map(({ icon, to }, index) => (
          <a
            key={index}
            to={to}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-center text-gray-700 font-medium text-sm">
        &copy; 2025 by <span className="text-primary cursor-pointer underline hover:text-blue-600 underline-offset-4 font-bold">@hassanakhtyr</span>, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
