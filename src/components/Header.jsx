// Header.jsx
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 flex items-center justify-between shadow-md">
      <button 
        onClick={toggleSidebar} 
        className="flex items-center p-2 bg-gray-700 hover:bg-gray-600 transition-colors duration-300 rounded-full shadow-lg transform hover:scale-105"
        aria-label="Toggle Sidebar"
      >
        <Bars3Icon className="h-6 w-6 transition-transform duration-300 transform hover:rotate-180" />
      </button>
      <div className="text-center flex-grow">
        <h1 className="text-2xl font-semibold tracking-wide shadow-md">Ms J.Wendoh</h1>
        <p className="text-sm text-gray-400 mt-1">Crafted with passion and precision</p>
      </div>
    </header>
  );
};

export default Header;
