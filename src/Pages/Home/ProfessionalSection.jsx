import { motion } from "framer-motion";
import logo from "../../Pics/python.jpg";

export default function ExperiencesSection() {
  const experiences = [
    {
      role: "Application Developer",
      company: "Exackt Techfleeters",
      period: "2024 – Present",
      current: true,
      points: [
        "Currently working as an Application Developer, building and maintaining backend-driven applications.",
        "Developing RESTful APIs using Python and Django Rest Framework for application features.",
        "Implementing business logic, validations, and data models for scalable applications.",
        "Working on real-time features using Django Channels and WebSockets.",
        "Collaborating with frontend developers to integrate APIs into user-facing applications.",
      ],
    },
    {
      role: "Backend / Python Developer",
      company: "Online Savaari",
      period: "2024",
      current: false,
      points: [
        "Worked on backend development using Python and Django Rest Framework.",
        "Designed and implemented REST APIs for core application functionality.",
        "Handled third-party API integrations and backend data processing.",
        "Focused on performance optimization and secure backend communication.",
      ],
    },
    {
      role: "Web Developer",
      company: "Aara Groups",
      period: "2023 – 2024",
      current: false,
      points: [
        "Developed responsive user interfaces using React.js.",
        "Integrated REST APIs and handled client-side state management.",
        "Worked closely with backend teams to deliver complete features.",
        "Improved UI performance and usability across devices.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-[#0B0F19] py-24 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0E1324] to-[#111827]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/10 blur-[180px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Experience
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
            Professional experience in application development, backend systems, and full-stack web development.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border p-6 sm:p-8 backdrop-blur-md transition
                ${
                  exp.current
                    ? "bg-white/10 border-blue-400/40"
                    : "bg-white/5 border-white/10"
                }`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={logo}
                    alt={exp.role}
                    className="w-12 h-12 rounded-lg object-cover border border-blue-400/50"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-gray-400">
                  {exp.period}
                </span>
              </div>

              {/* Responsibilities */}
              <ul className="mt-4 space-y-2 text-gray-300 text-sm sm:text-base leading-relaxed list-disc list-inside">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Current Badge */}
              {exp.current && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-400/40">
                  Current
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
