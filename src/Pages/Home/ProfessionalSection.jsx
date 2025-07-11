import { motion } from "framer-motion";
import logo from "../../Pics/python.jpg";

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
      className="relative bg-gray-900 py-24 px-6 lg:px-24 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-gray-900 opacity-90 animate-gradient"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight font-sans">
            Professional <span className="text-indigo-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            A journey through my professional roles, showcasing expertise in building innovative and scalable solutions.
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="relative bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300 p-8"
            >
              {/* Icon and Title */}
              <div className="flex items-center space-x-4 mb-6">
                <motion.img
                  src={experience.icon}
                  alt={experience.title}
                  className="w-12 h-12 rounded-lg object-cover border-2 border-indigo-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light">
                    {experience.company}
                  </p>
                </div>
              </div>

              {/* Date and Description */}
              <p className="text-sm text-gray-400 font-light italic mb-4">
                {experience.period}
              </p>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                {experience.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background: linear-gradient(270deg, rgba(79, 70, 229, 0.3), rgba(0, 0, 0, 0.9), rgba(79, 70, 229, 0.3));
          background-size: 400% 400%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
}