import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import lwcLogo from '../assets/lwc-logo.png';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="bg-lessDark h-20 w-full absolute top-[-20px] left-0 z-[-1]" />
      <header className="bg-white shadow-md w-full relative">
        <div className='w-full h-10 bg-lessDark flex justify-end'>
            <div className='w-[100px] bg-white flex justify-center items-center space-x-4 mx-20'>
                <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl text-gray-800 hover:text-gray-600" />
                </a>
                <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl text-gray-800 hover:text-gray-600" />
                </a>
            </div>
        </div>
        <div className="w-full px-10 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={lwcLogo} alt="LWC Logo" className="h-[80px] w-auto" />
            </Link>
            <div className="flex items-center md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-[100px]">
              <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="md:flex md:space-x-6 flex-col md:flex-row space-y-2 md:space-y-0 mt-4 md:mt-0">
                  {[
                    { path: '/', label: 'Home' },
                    { path: '/about', label: 'About' },
                    { path: '/booking', label: 'Booking' },
                    { path: '/contact', label: 'Contact' },
                    { path: '/pricing', label: 'Pricing' },
                    { path: '/services', label: 'Services' },
                  ].map(({ path, label }) => (
                    <li key={path} className="select-none">
                      <Link
                        to={path}
                        className={`text-gray-600 hover:text-gray-900 block ${
                          isActive(path) ? 'font-bold' : 'font-extralight'
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className='ml-4 hidden md:block'>
                <Link to="/booking" className="bg-dark hover:bg-neutral text-white hover:text-white font-bold py-2 px-4 rounded-[10px] transition duration-300 ease-in-out transform hover:scale-200">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
