import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import lwcLogo from '../assets/lwc-logo.png';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { RiAdminLine } from "react-icons/ri";
import { useScrollStore } from "../store/scrollStore";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const scrollToAbout = useScrollStore((state) => state.scrollToAbout);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    if (path === 'about') {
      return location.hash === '#sectionAbout';
    }
    return location.pathname === path;
  };

  const handleAboutClick = () => {
    if (location.pathname === '/') {
      // Scroll to the About section if already on the homepage
      scrollToAbout();
    } else {
      // Navigate to the homepage, then scroll
      window.location.href = "/#sectionAbout";
    }
  };

  return (
    <>
      <div className="bg-lessDark h-20 w-full absolute top-[-20px] left-0 z-[-1]" />
      <header className="bg-white shadow-md w-full relative">
        <div className='w-full h-10 bg-lessDark flex justify-end'>
          <div className='w-[8rem] bg-white flex justify-center items-center space-x-4 mx-10'>
            <Link to="/admin">
              <RiAdminLine className="text-2xl text-gray-800 hover:text-gray-600" />
            </Link>
            <a href="https://www.instagram.com/londonwellbeingcare/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-800 hover:text-gray-600" />
            </a>
            <a href="https://www.facebook.com/londonwellbeingcare" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-gray-800 hover:text-gray-600" />
            </a>
          </div>
        </div>
        <div className="w-full px-5 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={lwcLogo} alt="LWC Logo" className="h-[5rem] w-auto" />
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
            <div className="flex items-center gap-10">
              <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="md:flex md:space-x-6 flex-col md:flex-row space-y-2 md:space-y-0 mt-4 md:mt-0">
                  {[
                    { path: '/', label: 'Home' },
                    { path: 'about', label: 'About' },
                    { path: '/booking', label: 'Booking' },
                    { path: '/contact', label: 'Contact' },
                    { path: '/pricing', label: 'Pricing' },
                    { path: '/services', label: 'Services' },
                  ].map(({ path, label }) => (
                    <li key={path} className="select-none">
                      {label === 'About' ? (
                        <span
                          onClick={handleAboutClick}
                          className={`cursor-pointer text-gray-600 hover:text-gray-900 block ${
                            isActive('about') ? 'font-bold' : 'font-extralight'
                          }`}
                        >
                          {label}
                        </span>
                      ) : (
                        <Link
                          to={path}
                          className={`text-gray-600 hover:text-gray-900 block ${
                            isActive(path) ? 'font-bold' : 'font-extralight'
                          }`}
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className='ml-4 hidden md:block'>
                <Link to="/booking" className="bg-dark hover:bg-neutral text-white font-bold py-2 px-4 rounded-[0.625rem] transition duration-300 ease-in-out transform hover:scale-105 hover:text-white">
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
