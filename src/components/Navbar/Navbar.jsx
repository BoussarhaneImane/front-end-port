import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaUserMd } from 'react-icons/fa';
import Button from "./Button";
import Modal from './Modal';
import ContactForm from './ContactForm';
import logo from './logoo.png'
import './Nav.css'
import '../Hero.css'
const Navbar = () => {


  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Générer des étoiles dynamiques
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 50; i++) {
        const size = Math.random() * 3 + 2; // Taille aléatoire entre 1px et 4px
        starArray.push({
          id: i,
          top: Math.random() * 100 + "%", // Position verticale aléatoire
          left: Math.random() * 100 + "%", // Position horizontale aléatoire
          size,
          delay: Math.random() * 5, // Délai aléatoire
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false); // Ajout de l'état pour la modale

  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleOrderPopup = () => {
    setIsModalVisible(true); 
  };

  const closeModal = () => {
    setIsModalVisible(false); 
  };

  return (
    <nav className="fixed z-50 top-0 left-0 right-0  bg-slate-950  text-gray-200  p-3 font-medium sm:h-28 ">
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-slate-300 rounded-full opacity-80 animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.top,
              left: star.left,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center" id="logo">
          <Link to="/" className="flex items-center text-gray-200">
            {/* Logo en cercle */}
          
              <img
                src={logo}
                alt="Logo"
                className=" logo h-20 w-36 ml-0  sm:h-44  mt-4  object-cover"
             
              />
          
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-10 text-2xl mr-32">
          <Link to="/" className="relative" id="nav-link-home">
            Home
          </Link>
          <Link to="/Services" className="relative" id="nav-link">
            Services
          </Link>
          <Link to="/Projects" className="relative" id="nav-link">
            Work
          </Link>
  
          <Button
            text="Contact"
            bgColor="bg-violet-800 "
            textColor="text-white"
            handler={handleOrderPopup} // Ouvrir la modale en cliquant
            customClass="hidden lg:block"
          />
          <div className="mr-0">
            <Modal isVisible={isModalVisible} onClose={closeModal}>
              <ContactForm />
            </Modal>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button onClick={toggleDropdown} className="text-gray-200">
            {isDropdownOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="lg:hidden">
          <div className="ml-12 flex flex-col space-y-6">
            <Link to="/" className="text-gray-200">
              Home
            </Link>
            <Link to="/services" className="text-gray-200">
              Services
            </Link>
            <Link to="/Projects" className="text-gray-200">
              Work
            </Link>
  
            <Button
              text="Contact"
              bgColor="bg-violet-800"
              textColor="text-white"
              handler={handleOrderPopup}
              w="w-28"
            />
            <div className="mr-0">
              <Modal isVisible={isModalVisible} onClose={closeModal}>
                <ContactForm />
              </Modal>
            </div>
          </div>
        </div>
      )}
    </div>
  </nav>
  
  );
};

export default Navbar;
