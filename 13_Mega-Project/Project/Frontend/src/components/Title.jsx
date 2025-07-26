import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center text-center gap-2">
      <p className="text-2xl  md:text-4xl lg:text-5xl font-bold text-primary">
        {text1} <span className="text-2xl md:text-4xl lg:text-5xl text-secondary">{text2}</span>
      </p>
      <span className="w-8 sm:w-12 lg:w-20 mt-5 h-[1px] sm:h-[2px] bg-primary"></span>
    </div>
  );
};

export default Title;
