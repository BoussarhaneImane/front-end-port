import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaTimes, FaUser, FaPhone, FaRegEnvelope, FaCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Animate from '../Animate';
import Animatetwo from '../Animatetwo';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://backend-port-6eer.onrender.com/send-email', formData)
      .then(response => {
        if (response.data.success) {
          setStatus('Message sent successfully! This number must be a WhatsApp number to contact you thank you!');
          setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form after successful submission
        } else {
          setStatus('Failed to send message.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setStatus('Error sending message.');
      });
  };

  return (
    <>
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 to-indigo-950   overflow-hidden pb-4">
   <Animate/>
   <Animatetwo/>
      {/* Close Button */}
      <div className="flex justify-end p-2 m-2 relative">
        <Link to="/">
          <button className="text-pink-950 rounded-full bg-slate-200 p-2 shadow">
            <FaTimes size={24} />
          </button>
        </Link>
      </div>
  
      {/* Form Section */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="text-sm sm:text-sm text-gray-400 mb-2 relative z-10 px-6 py-5 bg-slate-200 rounded-lg shadow-lg shadow-indigo-500/50 transform hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-lg"
        >
          <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
            className="text-center text-xl sm:text-2xl font-medium text-indigo-950 mb-4"
          >
            I'm Here to Help Share Your Details with Us!
          </h2>
          <div>
            <label
              className="flex items-center text-pink-950 font-medium mt-4 mb-2"
              htmlFor="name"
            >
              <FaUser
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-once="true"
                className="mr-2"
              />{" "}
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 text-xs bg-white text-pink-950 border border-violet-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-950"
              required
            />
          </div>
          <div>
            <label
              className="flex items-center text-pink-950 font-medium mt-4 mb-2"
              htmlFor="email"
            >
              <FaRegEnvelope
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-once="true"
                className="mr-2"
              />{" "}
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 text-xs bg-white text-pink-950 border border-violet-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-950"
              required
            />
          </div>
          <div>
            <label
              className="flex items-center text-pink-950 font-medium mt-4 mb-2"
              htmlFor="phone"
            >
              <FaPhone
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-once="true"
                className="mr-2"
              />{" "}
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 text-xs bg-white text-pink-950 border border-violet-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-950"
              required
            />
          </div>
          <div>
            <label
              className="flex items-center text-pink-950 font-medium mt-4 mb-2"
              htmlFor="message"
            >
              <FaCommentDots
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-once="true"
                className="mr-2"
              />{" "}
              Message:
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 text-xs bg-white text-pink-950 border border-violet-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-950"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-3 font-medium bg-pink-950 text-white p-2 rounded hover:bg-violet-700 transition duration-300 focus:outline-none focupink-95focus:ring-violet-800"
          >
            Send Message
          </button>
          {status && (
            <p className="text-indigo-950 mt-2 font-medium">{status}</p>
          )}
        </form>
  
        {/* Social Links */}
        <div className="flex space-x-6 justify-center text-gray-200 mt-8">
          <a
            href="mailto:boussarhaneimane@gmail.com"
            className="hover:text-pink-950 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
              size={24}
            />
          </a>
          <a
            href="https://www.instagram.com/boussarhane_imane"
            className="hover:text-pink-950 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
              size={24}
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100084314748068&locale=fr_FR"
            className="hover:text-pink-950 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
              size={24}
            />
          </a>
          <a
            href="https://wa.me/212632409738"
            className="hover:text-pink-950 transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
              size={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/boussarhane-imane-bb1178298"
            className="hover:text-pink-950 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
              size={24}
            />
          </a>
          <a
            href="https://github.com/BoussarhaneImane"
            className="hover:text-pink-950 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
              size={24}
            />
          </a>
        </div>
      </div>
    </div>
  </>
  
  );
};

export default ContactForm;
