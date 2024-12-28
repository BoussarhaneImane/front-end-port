import React from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import imgImane from '../IMANEBOU.jpg';
import './footer.css';

const FooterLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/Services" },
  { title: "Work", path: "/Projects" },
  { title: "Contact", path: "/Contact" },
];

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-950 to-gray-900 py-10 overflow-hidden text-gray-300 font-medium pt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 py-10">
          {/* Détails personnels */}
          <div>
            <div className="h-16 w-16 mt-2 sm:h-20 sm:w-20 ml-4  rounded-full overflow-hidden border-4 border-slate-200 contt mb-2">
              <img
                src={imgImane}
                alt="Boussarhane Imane"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm mb-4 text-center">
              I am a passionate developer, dedicated to creating innovative, scalable, and visually stunning digital solutions for personal and professional growth.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold mb-3 text-slate-200">Quick Links</h1>
            <ul className="space-y-3">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <Link to={data.path} className="text-gray-300 hover:text-pink-900 duration-300">
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold mb-3 text-slate-200">Get in Touch</h1>
            <div>
              <p className="text-sm mb-4">
                Feel free to reach out for collaborations or inquiries. I am eager to contribute to meaningful projects.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <FaMobileAlt className="text-2xl cursor-pointer hover:text-pink-900 duration-300" />
                <p className="text-lg">+212 632-409738</p>
              </div>
              {/* Liens sociaux */}
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/boussarhane_imane" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl hover:text-pink-900 duration-300" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100084314748068&locale=fr_FR" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl hover:text-pink-900 duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/boussarhane-imane-bb1178298/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl hover:text-pink-900 duration-300" />
                </a>
                <a href="https://github.com/BoussarhaneImane" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl hover:text-pink-900 duration-300" />
                </a>
                <a href="https://wa.me/212632409738" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-2xl hover:text-pink-900 duration-300" />
                </a>
                <a href="mailto:boussarhaneimane@gmail.com">
                  <FaEnvelope className="text-2xl hover:text-pink-900 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <footer className="text-center py-4 text-slate-200 font-medium text-sm">
          &copy; 2024 Boussarhane Imane. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default Footer;
