import React from "react";
import logo from '../../Pics/python.jpg';

export default function ExperiencesSection() {
  const experiences = [
    {
      title: "SDE - Backend Engineer",
      period: "2024 - Present",
      company: "Online Savaari",
      description:
        "Experienced backend developer specializing in Python and Django Rest Framework. Skilled in designing and developing scalable RESTful APIs, integrating complex data, and working with third-party APIs. Strong expertise in data modeling, performance optimization, and ensuring secure and efficient communication between services.",
      icon: logo, // Replace with relevant icon or image
    },
    {
      title: "Python Developer",
      period: "2024 - 2024",
      company: "Exackt Techfleeters",
      description:
        "Developed scalable web applications using Python and Django, optimizing performance and reliability, Designed complex APIs for seamless data exchange between frontend and backend, Built a feature-rich portal website and a real-time chat application using Django and WebSockets.",
      icon: logo, // Replace with relevant icon or image
    },
    {
      title: "Web Developer",
      period: "2023 - 2024",
      company: "Aara Groups",
      description:
        "Utilized React components, hooks, and state management for dynamic, responsive pages, Collaborated with team members to integrate REST APIs, ensuring efficient data flow, Strengthened skills in React.js and modern front-end development practices.",
      icon: logo, // Replace with relevant icon or image
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 lg:px-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <h2 className="text-5xl font-extrabold text-center mb-16 tracking-tight font-serif text-shadow-md">
        My Professional Experiences
      </h2>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="experience-card bg-gray-800 text-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-600"
          >
            <div className="p-6 space-y-6">
              {/* Icon and Title */}
              <div className="flex items-center space-x-4">
                <img
                  src={experience.icon}
                  alt={experience.title}
                  className="w-16 h-16 rounded-full border-2 border-white transform transition-all duration-300 hover:scale-110"
                />
                <div>
                  <h3 className="text-2xl font-semibold">{experience.title}</h3>
                  <p className="text-lg text-gray-400">{experience.company}</p>
                </div>
              </div>
              {/* Date and Description */}
              <p className="text-lg text-gray-300">{experience.period}</p>
              <p className="text-base text-gray-200">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
