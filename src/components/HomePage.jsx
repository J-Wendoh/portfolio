import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../images/image1.jpeg';

const HomePage = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
      {/* Main content section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center p-10">
        {/* Welcome Section */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          I’m Joanne Wendoh, a passionate full-stack developer and future machine learning scientist from Kenya.
        </p>
        <p className="text-md md:text-lg mb-8 italic opacity-75">
          "Empowering the future of tech, one line of code at a time."
        </p>
        
        {/* Profile image */}
        <div className="mb-10">
          <img 
            src={profileImage} 
            alt="Portrait of Joanne Wendoh" 
            className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover border-4 border-gray-600 shadow-lg transition-transform transform hover:scale-105" 
          />
        </div>

        {/* Button to Portfolio */}
        <Link 
          to="/portfolio" 
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md transition duration-300 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          aria-label="View my work"
        >
          View My Work
        </Link>
      </section>

      {/* Next button to About page */}
      <div className="flex justify-end p-5">
        <Link 
          to="/about" 
          className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          aria-label="Next to About page"
        >
          Next <span className="ml-2">&#8594;</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
