import React from "react";
import { ButtonProps } from "@/interfaces"; // Ensure correct path

const Button: React.FC<ButtonProps> = ({ title, styles, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
