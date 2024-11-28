import React from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import afuqLogo from "../Navbar/logo.png"; // Replace with the actual path to your Afuq Digital logo

const FooterLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/Services" },
  { title: "Work", path: "/Projects" },
  { title: "Contact", path: "/Contact" },
];

const Footer = () => {
  return (
    <div className="bg-slate-950 text-gray-300 font-medium pt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 py-10">
          {/* Company Details */}
          <div className="">
            <div className="flex items-center mb-4" id="logo">
              <img src={afuqLogo} alt="Afuq Digital" className="  " />
             
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
