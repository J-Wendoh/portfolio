// Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Profile Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src="src/images/passport (1).jpeg" 
            alt="Profile" 
            className="rounded-full border-5 border-gray-50 mr-4" 
          />
          <div className="text-left">
            <p className="font-semibold">Joanne Wendoh</p>
            <p className="text-sm text-gray-400">FullStack Developer & Machine Learning Scientist</p>
          </div>
        </div>

        {/* Social Links with Animation */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a 
            href="https://www.linkedin.com/in/wendoh-joanne/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110 hover:text-gray-300"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a 
            href="https://github.com/settings/profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110 hover:text-gray-300"
          >
            <FaGithub className="h-8 w-8" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <p>Email: <a href="mailto:joannewendoh@gmail.com" className="text-gray-400 hover:text-gray-300">joannewendoh@gmail.com</a></p>
          <p>Contact: <span className="text-gray-400">+254799422458</span></p>
          <p>Nairobi, Kenya</p>
          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Joanne Wendoh. All rights reserved.</p>
          <p className="text-sm">Designed and developed by Joanne Wendoh</p>
          <p className="text-sm">Built with love and passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
