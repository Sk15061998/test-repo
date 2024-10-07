import React from "react";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import SunIcon from "../icons/SunIcon";
import CbbLogo from "../icons/CbbLogo";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <CbbLogo />
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#pricing" className="text-white hover:text-gray-300">
            Pricing
          </a>
          <div className="relative flex items-center">
            <ShoppingBagIcon />
            <span className="absolute top-0 right-0 left-[3.6rem] h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              1
            </span>
            <span className="ml-2 text-white">Cart</span>
          </div>
          <button className="text-white focus:outline-none">
            <SunIcon />
          </button>
          <a
            href="#login"
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-bold"
          >
            Login
          </a>
          <div className="relative">
            <button className="bg-gray-1000 text-white py-2 px-4 rounded border border-white">
              € EUR
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
