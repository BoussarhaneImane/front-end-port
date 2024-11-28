import React  from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import afuqLogo from "../Navbar/logoo.png"; 
import './footer.css'
import '../Hero.css'

const FooterLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/Services" },
  { title: "Work", path: "/Projects" },
  { title: "Contact", path: "/Contact" },
];

const Footer = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Générer des étoiles dynamiques
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 400; i++) {
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
  return (

    <div className="bg-slate-950 text-gray-300 font-medium pt-24">
 <div className="absolute inset-0 z-0" style={{height:'98rem'}}>
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
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 py-10">
          {/* Company Details */}
          <div className="cont">
            <div className="flex items-center mb-4 ml-0" id="logo">
              <img src={afuqLogo} alt="Afuq Digital"  />
             
            </div>
            <p className="text-sm mb-4 text-center">
              We are a creative team of developers delivering professional solutions to elevate your brand. Together, we build innovative, scalable, and visually stunning digital experiences.
            </p>
           
          </div>

          {/* Quick Links */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold mb-3 text-slate-500">Quick Links</h1>
            <ul className="space-y-3">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <Link to={data.path} className="hover:text-gray-300 duration-300">
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold mb-3 text-slate-500">Get in Touch</h1>
            <div>
              <p className="text-sm mb-4">
                Afuq Digital, bringing your digital ideas to life. Contact us for exceptional solutions tailored to your business needs.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <FaMobileAlt className="text-2xl hover:text-slate-500 duration-300" />
                <p className="text-lg">+212 649 009 048</p>
              </div>
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl hover:text-slate-500 duration-300" />
                </a>
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl hover:text-slate-500 duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl hover:text-slate-500 duration-300" />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl hover:text-slate-500 duration-300" />
                </a>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-2xl hover:text-slate-500 duration-300" />
                </a>
                <a href="mailto:your.email@example.com">
                  <FaEnvelope className="text-2xl hover:text-slate-500 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <footer className="text-center py-4 text-slate-500 font-medium text-sm">
          &copy; 2024 Afuq Digital - Developed by Boussarhane Imane  and EL Mouissi Mohamed. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default Footer;
