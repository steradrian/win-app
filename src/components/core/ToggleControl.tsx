"use client";

import React, { useState } from "react";

interface ToggleControlProps {
  disabledText: string;
  activeText: string;
}

const ToggleControl = ({ disabledText, activeText }: ToggleControlProps) => {
  const [isActive, setisActive] = useState(false);

  const handleToggle = () => {
    setisActive((prev) => !prev);
  };
  return (
    <div className="flex items-center">
      <span
        className={`mr-2 text-[0.875rem] transition-all duration-300 ease-in-out font-medium ${
          isActive ? "text-textDefault" : "text-textSubdued"
        }`}
      >
        {disabledText}
      </span>
      <label className="relative inline-flex items-center cursor-pointer p-1">
        <input type="checkbox" className="sr-only" onChange={handleToggle} />
        <div
          className={`w-11 h-6 transition-all duration-300 ease-in-out ${
            isActive ? "bg-lightest" : "bg-primary"
          } rounded-full shadow-inner`}
        ></div>
        <div
          className={`absolute left-2 w-5 h-5 bg-light rounded-full shadow transition-all duration-300 ease-in-out ${
            isActive ? "transform" : "translate-x-4"
          }`}
        ></div>
      </label>
      <span
        className={`ml-2 transition-all duration-300 ease-in-out font-medium ${
          isActive ? "text-textSubdued" : "text-textDefault"
        }`}
      >
        {activeText}
      </span>
    </div>
  );
};

export default ToggleControl;
