import { Link } from "react-router-dom";
import data from "../../data/index.json";
import pics from "../../data/img/placeholder-image-1.png";
import { motion } from "framer-motion";

export default function MyPortfolio() {
  return (
    <section
      id="MyPortfolio"
      className="relative bg-black py-16 px-6 lg:px-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 bg-animation" />
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight font-serif animate-glow">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-serif"
        >
          Explore my latest creations, where technology meets innovation.
        </motion.p>
        <Link
          to="https://github.com/mukulsar143"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 12px rgba(128,0,128,0.6)",
            }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full shadow-lg transition-all animate-button-glow"
          >
            Visit My GitHub
          </motion.button>
        </Link>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {data?.portfolio?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 animate-float"
          >
            <div className="relative overflow-hidden h-52 sm:h-60 md:h-72 lg:h-80">
              <img
                src={pics}
                alt={item.title}
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 space-y-4 text-center">
              <h3 className="text-2xl font-sans text-white transition-all duration-300 group-hover:text-purple-400 animate-glow">
                {item.title}
              </h3>
              <p className="text-gray-400 font-serif transition-all duration-300 group-hover:text-gray-200 animate-pulse">
                {item.description}
              </p>
              <Link
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-200 text-sm font-medium transition-transform transform group-hover:translate-x-1"
              >
                Explore Project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Animation */}
      <style jsx>{`
        @keyframes moveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-animation {
          background: linear-gradient(270deg, rgba(72, 61, 139, 0.5), rgba(0, 0, 0, 0.9), rgba(72, 61, 139, 0.5));
          background-size: 400% 400%;
          animation: moveGradient 6s ease infinite;
          opacity: 0.3;
        }
      `}</style>
    </section>
  );
}
