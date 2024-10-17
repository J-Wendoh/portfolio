// Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdArrowForward } from 'react-icons/md';
import CV from '../assets/JOANNE WENDOH O. Resume (1).pdf';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <ToastContainer />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Profile Section with View Button */}
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src="src/images/passport (1).jpeg" 
            alt="Joanne Wendoh, Full-Stack Developer" 
            className="rounded-full border-4 border-gray-700 shadow-lg mr-4 h-16 w-16" // Reduced size
          />
          <div className="text-left">
            <p className="font-bold text-lg">Joanne Wendoh</p>
            <p className="text-sm text-gray-400">Full-Stack Developer & Machine Learning Scientist</p>
            <div className="flex items-center mt-2">
              <a
                href={CV} // Path for viewing
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white py-2 px-4 rounded transition-transform duration-300 hover:bg-gray-500 flex items-center"
                aria-label="View CV"
              >
                <MdArrowForward className="mr-2" />
                <span>View CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a 
            href="https://www.linkedin.com/in/wendoh-joanne/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 transform transition-transform duration-300 hover:scale-110 hover:text-white"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a 
            href="https://github.com/settings/profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 transform transition-transform duration-300 hover:scale-110 hover:text-white"
            aria-label="GitHub Profile"
          >
            <FaGithub className="h-8 w-8" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p>Email: <a href="mailto:joannewendoh@gmail.com" className="text-gray-400 hover:text-white">joannewendoh@gmail.com</a></p>
          <p>Contact: <span className="text-gray-400">+254799422458</span></p>
          <p>Nairobi, Kenya</p>
          <p className="mt-4 text-sm text-gray-500">&copy; {new Date().getFullYear()} Joanne Wendoh. All rights reserved.</p>
          <p className="text-sm text-gray-500">Designed and developed by Joanne Wendoh</p>
          <p className="text-sm text-gray-500">Built with love and passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
