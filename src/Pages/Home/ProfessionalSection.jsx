import React from "react";
import logo  from '../../Pics/python.jpg'

export default function ExperiencesSection() {
  const experiences = [
    {
      title: "SDE - Backend Engineer",
      period: "2024 - Present",
      company : "Online Savaari",
      description:
        "Experienced backend developer specializing in Python and Django Rest Framework. Skilled in designing and developing scalable RESTful APIs, integrating complex data, and working with third-party APIs. Strong expertise in data modeling, performance optimization, and ensuring secure and efficient communication between services.",
      icon: logo, // Replace with relevant icon or image
    },
    {
      title: "Python Developer",
      period: "2024 - 2024",
      company : "Exackt Techfleeters",
      description:
        "Developed scalable web applications using Python and Django, optimizing performance and reliability, Designed complex APIs for seamless data exchange between frontend and backend, Built a feature-rich portal website and a real-time chat application using Django and WebSockets.",
      icon: logo, // Replace with relevant icon or image
    },
    {
      title: "Web Developer",
      period: "2023 - 2024",
      company : "Aara Groups",
      description:
        "Utilized React components, hooks, and state management for dynamic, responsive pages, Collaborated with team members to integrate REST APIs, ensuring efficient data flow, Strengthened skills in React.js and modern front-end development practices.",
      icon: logo, // Replace with relevant icon or image
    },
  ];

  return (
    <section className="experiences-section" id="experience">
      <h2 className="experiences-title">My Professional Experiences</h2>
      <div className="experiences-grid">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            {/* <img
              src={experience.icon}
              alt={experience.title}
              className="experience-icon"
            /> */}
            <h3 className="experience-title">{experience.title}</h3>
            <p className="experience-period">{experience.period}</p>
            <p className="experience-company">{experience.company}</p>
            <p className="experience-description">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
