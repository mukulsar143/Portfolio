import { motion } from "framer-motion";
import data from "../../data/index.json";
import pics from "../../data/img/placeholder-image-1.png";

export default function MyPortfolio() {
  return (
    <section
      id="MyPortfolio"
      className="relative bg-gray-900 py-16 px-6 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-indigo-950 opacity-90 animate-gradient"></div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl font-bold text-white mb-6 tracking-tight font-sans">
          My <span className="text-indigo-400">Portfolio</span>
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Explore my latest projects, blending innovation with seamless design.
        </motion.p>
        <a
          href="https://github.com/mukulsar143"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px rgba(99, 102, 241, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-indigo-600 text-white font-medium text-sm rounded-lg shadow-md hover:bg-indigo-500 transition-all duration-300"
          >
            Visit My GitHub
          </motion.button>
        </a>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
        {data?.portfolio?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="relative bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden h-48 sm:h-52">
              <img
                src={item.src || pics}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = pics; // Fallback to placeholder on error
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-5 space-y-3 text-center">
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-indigo-400 font-light">
                  {item.category || "Web Development"}
                </p>
              </div>
              <p className="text-gray-300 text-xs font-light leading-relaxed">
                {item.description}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-200 text-xs font-medium transition-colors duration-300"
              >
                Explore Project
                <svg
                  className="ml-1 w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </motion.div>
        ))}
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