import React from "react";
import { motion } from "framer-motion";
import logo from '../../Pics/python.jpg';

export default function ExperiencesSection() {
  const experiences = [
    {
      title: "SDE - Backend Engineer",
      period: "2024 - Present",
      company: "Online Savaari",
      description:
        "Experienced backend developer specializing in Python and Django Rest Framework. Skilled in designing and developing scalable RESTful APIs, integrating complex data, and working with third-party APIs. Strong expertise in data modeling, performance optimization, and ensuring secure and efficient communication between services.",
      icon: logo,
    },
    {
      title: "Python Developer",
      period: "2024 - 2024",
      company: "Exackt Techfleeters",
      description:
        "Developed scalable web applications using Python and Django, optimizing performance and reliability. Designed complex APIs for seamless data exchange between frontend and backend. Built a feature-rich portal website and a real-time chat application using Django and WebSockets.",
      icon: logo,
    },
    {
      title: "Web Developer",
      period: "2023 - 2024",
      company: "Aara Groups",
      description:
        "Utilized React components, hooks, and state management for dynamic, responsive pages. Collaborated with team members to integrate REST APIs, ensuring efficient data flow. Strengthened skills in React.js and modern front-end development practices.",
      icon: logo,
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-16 px-6 lg:px-20 bg-black text-white overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-80 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-16 tracking-wide font-serif text-shadow-lg relative z-10"
      >
        My <span className="text-purple-400">Professional Experiences</span>
      </motion.h2>

      {/* Experience Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="experience-card bg-gray-800 text-white rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:shadow-3xl hover:bg-gray-700 hover:scale-105 hover:border-purple-500 border-2"
          >
            <div className="p-6 space-y-6">
              {/* Icon and Title */}
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-2xl font-bold font-sans text-purple-300">
                    {experience.title}
                  </h3>
                  <p className="text-lg text-gray-400 font-serif">
                    {experience.company}
                  </p>
                </div>
              </div>
              {/* Date and Description */}
              <p className="text-lg text-gray-300 font-light italic">
                {experience.period}
              </p>
              <p className="text-base text-gray-200 leading-relaxed font-mono">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}