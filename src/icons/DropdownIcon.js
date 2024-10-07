import React from "react";

const DropdownIcon = ({ isActive = false, className = "w-6 h-6" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`transform transition-transform duration-300 ${className} ${isActive ? "rotate-180" : "rotate-0"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export default DropdownIcon;
