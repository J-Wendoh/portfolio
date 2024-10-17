import React from 'react';
import profileImage from '../images/aime.png'; // Adjust the path as necessary

const AboutMe = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      {/* About Me Section */}
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      
      {/* Profile Image */}
      <div className="mb-6">
        <img 
          src={profileImage} 
          alt="Joanne Wendoh" 
          className="rounded-full border-4 border-teal-500 shadow-lg w-32 h-32 mx-auto" 
        />
      </div>

      <p className="text-lg">
        I’m Joanne Wendoh, a passionate full-stack developer and aspiring machine learning scientist from Nairobi, Kenya. 
        My journey in technology has been shaped by a relentless curiosity and a drive to create impactful digital solutions.
      </p>

      <h2 className="text-2xl font-semibold mt-6">My Skills</h2>
      <p className="mt-2">
        I have honed my skills in technologies such as <strong>Flask, Python, PostgreSQL, React, JavaScript, HTML, and CSS</strong>, 
        and I’m always eager to learn more. I am currently pursuing a degree in Computer Science and have completed an intensive software engineering program at Moringa School.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Education & Certifications</h2>
      <p className="mt-2">
        I hold certifications in Machine Learning from Datacamp and Cloud Computing from Amazon, reflecting my dedication to staying on the cutting edge of tech. 
        I’m excited about creating projects that make a difference in fields like education and healthcare, while inspiring others to innovate.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Interests</h2>
      <p className="mt-2">
        Outside of work, you can find me exploring the great outdoors or experimenting with new recipes in the kitchen! 
        I believe that a well-rounded life fuels creativity and innovation in the tech world.
      </p>
    </div>
  );
};

export default AboutMe;
