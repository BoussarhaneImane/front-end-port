import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import imgImane from '../IMANEBOU.jpg';
import './Nav.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle scroll event to detect if the user has scrolled
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true); // Change to true when scrolled down
    } else {
      setScrolled(false); // Reset to false when at the top
    }
  };

  // UseEffect hook to add the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed z-50 top-0 left-0 right-0 p-3 font-medium sm:h-28 cont">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center" id="logo">
         
          <div className="overflow-hidden p-3 rounded-3xl  imgS flex items-center space-x-1">
  <Link to="/">
    <h1 className="text-xl">IMANE</h1>
  </Link>
  <span className="w-4 h-4 bg-pink-900 rounded-full"></span>
</div>

          </div>
          <div className="hidden lg:flex items-center space-x-8 text-2xl mr-32">
            <Link
              to="/"
              className={`relative ${scrolled ? 'text-pink-900 bg-slate-100 p-1 rounded-full w-20 text-center' : 'text-slate-100 shadow p-1 rounded-full w-20 text-center'}`}
            >
              Home
            </Link>
            <Link
              to="/Services"
              className={`relative ${scrolled ? 'text-pink-900 bg-slate-100 p-1 rounded-full w-20 text-center' : 'text-slate-100 shadow p-1 rounded-full w-20 text-center'}`}
            >
              Services
            </Link>
            <Link
              to="/Projects"
              className={`relative ${scrolled ? 'text-pink-900 bg-slate-100 p-1 rounded-full w-20 text-center' : 'text-slate-100 shadow p-1 rounded-full w-20 text-center'}`}
            >
              Work
            </Link>
            <Link to='/ContactMe'>
              <Button
                text="Contact"
                bgColor="bg-pink-900"
                textColor="text-slate-100"
                customClass="hidden lg:block"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={toggleDropdown}
              className="text-indigo-950 cursor-pointer bg-slate-100 p-3 rounded-full"
            >
              {isDropdownOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex justify-center items-center mt-60 backdrop-blur-md">
            <div className="relative flex flex-col space-y-6 bg-slate-100 text-indigo-950 p-5 sm:p-8 md:p-10 rounded w-full max-w-sm mx-auto shadow-lg">
              <Link
                to="/"
                className="text-center text-lg sm:text-xl hover:underline"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-center text-lg sm:text-xl hover:underline"
              >
                Services
              </Link>
              <Link
                to="/Projects"
                className="text-center text-lg sm:text-xl hover:underline"
              >
                Work
              </Link>
              <div className="flex justify-center">
                <Link to='/ContactMe'>
                  <Button
                    text="Contact"
                       bgColor="bg-slate-100"
                textColor="text-pink-900"
                    w="w-full sm:w-28"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
