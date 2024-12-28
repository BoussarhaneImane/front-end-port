import React, { useEffect, useState } from "react";
import '../Animate.css'
import { FaLink, FaCodeBranch } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiTailwindcss } from 'react-icons/si';
import imgy from './t8.png';
import img2 from './t2.png';
import img4 from './t3.png';
import img5 from './t5.png';
import img6 from './t7.png';
import img7 from './t4.png';
import { Link } from "react-router-dom";
import Animate from "../animate";

import Slider from "react-slick"; 


const settings = {
  centerMode: true,  // Centrer la diapositive active
  infinite: true,    // Permet de faire défiler de manière infinie
  centerPadding: "0", // Aucun espacement supplémentaire autour de la diapositive centrée
  slidesToShow: 1,   // Afficher une seule diapositive à la fois
  speed: 500,        // Durée de la transition
  focusOnSelect: true, // Permet de sélectionner une diapositive au clic
};
const projects = [
 
 

{
  title: "Elite Shop",
  description: "Elite Shop is an online store dedicated to women's fashion, offering a wide range of clothing, accessories, and more. Enjoy an elegant and seamless shopping experience.",
  technologies: [
    <SiReact size={25} />,
    <SiNodedotjs size={25} />,
    <SiMongodb size={25} />,
    <SiExpress size={25} />,
    <SiHtml5 size={25} />,
    <SiCss3 size={25} />,
    <SiTailwindcss size={25} />
  ],
  link: "https://eliteshop.vercel.app",
  image: imgy
}

,
  {
    title: 'Pharmacie Online',
    description: 'Developed an online pharmacy application that allows users to browse and purchase medications, manage prescriptions, and consult with pharmacists.',
    technologies: [<SiReact size={25} />, <SiNodedotjs size={25} />, <SiMongodb size={25} />, <SiExpress size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />, <SiTailwindcss size={25} />],
    link: 'https://pharma-store-website.vercel.app',
    image: img5
  },
  {
    title: 'Platforme Learn Online',
    description: 'Developed an online learning platform that provides users with access to a variety of courses, interactive lessons, and certification programs.',
    technologies: [<SiReact size={25} />, <SiNodedotjs size={25} />, <SiMongodb size={25} />, <SiExpress size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />, <SiTailwindcss size={25} />],
    link: 'https://biblio-app-ten.vercel.app',
    image: img6
  },
  {
    title: 'Care Women Products',
    description: 'Developed an e-commerce platform focused on women’s healthcare products, offering a wide range of items including skincare, wellness, and hygiene products.',
    technologies: [<SiReact size={25} />, <SiNodedotjs size={25} />, <SiMongodb size={25} />, <SiExpress size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />, <SiTailwindcss size={25} />],
    link: 'https://carewebsite2-s56b.vercel.app',
    image: img7,
    centered: true
  } , 
  {
    title: 'Coffee Shop',
    description: 'Designed and developed a responsive website for a coffee shop, featuring an interactive menu, online ordering system, and customer reviews.',
    technologies: [<SiReact size={25} />, <SiTailwindcss size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />],
    link: 'https://coffeewebsite3.vercel.app',
    image: img4
  }
];


            
const Projects = () => {
  
 const [stars, setStars] = useState([]);
 
   useEffect(() => {
     // Générer des étoiles dynamiques
     const generateStars = () => {
       const starArray = [];
       for (let i = 0; i < 600; i++) {
         const size = Math.random() * 1 + 2; // Taille aléatoire entre 1px et 4px
         starArray.push({
           id: i,
           top: Math.random() * 100 + "%", // Position verticale aléatoire
           left: Math.random() * 100 + "%", // Position horizontale aléatoire
           size,
           delay: Math.random() * 8, // Délai aléatoire
         });
       }
       setStars(starArray);
     };
 
     generateStars();
   }, []);
 

   return (
    <div className="relative bg-gradient-to-br from-gray-900 to-indigo-950 py-10 overflow-hidden">
      <Animate />
      <div className="absolute inset-0 z-0" style={{ height: "150rem" }}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-slate-100 rounded-full opacity-80 animate-twinkle"
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

      <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" className="text-center mt-28">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 relative">My Projects</h2>
        <p className="mt-3 text-base sm:text-lg text-slate-100 relative">Here are some of the projects I’ve worked on</p>
      </div>

      <div className="mt-12 flex justify-center items-center">
      <Slider {...settings} className="w-full max-w-screen-lg">
          {projects.map((project, index) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="1100"
              data-aos-once="true"
              key={index}
              className="relative bg-gradient-to-br from-slate-100 to-gray-100  text-indigo-900 p-6 rounded-lg hover:scale-105 cursor-pointer transition-transform duration-300"
              style={{ boxShadow: "10px 10px rgba(228, 228, 231, 0.8)" }}
            >
              <div className="mb-4 text-pink-900" style={{ fontSize: "5rem" }}>
                <FaCodeBranch size={35} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-indigo-900">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-4 text-3xl mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-pink-900">{tech}</span>
                ))}
              </div>
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg transition-opacity duration-300 ease-in-out opacity-60 hover:opacity-80"
                />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 px-6 py-2 bg-indigo-950 text-white font-bold rounded-full shadow-lg transition duration-300"
                >
                  View Project <FaLink className="inline ml-2 text-gray-200" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/ContactMe"
          className=" relative inline-block px-6 py-3 bg-pink-900 text-white font-bold rounded-full shadow-lg transition duration-300"
        >
          Let’s Work Together
        </Link>
      </div>
    </div>
  );
};


export default Projects;