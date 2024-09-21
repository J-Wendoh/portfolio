import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          I’m Joanne Wendoh, a passionate developer and designer dedicated to crafting exceptional digital experiences.
        </p>
        <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300">
          View My Work
        </Link>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-2">Project 1</h2>
          <p>A brief description of the first project goes here.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-2">Project 2</h2>
          <p>A brief description of the second project goes here.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-2">Project 3</h2>
          <p>A brief description of the third project goes here.</p>
        </div>
      </section>
      <section className="text-center p-10">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="mb-6">I love collaborating on exciting projects. Feel free to reach out!</p>
        <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300">
          Contact Me
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
