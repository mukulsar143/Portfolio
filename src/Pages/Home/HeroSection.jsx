import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import YourPDFFile from '../../Pics/Mukul-Sarkar-CV.pdf';

export default function HeroSection() {
  const openPdf = () => {
    window.open(YourPDFFile, '_blank');
  };

  return (
    <section
      id="heroSection"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950 opacity-90 animate-bg-wave"></div>

      {/* Floating Neon Orbs */}
      <div className="absolute top-20 left-24 w-64 h-64 bg-purple-900 rounded-full blur-[120px] opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-16 right-20 w-72 h-72 bg-blue-900 rounded-full blur-[120px] opacity-50 animate-fade-in-out"></div>

      <div className="container mx-auto px-6 lg:px-16 flex flex-col items-center text-center relative z-10">
        {/* Animated Intro Text */}
        <motion.p 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-purple-400 font-semibold uppercase tracking-widest drop-shadow-md animate-text-glow"
        >
          Hey, I'm Mukul 👋
        </motion.p>

        {/* Animated Title with 3D Bounce & Glow */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 drop-shadow-lg animate-text-bounce"
        >
          Software Engineer
        </motion.h1>

        {/* Glowing Subtitle with Wave Effect */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
          className="text-xl sm:text-2xl text-gray-300 mt-4 font-mono drop-shadow-md animate-text-wave"
        >
          Backend Engineer | Python Developer | Docker | AI Enthusiast | <br /> Full Stack Developer
        </motion.p>

        {/* Buttons with Flickering Glow & Scaling Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row gap-6"
        >
          <button
            onClick={openPdf}
            className="px-8 py-3 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-full drop-shadow-lg transition-all transform hover:scale-105 animate-button-flicker"
          >
            📄 Get My CV
          </button>
          <Link
            to="Contact"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full drop-shadow-lg transition-all transform hover:scale-105 animate-button-flicker"
          >
            ✉️ Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Floating Particles with Slow Drift */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[4px] h-[4px] bg-white rounded-full opacity-15"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
              scale: Math.random() * 1.2,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
