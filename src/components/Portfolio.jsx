import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Project Title 1</h2>
          <p>A brief description of the project, technologies used, and your role.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Project Title 2</h2>
          <p>A brief description of the project, technologies used, and your role.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Project Title 3</h2>
          <p>A brief description of the project, technologies used, and your role.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Portfolio;
