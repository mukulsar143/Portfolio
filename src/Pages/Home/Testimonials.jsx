import { motion } from "framer-motion";
import data from "../../data/index.json";
import logo from "../../Pics/python.jpg";

export default function Testimonial() {
  return (
    <section
      className="relative bg-gray-900 py-24 px-6 lg:px-24 overflow-hidden"
      id="testimonial"
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
            Licenses & <span className="text-indigo-400">Certifications</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            A showcase of my professional credentials and endorsements from industry leaders.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {data?.testimonial?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="relative bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300 p-8"
            >
              {/* Star Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#FBBF24"
                    className="text-yellow-400"
                  >
                    <path
                      d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 9.91 8.63 3 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm font-light leading-relaxed italic text-center">
                "{item.description}"
              </p>

              {/* Author Information */}
              <div className="flex items-center mt-6 space-x-4 justify-center">
                <motion.img
                  src={item.avatar || logo}
                  alt={item.author_name}
                  className="w-12 h-12 rounded-full border-2 border-indigo-400 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="text-center">
                  <p className="text-md font-semibold text-white">
                    {item.author_name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {item.author_designation}
                  </p>
                </div>
              </div>

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