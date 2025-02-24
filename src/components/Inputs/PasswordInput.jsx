import React from "react";
import { useState } from "react";
import { HiLockClosed } from "react-icons/hi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  return (
    <div className="relative max-w-xs">
      <HiLockClosed className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4A362F]" />
      <input
        type={isPasswordHidden ? "password" : "text"}
        placeholder={placeholder}
        className="w-full pl-12 pr-3 py-2 text-[#7A6F69] bg-[#D9D9DB] outline-none h-12 border focus:border-[#4A362F] rounded-xl"
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#4A362F] focus:outline-none"
        onClick={() => setPasswordHidden(!isPasswordHidden)}
      >
        {isPasswordHidden ? (
          <FaEyeSlash className="w-5 h-5" />
        ) : (
          <FaEye className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
