import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage'; 
import AboutMe from './components/AboutMe';
import Education from './components/EducationPage';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/contact';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isLandingPage = location.pathname === '/';

  return (
    <div className="relative">
      {!isLandingPage && <Header toggleSidebar={toggleSidebar} />}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Overlay behind the sidebar when it's open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        />
      )}

      <div className="transition duration-300">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
      
      {!isLandingPage && <Footer />}
    </div>
  );
};

// Wrap the App component in a Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
