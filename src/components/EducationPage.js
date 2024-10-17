import React from 'react';
import alxLogo from '../assets/alx.jpeg'; 
import datacampLogo from '../assets/datacamp.png';
import moringaLogo from '../assets/moringa.png';
import alxCertificate from '../assets/alxcert.png'; 

const Education = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-8 text-center">Education & Certifications</h1>
      <div className="space-y-8">
        <div className="flex items-center">
          <img src={datacampLogo} alt="Datacamp Logo" className="h-16 mr-6" />
          <div>
            <h2 className="text-xl font-semibold">Machine Learning Scientist Certification</h2>
            <p className="text-gray-400">Datacamp (August 2024 - Present)</p>
            <a href="https://www.datacamp.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">Learn more</a>
          </div>
        </div>
        <div className="flex items-center">
          <img src={moringaLogo} alt="Moringa School Logo" className="h-16 mr-6" />
          <div>
            <h2 className="text-xl font-semibold">Software Engineering Course</h2>
            <p className="text-gray-400">Moringa School, Nairobi (February 2024 - September 2024)</p>
            <a href="https://moringaschool.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">Learn more</a>
          </div>
        </div>
        <div className="flex items-center">
          <img src={alxLogo} alt="ALX Logo" className="h-16 mr-6" />
          <div>
            <h2 className="text-xl font-semibold">AICE Career Essentials Online Programme</h2>
            <p className="text-gray-400">African Leadership X (ALX) (May 2024 - June 2024)</p>
            <a href="https://www.alxafrica.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">Learn more</a>
            <br />
            <a href={alxCertificate} target="_blank" rel="noopener noreferrer" className="text-teal-400 underline font-bold">View Certificate</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
