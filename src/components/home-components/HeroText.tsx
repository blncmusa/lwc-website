import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroText: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 text-dark">
      <div className="text-left pr-5 flex flex-col justify-center h-[400px]">
        <div>
            <h1 className="text-3xl md:text-5xl font-thin"><span></span>Personalised care,</h1>
            <p className="text-3xl md:text-5xl font-thin">fast appointments, and professional medical advice</p>
            <p className="text-3xl md:text-5xl mb-4 font-thin">— at your convenience.</p>
        </div>
        <Link 
          to="/booking" 
          className="inline-flex items-center bg-dark hover:bg-neutral text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-[40%] mt-10"
        >
          Book Appointment
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
