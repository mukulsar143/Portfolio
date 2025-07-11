import { motion } from "framer-motion";
import data from "../../data/index.json";
import pics from "../../data/img/feather-pen-2.png";

export default function MySkills() {
  return (
    <section
      className="relative bg-gradient-to-br from-gray-900 to-black py-24 overflow-hidden"
      id="mySkills"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-30"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 0.5, 0] }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 2,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-white font-sans tracking-tight">
            My Expertise
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Crafting innovative, scalable, and high-performance solutions with cutting-edge tools and technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.skills?.map((item, index) => (
            <motion.div
              key={index}
              className="relative group bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:bg-gray-700/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Skill Icon */}
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <img
                    src={item.icon || pics}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </motion.div>

              {/* Skill Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}