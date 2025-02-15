import { motion } from "framer-motion";
import data from "../../data/index.json";
import logo from "../../Pics/python.jpg";

export default function Testimonial() {
  return (
    <section className="testimonial-section relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20" id="testimonial">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-blue-900 opacity-30 animate-pulse" />
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight font-mono animate-slide-in">
            Licenses & Certifications
          </h2>
          <p className="text-lg text-gray-400 animate-fade-in">
            Read what others are saying about my work and expertise.
          </p>
        </motion.div>

        {/* Testimonials Grid */}

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {data?.testimonial?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative bg-gray-800 text-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700 p-8"
          >
            {/* Animated Star Rating */}
            <div className="flex justify-center space-x-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-yellow-400 animate-pulse"
                >
                  <path
                    d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 9.91 8.63 3 9.24l5.46 4.73L5.82 21z"
                    fill="#FFD700"
                  />
                </motion.svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg text-gray-300 italic leading-relaxed">
              "{item.description}"
            </p>

            {/* Author Information */}
            <div className="flex items-center mt-6 space-x-4">
              <motion.img
                src={logo}
                alt="Author Avatar"
                className="w-14 h-14 rounded-full border-2 border-white transform transition-all duration-300 hover:scale-110"
                whileHover={{ rotate: 360 }}
              />
              <div>
                <p className="text-md font-semibold text-white">
                  {item.author_name}
                </p>
                <p className="text-sm text-gray-400">
                  {item.author_designation}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
