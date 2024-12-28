import React, { useRef } from 'react';
import { FaCode, FaProjectDiagram, FaPaintBrush, FaGraduationCap } from 'react-icons/fa';
import { SiMicrosoftoffice } from 'react-icons/si';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './service.css';
import Animate from '../animate';
import Animatetwo from '../Animatetwo';

const Services = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Creating modern web applications using MERN Stack and other popular frameworks.',
      icon: <FaCode size={30} />,
    },
    {
      title: 'Project Management',
      description: 'Organizing projects using agile methodologies like Scrum, supported by tools like Jira.',
      icon: <FaProjectDiagram size={30} />,
    },
    {
      title: 'Design & Prototyping',
      description: 'Designing UI/UX using tools like Figma, Photoshop, and Canva.',
      icon: <FaPaintBrush size={30} />,
    },
    {
      title: 'Office Applications',
      description: 'Proficient in using office tools like PowerPoint and Excel for various business needs.',
      icon: <SiMicrosoftoffice size={30} />,
    },
    {
      title: 'Full Stack Development Training',
      description:
        'Completed a 2-year full-stack web development training program at OFPPT, specializing in modern web technologies and development practices.',
      icon: <FaGraduationCap size={30} />,
    },
  ];

  return (
    <>
    <div className="relative bg-gradient-to-br from-gray-900 to-indigo-950 py-10 overflow-hidden">
      {/* Header Section */}
      <Animate/>
      <Animatetwo/>
      <div className="text-center mt-28">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 relative">My Services</h2>
        <p className="mt-4 text-slate-100 font-medium text-base sm:text-sm mb-6 relative">
          I offer a wide range of professional services, including web development, project management,
          <br />
          innovative design solutions, and much more to bring your ideas to life.
        </p>
      </div>

      {/* Arrows */}
      <div className="flex items-center justify-between mx-6">
        <button onClick={scrollLeft} className="text-white bg-pink-900 p-3 rounded-full shadow-lg hover:bg-indigo-900 relative">
          <FaChevronLeft size={20} />
        </button>
        <motion.div
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-6 py-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {services.map((service, index) => (
            
            <motion.div
            key={index}
            className="flex-shrink-0 w-72 relative bg-gradient-to-br from-indigo-900 to-gray-900 text-slate-100 p-6 rounded-lg shadow-lg cursor-pointer transition-transform duration-300"
            style={{ boxShadow: '10px 10px rgba(228, 228, 231, 0.8)' }}
            whileHover={{ scale: 1.1, boxShadow: '10px 10px rgba(228, 228, 231, 0.8)' }}
          >
          
            <div className="text-pink-900 mb-4" style={{ fontSize: '1rem' }}>
              {service.icon}
            </div>
            <h3 className="text-sm font-bold mb-2">{service.title}</h3>
            <p className="text-xs mb-4">{service.description}</p>
          </motion.div>
          
          ))}
        </motion.div>
        <button onClick={scrollRight} className="text-white bg-pink-900 p-3 rounded-full shadow-lg hover:bg-indigo-900 relative">
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Footer Section */}
      <Link to="/ContactMe">
        <div className="text-center mt-12 relative">
          <a
            className="inline-block px-6 py-3 bg-pink-900 text-white font-bold rounded-full shadow-lg transition duration-300"
          >
            Let’s Work Together
          </a>
        </div>
      </Link>
    </div>
    </>
  );
};

export default Services;

