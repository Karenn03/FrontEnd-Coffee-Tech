import React from "react";

const Button1 = ({ option }) => {
  return (
    <button className="bg-[#4A362F] hover:bg-[#B7AE8F] mt-6 text-white border-none pt-2.5 pb-2.5 cursor-pointer rounded-3xl w-48 text-base">
      {option}
    </button>
  );
};

export default Button1;
