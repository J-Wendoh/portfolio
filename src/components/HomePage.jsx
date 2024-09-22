import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <section className="flex-grow flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          I’m Joanne Wendoh, a passionate developer and designer dedicated to crafting exceptional digital experiences.
        </p>
        <p className="text-md md:text-lg mb-8 italic">
          "Empowering the future of tech, one line of code at a time."
        </p>
        
        {/* Space for an image */}
        <div className="mb-10">
          <img 
            src="src/images/image1.jpeg" 
            alt="Joanne Wendoh" 
            className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover mx-auto" 
          />
        </div>

        <Link 
          to="/portfolio" 
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition duration-300 mb-4"
        >
          View My Work
        </Link>
      </section>

      {/* Next button to About route just above the footer */}
      <div className="flex justify-end p-5">
        <Link 
          to="/about" 
          className="flex items-center bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Next <span className="ml-2">&#8594;</span>
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-center p-4">
        <p>&copy; 2024 Joanne Wendoh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
