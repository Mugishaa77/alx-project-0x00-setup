import React from "react";
import { ButtonProps } from "@/interfaces";; // Importing from interface/index.ts

const Button: React.FC<ButtonProps> = ({ title, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
