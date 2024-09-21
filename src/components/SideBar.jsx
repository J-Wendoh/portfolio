import React from "react";
import { Link } from "react-router-dom";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

export function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`fixed top-0 left-0 h-full z-50 bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-72`}>
      <div className="flex flex-col p-6">
        <div className="flex flex-col items-center mb-8">
          <img src="src/images/aime.png" alt="Profile" className="rounded-full h-24 w-24 mb-2" />
          <h2 className="text-lg font-bold text-gray-800">Ms J.Wendoh</h2>
        </div>
        <nav className="mt-4">
          <ul>
            {[
              { name: "Home", icon: <PresentationChartBarIcon className="h-5 w-5" />, path: "/home" },
              { name: "About Me", icon: <UserCircleIcon className="h-5 w-5" />, path: "/about" },
              { name: "Education", icon: <AcademicCapIcon className="h-5 w-5" />, path: "/education" },
              { name: "Portfolio", icon: <ClipboardDocumentListIcon className="h-5 w-5" />, path: "/portfolio" },
              { name: "Skills", icon: <WrenchScrewdriverIcon className="h-5 w-5" />, path: "/skills" },
            ].map((item) => (
              <li key={item.name} className="flex items-center mb-4 transition-transform transform hover:scale-105">
                <Link to={item.path} onClick={toggleSidebar} className="flex items-center text-gray-700 hover:text-blue-600 p-2 rounded-lg transition duration-200">
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <Link to="/contact" onClick={toggleSidebar} className="block text-center text-white bg-blue-600 hover:bg-blue-700 py-2 rounded-md transition duration-200">
            Get In Touch
          </Link>
          <Link to="/testimonials" onClick={toggleSidebar} className="block text-center mt-2 text-gray-700 hover:text-blue-600 transition duration-200">
            Reviews
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
