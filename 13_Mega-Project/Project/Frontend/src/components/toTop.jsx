import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
    >
      <FaArrowUp className="animate-bounce cursor-pointer" />
    </button>
  );
};

export default ToTop;
