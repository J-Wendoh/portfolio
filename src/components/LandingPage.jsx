import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure this includes the pulse animation

const LandingPage = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center filter grayscale"
        style={{ backgroundImage: "url('src/images/potback.jpeg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Adjust opacity for better text visibility */}
      <div className="flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 sm:p-10 rounded-lg text-center shadow-lg max-w-md">
          <h1 className="text-5xl font-bold text-white mb-4 animate-pulse">Bonjour !</h1>
          <img 
            src="src/images/passport (1).jpeg" 
            alt="Joanne Wendoh portrait" 
            className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto mb-4 shadow-lg" 
          />
          <h2 className="text-xl font-bold text-white mb-6">I am Joanne Wendoh</h2>
        </div>
      </div>
      <Link to="/home">
        <button 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-8 py-3 text-white bg-teal-500 rounded-lg hover:bg-teal-400 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400"
          aria-label="Get Started"
        >
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
