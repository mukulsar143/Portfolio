import { motion } from 'framer-motion';
import YourPDFFile from '../../Pics/Mukul-Sarkar-CV.pdf';
import { Link } from 'react-scroll';

export default function AboutMe() {
    const openPdf = () => {
      window.open(YourPDFFile, '_blank'); // Open the PDF file in a new tab
    };
  
  return (
    <section
      id="AboutMe"
      className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-40 left-10 w-96 h-96 bg-purple-700 opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-700 opacity-30 blur-3xl animate-ping"></div>
      
      <div className="container mx-auto flex flex-col items-center text-center lg:text-left lg:items-start max-w-5xl">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 tracking-wide"
        >
          About <span className="text-purple-500">Me</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg text-gray-300 leading-relaxed font-mono"
        >
          Crafting robust, scalable applications with precision and creativity.
        </motion.p>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-6 space-y-6 text-gray-400 font-sans text-lg"
        >
          <p>
            As a <span className="text-purple-400 font-semibold">Software Engineer</span>, my expertise lies in
            backend development, specializing in Python and Django. I architect scalable, secure applications while
            optimizing performance.
          </p>
          <p>
            I have experience building full-stack applications using
            <span className="text-blue-400 font-semibold"> React.js</span> on the frontend, integrating dynamic UIs with
            robust REST APIs powered by Django Rest Framework.
          </p>
          <p>
            Passionate about automation and efficiency, I utilize
            <span className="text-purple-400 font-semibold"> Docker & DevOps</span> methodologies to streamline deployment
            and CI/CD pipelines.
          </p>
          <p>
            Currently exploring <span className="text-blue-400 font-semibold">Data Science</span>, aiming to merge
            analytical insights with software development to create intelligent, data-driven applications.
          </p>
          <p>
          My full-stack expertise includes API development, and seamless
            integration with{" "}
            <span className="text-blue-400 font-semibold glow-effect">
              third-party service integrations
            </span>
            . I excel in troubleshooting complex challenges and delivering
            robust, maintainable code.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row gap-6"
        >
          <button
            onClick={openPdf}
            className="px-8 py-3 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-full drop-shadow-lg transition-all transform hover:scale-105 hover:shadow-purple-500/70 animate-button-glow"
          >
            📄 Get My CV
          </button>
          <Link
            to="Contact"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full drop-shadow-lg transition-all transform hover:scale-105 hover:shadow-blue-500/70 animate-button-glow"
          >
            ✉️ Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
