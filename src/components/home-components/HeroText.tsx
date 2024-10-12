import React from 'react';
import { Link } from 'react-router-dom';

const HeroText: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 text-dark">
      <div className="text-left">
        <h1 className="text-4xl md:text-6xl font-thin"><span></span>Personalised care,</h1>
        <p className="text-4xl md:text-6xl font-thin">fast appointments, and professional medical advice</p>
        <p className="text-4xl md:text-6xl mb-8 font-thin">— at your convenience.</p>
        <Link 
          to="/booking" 
          className="inline-block bg-dark hover:bg-neutral text-white hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
