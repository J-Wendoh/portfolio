// Header.jsx
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-4 flex items-center justify-between shadow-lg">
      <button 
        onClick={toggleSidebar} 
        className="flex items-center p-2 bg-teal-500 hover:bg-teal-400 focus:bg-teal-400 transition-colors duration-300 rounded-full shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300"
        aria-label="Open or close sidebar"
      >
        <Bars3Icon className="h-6 w-6 transition-transform duration-300 transform hover:rotate-180" />
      </button>
      <div className="text-center flex-grow">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">Ms J.Wendoh</h1>
        <p className="text-sm md:text-base text-gray-300 mt-1">Crafted with passion and precision</p>
      </div>
    </header>
  );
};

export default Header;
