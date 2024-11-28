import React from 'react';
import { FaCode, FaProjectDiagram, FaPaintBrush, FaGraduationCap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiJavascript, SiPhp, SiLaravel, SiCsharp, SiBootstrap, SiTailwindcss, SiJira, SiFigma, SiAdobephotoshop, SiCanva, SiMicrosoftoffice } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { FaFilePowerpoint } from "react-icons/fa6";
import { TbFileTypeXml } from "react-icons/tb";

const services = [
  {
    title: 'Web Development',
    description: 'Creating modern web applications using MERN Stack and other popular frameworks.',
    icon: <FaCode size={50} />,
    technologies: [<SiMongodb size={25} />, <SiExpress size={25} />, <SiReact size={25} />, <SiNodedotjs size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />, <SiJavascript size={25} />, <SiPhp size={25} />, <SiLaravel size={25} />,  <SiBootstrap size={25} />, <SiTailwindcss size={25} />],
  },
  {
    title: 'Project Management',
    description: 'Organizing projects using agile methodologies like Scrum, supported by tools like Jira.',
    icon: <FaProjectDiagram size={50} />,
    technologies: [
      <div className="flex items-center gap-2">
        <SiJira size={25} />
        <DiScrum size={40} />
      </div>
    ],
  },
  {
    title: 'Design & Prototyping',
    description: 'Designing UI/UX using tools like Figma, Photoshop, and Canva.',
    icon: <FaPaintBrush size={50} />,
    technologies: [<SiFigma size={25} />, <SiAdobephotoshop size={25} />, <SiCanva size={25} />],
  },
  {
    title: 'Office Applications',
    description: 'Proficient in using office tools like PowerPoint and Excel for various business needs.',
    icon: <SiMicrosoftoffice size={50} />,
    technologies: [
      <div className="flex items-center gap-2"><SiMicrosoftoffice size={25} />
      <FaFilePowerpoint size={25}  />
      <TbFileTypeXml size={25}  />
    </div>],
  },
  {
    title: 'Full Stack Development Training',
    description: 'Completed a 2-year full-stack web development training program at OFPPT, specializing in modern web technologies and development practices.',
    icon: <FaGraduationCap size={50} />,
    technologies: [
      <SiReact size={25} />,
      <SiNodedotjs size={25} />,
      <SiMongodb size={25} />,
      <SiExpress size={25} />,
      <SiHtml5 size={25} />,
      <SiCss3 size={25} />,
      <SiJavascript size={25} />,
      <SiPhp size={25} />,
      <SiLaravel size={25} />,
      
      <SiBootstrap size={25} />,
      <SiTailwindcss size={25} />
    ],
    centered: true, // Add this property
  }
];

const Services = () => {
  return (
    <div className="bg-slate-900 text-gray-200 py-12 px-4 sm:px-6 md:px-12">
      {/* Header Section */}
      <div data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-once="true"  className="text-center mb-12">
        <h2  className="text-3xl sm:text-4xl font-bold text-pink-600">My Services</h2>
        <p className="mt-4  text-base sm:text-lg">I provide a variety of services in web development, project management, design, and more.</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
          data-aos="zoom-in"
          data-aos-duration="1100"
          data-aos-once="true"
            key={index}
            className={`bg-slate-800 p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300 ${service.centered ? 'col-span-full mx-auto' : ''}`}
          >
            <div className="text-slate-950 mb-4" style={{ fontSize: '5rem' }}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-4 text-3xl">
              {service.technologies.map((tech, i) => (
                <span key={i} className="text-pink-600">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="text-center mt-12">
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-pink-600 text-white font-bold rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
        >
          Let’s Work Together
        </a>
      </div>
    </div>
  );
};

export default Services;
