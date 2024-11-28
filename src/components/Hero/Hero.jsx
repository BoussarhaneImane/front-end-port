import React from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";


import imgImane from "../IMANEBOU.jpg";
import imgMohamed from "../mousii.jpg";

const TeamData = [
  {
    id: 1,
    name: "Boussarhane Imane",
    role: "Full-Stack Developer",
    expertise: "MERN Stack Specialist",
    description:
      "Dedicated to building high-performance, scalable, and user-friendly web applications using cutting-edge technologies. Driven by a passion for innovation and delivering impactful digital solutions.",
    image: imgImane,
    cvLink: "/CVImane_Boussarhane.pdf",
  },
  {
    id: 2,
    name: "EL Mouissi Mohamed",
    role: "Full-Stack Developer",
    expertise:
      "Developed full-stack web applications using React.js, Laravel, Next.js, and the MERN stack",
    description:
      "Experienced in creating dynamic, scalable, and efficient full-stack web solutions. Proficient in crafting interactive frontends with React.js and Next.js, combined with robust backend systems using Laravel and the MERN stack.",
    image: imgMohamed,
    cvLink: "/Elmouissi_muhamed_CV.pdf",
  },
];


const Hero = () => {

  return (
    <div className="relative bg-slate-950 py-10 cursor-pointer ">
      

      {/* Hero Content */}
      <div className="container mx-auto text-center mt-10 relative z-10">
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
          className="text-xl sm:text-3xl font-bold text-gray-200 mb-12"
        >
          Meet Our Team
        </h1>
        <p className="text-sm sm:text-sm text-gray-400 mb-8">
          Our team at Afudigital is a passionate group of skilled professionals
          who specialize in delivering cutting-edge digital solutions. We
          collaborate closely to create high-quality web applications and
          innovative technology products.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {TeamData.map((member) => (
            <div
              key={member.id}
              className="bg-slate-900 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between items-center hover:scale-105 transition-transform duration-300 min-h-[450px]"
            >
              {/* Image Section */}
              <div className="relative">
                <div className="h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden border-4 border-violet-600 ">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              {/* Text Content */}
              <div className="flex-1 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold text-gray-200 mt-6">
                  {member.name}
                </h2>
                <p className="text-violet-600  font-medium text-lg">
                  {member.role}
                </p>
                <p className="text-sm font-bold text-gray-200 mt-3">
                  {member.expertise}
                </p>
                <br></br>
                <p className="text-gray-400 text-sm mt-2">
                  {member.description}
                </p>
              </div>
              {/* Button */}
              <a
                href={member.cvLink}
                download
                className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-violet-900 text-gray-200 font-bold text-sm rounded-full shadow-md hover:bg-violet-800 transition duration-300"
              >
                Download CV <PiDownloadSimpleBold className="ml-2 text-lg" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
