import { motion } from "framer-motion";
import data from "../../data/index.json";
import placeholder from "../../data/img/placeholder-image-1.png";
import pics from "../../data/img/placeholder-image-1.png";

export default function MyPortfolio() {
  const featuredProject = data?.portfolio?.[0]; // latest project (top priority)
  const otherProjects = data?.portfolio?.slice(1);

  return (
    <section
      id="MyPortfolio"
      className="relative bg-[#0B0F19] py-24 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0E1324] to-[#111827]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Projects
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
            A selection of projects showcasing my experience in backend,
            full-stack development, and real-world problem solving.
          </p>

          <a
            href="https://github.com/mukulsar143"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            View GitHub Profile
          </a>
        </motion.div>

        {/* ⭐ FEATURED PROJECT */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 grid lg:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={pics || pics}
                alt={featuredProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                Latest Project
              </span>

              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                {featuredProject.title}
              </h3>

              <p className="mt-4 text-gray-300 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.tech?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-blue-400 font-medium hover:text-blue-300 transition"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        )}

        {/* OTHER PROJECTS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-400/40 transition"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={pics || pics}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  View →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
