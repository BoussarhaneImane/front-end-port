import React from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaCode, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import imgImane from "./VS.png";
import vd from './projet2.mp4'
import vd2 from './record3.mp4'
import Animate from "../Animate";
import  "../Navbar/Nav.css";
import Animatetwo from "../Animatetwo";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-indigo-950 py-10 overflow-hidden">
      <Animate />
      <Animatetwo/>
      {/* Hero Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left mt-28 relative z-10 px-4">
        {/* Photo */}
      

      {/* Title and About Me */}
<div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-10 space-y-12">
  {/* Title with Animation 
  <h1
    className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 tracking-wide relative"
    data-aos="zoom-in"
    data-aos-duration="2000"
    data-aos-once="true"
  >
    Welcome to{" "}
    <span
      className="block text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400 animate-gradient"
      style={{
        animation: "gradient 4s ease infinite",
      }}
    >
      Imane's Portfolio
    </span>
  </h1>

  <p
    className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4"
    data-aos="fade-up"
    data-aos-duration="1800"
    data-aos-once="true"
  >
    Passionate developer crafting modern, elegant, and high-performance web applications.
  </p>*/}
{/* About Me */}
{/* About Me */}
<div className="relative flex justify-center items-center ">
  {/* Glowing Circle */}
  <div className="absolute bg-gradient-to-br from-pink-800 via-indigo-500 to-purple-500 w-96 h-96 rounded-full blur-3xl opacity-90"></div>

  {/* About Me Card */}
  <div
    data-aos="fade-left"
    data-aos-duration="1800"
    data-aos-once="true"
    className="relative bg-gradient-to-br from-slate-100 to-slate-200 opacity-50 z-10 p-8 rounded-full shadow-2xl w-96 h-96 flex flex-col justify-center items-center"
  >
    <div className="text-4xl text-indigo-900 animate-wave mb-4" title="Say Hello to the World!">
      👋
    </div>

    <h1
      className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-indigo-900 tracking-wide text-center"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <Typewriter
        options={{
          strings: [
            '<span style="font-size: 1.5rem; font-weight: 900;">Welcome to</span>',
            '<span style="font-size: 1.5rem; font-weight: 900;">Imane\'s Portfolio</span>',
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </h1>

    <p className="text-sm text-indigo-950 leading-relaxed mt-4 text-center">
      I hold a Scientific Baccalaureate with honors and a 2-year diploma in web development. I have experience delivering creative, tailored online solutions and contributed to a Company Management System during a 3-month remote internship.
    </p>
  </div>
</div>
</div>

<div className="relative flex justify-center items-center ">
  {/* Glowing Circle */}
  

  {/* Image Container */}
  <div className="flex justify-center ">
    <img 
      data-aos="fade-right" 
      data-aos-duration="1800" 
      data-aos-once="true" 
      src={imgImane} 
      alt="Imane Boussarhane" 
      className="w-80 h-full  rounded-lg object-cover md:ml-28 img" 
    />
  </div>
</div>

      </div>{/* Video Section */}
<div className="">
  <h2
    className="text-3xl md:text-4xl font-bold text-center mt-10  text-slate-100 mb-12"
    data-aos="fade-left"
    data-aos-duration="1500"
  >
    Discover My Work in Motion
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center ">
    <video
      src={vd}
      autoPlay
      muted
      loop
      className="w-full rounded-xl shadow-lg"
      data-aos="zoom-in"
      data-aos-duration="1500"
    />
    <video
      src={vd2}
      autoPlay
      muted
      loop
      className="w-full rounded-xl shadow-lg"
      data-aos="zoom-out"
      data-aos-duration="1500"
    />
  </div>
</div>

{/* Highlights Section */}
<div className="my-16">
  <h2
    className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-100"
    data-aos="fade-right"
    data-aos-duration="1500"
  >
    Highlights of My Expertise
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-12">
    <div
      className="relative bg-gradient-to-br from-indigo-900 to-gray-900  text-slate-100 p-6 rounded-lg shadow-lg"
      data-aos="fade-left"
      data-aos-duration="1600"
    >
      <FaCode className="text-4xl mb-4" />
      <h3 className="text-xl font-bold">Full-Stack Development</h3>
      <p className="text-gray-300 mt-2">
        Specializing in creating efficient, scalable, and user-friendly applications.
      </p>
    </div>
    <div
      className="relative bg-gradient-to-br from-pink-900 to-gray-700  text-slate-100 p-6 rounded-lg shadow-lg"
      data-aos="fade-down"
      data-aos-duration="1600"
    >
      <FaLaptopCode className="text-4xl mb-4" />
      <h3 className="text-xl font-bold">Modern Tools</h3>
      <p className="text-gray-300 mt-2">
        Proficient in React.js, Node.js, MongoDB, and more.
      </p>
    </div>
    <div
      className="relative bg-gradient-to-br from-indigo-900 to-gray-900  text-slate-100 p-6 rounded-lg shadow-lg"
      data-aos="fade-right"
      data-aos-duration="1600"
    >
      <FaProjectDiagram className="text-4xl mb-4" />
      <h3 className="text-xl font-bold">Problem Solver</h3>
      <p className="text-gray-300 mt-2">
        Delivering custom solutions tailored to client needs.
      </p>
    </div>
  </div>
</div>

       

        {/* Call to Action */}
        <div className="mt-16 flex justify-center relative">
          <a
            href="/CV_Imane_Boussarhane3.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-pink-900 text-gray-200 font-bold text-lg rounded-full shadow-md hover:bg-white hover:text-slate-800 transition duration-300"
          >
            Download CV <PiDownloadSimpleBold className="ml-2 text-2xl" />
          </a>
        </div>
      </div>
  
  );
};

export default Hero;
