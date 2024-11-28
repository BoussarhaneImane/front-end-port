import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://back-port-9.onrender.com/send-whatsapp', formData)
      .then(response => {
        if (response.data.success) {
          setStatus('Message sent successfully I will contact you on your phone WhatsApp!');
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
    <div className="space-y-2 font-medium">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-pink-600 font-bold" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-slate-800 text-gray-200 border border-pink-600 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-pink-600 font-bold" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-slate-800 text-gray-200 border border-pink-600 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-pink-600 font-bold" htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 bg-slate-800 text-gray-200 border border-pink-600 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-pink-600 font-bold" htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-slate-800 text-gray-200 border border-pink-600 rounded"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-pink-600 text-white py-2 px-4 rounded-full hover:bg-pink-700 transition duration-300"
        >
          Send Message
        </button>
        {status && <p className="text-pink-600 mt-2 font-bold">{status}</p>}
      </form>

      <div className="flex space-x-6 justify-center text-pink-600 mt-8">
        <a href="mailto:boussarhaneimane@gmail.com" className="hover:text-pink-700 transition duration-300" aria-label="Email">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.instagram.com/boussarhane_imane" className="hover:text-pink-700 transition duration-300" aria-label="Instagram">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100084314748068&locale=fr_FR" className="hover:text-pink-700 transition duration-300" aria-label="Facebook">
          <FaFacebook size={24} />
        </a>
        <a href="https://wa.me/+212649009048" className="hover:text-pink-700 transition duration-300" aria-label="WhatsApp">
          <FaWhatsapp size={24} />
        </a>
        <a href="https://www.linkedin.com/in/boussarhane-imane-bb1178298" className="hover:text-pink-700 transition duration-300" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/BoussarhaneImane" className="hover:text-pink-700 transition duration-300" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
