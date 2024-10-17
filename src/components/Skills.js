import React from 'react';
import { SiPython, SiJavascript, SiHtml5, SiCss3, SiPostgresql, SiGit, SiTensorflow } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-8 text-center">Key Competencies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Technical Skills */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Technical Skills</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center">
              <SiPython className="h-8 w-8 text-teal-400 mr-3" /> 
              <span>Python (Flask, Django)</span>
            </li>
            <li className="flex items-center">
              <SiJavascript className="h-8 w-8 text-teal-400 mr-3" /> 
              <span>JavaScript (React, Node.js)</span>
            </li>
            <li className="flex items-center">
              <SiHtml5 className="h-8 w-8 text-teal-400 mr-3" /> 
              <span>HTML5</span>
            </li>
            <li className="flex items-center">
              <SiCss3 className="h-8 w-8 text-teal-400 mr-3" /> 
              <span>CSS3</span>
            </li>
            <li className="flex items-center">
              <SiPostgresql className="h-8 w-8 text-teal-400 mr-3" /> 
              <span>SQL & PostgreSQL</span>
            </li>
            <li className="flex items-center">
              <SiTensorflow className="h-8 w-8 text-teal-400 mr-3" />
              <span>Machine Learning (Datacamp Certified)</span>
            </li>
            <li className="flex items-center">
              <SiGit className="h-8 w-8 text-teal-400 mr-3" /> 
              <span>Version Control (Git)</span>
            </li>
          </ul>
        </div>
        {/* Soft Skills */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Soft Skills</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center">
              <span className="text-teal-400 mr-3">🛠️</span> <span>Agile Methodologies</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-3">🤝</span> <span>Team Collaboration</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-3">🧠</span> <span>Problem Solving</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-3">🔍</span> <span>Critical Thinking</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-3">📣</span> <span>Communication & Presentation</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-3">⏰</span> <span>Time Management</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
