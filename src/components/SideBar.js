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
    <aside
      className={`fixed top-0 left-0 h-full z-50 bg-gray-900 shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-72`}
      aria-hidden={!isOpen}
    >
      <div className="flex flex-col p-6">
        <div className="flex flex-col items-center mb-8">
          <img src="src/images/aime.png" alt="Profile" className="rounded-full h-24 w-24 mb-2" />
          <h2 className="text-lg font-bold text-teal-500">Ms J. Wendoh</h2>
        </div>
        <nav className="mt-4">
          <ul>
            {[
              { name: "Home", icon: <PresentationChartBarIcon className="h-5 w-5 text-teal-400" />, path: "/home" },
              { name: "About Me", icon: <UserCircleIcon className="h-5 w-5 text-teal-400" />, path: "/about" },
              { name: "Education & Experiences", icon: <AcademicCapIcon className="h-5 w-5 text-teal-400" />, path: "/education" },
              { name: "Portfolio", icon: <ClipboardDocumentListIcon className="h-5 w-5 text-teal-400" />, path: "/portfolio" },
              { name: "Skills", icon: <WrenchScrewdriverIcon className="h-5 w-5 text-teal-400" />, path: "/skills" },
            ].map((item) => (
              <li key={item.name} className="flex items-center mb-4">
                <Link
                  to={item.path}
                  onClick={toggleSidebar}
                  className="flex items-center text-gray-300 hover:text-teal-500 p-2 rounded-lg transition duration-200 transform hover:scale-105"
                  aria-label={`Navigate to ${item.name}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <Link
            to="/contact"
            onClick={toggleSidebar}
            className="block text-center text-white bg-teal-500 hover:bg-teal-600 py-2 rounded-md transition duration-200"
            aria-label="Contact Me"
          >
            Get In Touch
          </Link>
          <Link
            to="/testimonials"
            onClick={toggleSidebar}
            className="block text-center mt-2 text-gray-300 hover:text-teal-500 transition duration-200"
            aria-label="View Testimonials"
          >
            Reviews
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
