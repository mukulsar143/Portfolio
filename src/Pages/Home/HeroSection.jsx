import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import YourPDFFile from '../../Pics/Software-Engineer.pdf';

export default function HeroSection() {
  const openPdf = () => {
    window.open(YourPDFFile, '_blank');
  };

  return (
    <section
      id="heroSection"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 opacity-95"></div>

      {/* Minimal Background Orbs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-indigo-500 rounded-full blur-[80px] opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center text-center relative z-10">
        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-base md:text-lg text-blue-300 font-medium uppercase tracking-wider"
        >
          Hello, I'm Mukul
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
        >
          Software Engineer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mt-6 font-light max-w-2xl leading-relaxed"
        >
          Specializing in Backend Development, Python, Docker, and Full Stack Solutions
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={openPdf}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Download CV
          </button>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-transparent border border-blue-400 hover:bg-blue-400 hover:text-gray-900 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-blue-200 rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2,
              scale: Math.random() * 0.8 + 0.5,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  );
}