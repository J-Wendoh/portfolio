import React from 'react';

function UrbanRenewed() {
  const handleVisitSite = () => {
    window.open('https://www.urbanrenewed.co.ke/', '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Urban Renewed</h1>
      <img
        src="src/images/urbanrenewed.png"
        alt="Urban Renewed website picture"
        className="w-full h-50 max-w-lg mx-auto rounded-lg shadow-2xl mb-4"
      />
      <p className="text-lg mb-6">
        Urban Renewed is a renewable energy company focused on sustainable urban
        development in Kenya. They offer a wide range of renewable energy
        solutions, including solar, wind, geothermal, hydro, and biomass.
      </p>
      <button
        className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
        onClick={handleVisitSite}
      >
        Visit Site
      </button>
    </div>
  );
}

export default UrbanRenewed;
