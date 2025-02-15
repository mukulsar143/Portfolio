import { motion } from "framer-motion";
import data from "../../data/index.json";
import pics from "../../data/img/feather-pen-2.png";

export default function MySkills() {
  return (
    <section
      className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 overflow-hidden"
      id="mySkills"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(72,85,99,0.2)_0%,_rgba(0,0,0,1)_100%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-transparent overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-50"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: 1 }}
            transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, ease: "linear" }}
            style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-300 font-serif animate-fade-in">
            My Expertise
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto font-sans animate-slide-up">
            A showcase of the tools and technologies I master to build innovative and scalable solutions.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data?.skills?.map((item, index) => (
            <motion.div
              key={index}
              className="relative group bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:-translate-y-3 p-6 hover:scale-105 overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Skill Icon with Background */}
              <motion.div
                className="flex items-center justify-center mb-6 animate-bounce-slow"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src={item.icon || pics}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </motion.div>

              {/* Card Content */}
              <motion.div className="text-center">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition font-serif animate-slide-up">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-3 font-sans animate-fade-in">
                  {item.description}
                </p>
              </motion.div>

              {/* Floating Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-20 transition duration-500 blur-lg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}