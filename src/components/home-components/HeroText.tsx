import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroText: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 text-dark">
      <div className="text-left pr-[40px] flex flex-col justify-start items-start h-[400px]">
        <div>
          <div className='flex items-center mb-2'>
            <h2 className='font-black text-2xl pr-[10px] whitespace-nowrap'>Private GP</h2>
            <hr className="border-t-1 border-gray-300 my-1 w-full" />
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className="text-3xl md:text-4xl font-thin">Personalised care,</h1>
            <p className="text-3xl md:text-4xl font-thin">fast appointments, and professional medical advice.</p>
            <p className="text-3xl md:text-4xl font-thin mt-[50px]">All at an affordable rate — at your convenience.</p>
          </div>
        </div>
        <Link 
          to="/booking" 
          className="inline-flex items-center justify-center bg-dark hover:bg-neutral text-white font-bold py-4 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-full h-[80px] mt-[25px] hover:text-white"
        >
          Book Appointment
          {/* <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-white" /> */}
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
