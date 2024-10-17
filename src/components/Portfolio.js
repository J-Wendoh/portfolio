import React from 'react';
import BgTexture from "../images/background2.jpeg";
import MyBook from "./MyBook";

const Portfolio = () => {
  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center"
         style={{ backgroundImage: `url(${BgTexture})` }}>
      <MyBook />
    </div>
  );
};

export default Portfolio;
