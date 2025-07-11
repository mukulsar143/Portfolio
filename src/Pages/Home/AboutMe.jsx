import { motion } from 'framer-motion';
import YourPDFFile from '../../Pics/Software-Engineer.pdf';
import { Link } from 'react-scroll';

export default function AboutMe() {
  const openPdf = () => {
    window.open(YourPDFFile, '_blank');
  };

  return (
    <section
      id="AboutMe"
      className="relative bg-gray-900 py-16 px-6 md:px-12 lg:px-24 text-white overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 opacity-95"></div>

      {/* Minimal Background Orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-indigo-500 rounded-full blur-[80px] opacity-20 animate-pulse"></div>

      <div className="container mx-auto flex flex-col items-center text-center lg:text-left lg:items-start max-w-5xl relative z-10">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 tracking-tight"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed font-light"
        >
          Building innovative, scalable solutions with precision and expertise.
        </motion.p>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="mt-8 space-y-5 text-gray-200 text-base md:text-lg font-light leading-relaxed"
        >
          <p>
            As a <span className="text-blue-400 font-medium">Software Engineer</span>, I specialize in backend development with a focus on Python and Django, crafting scalable and secure applications with optimized performance.
          </p>
          <p>
            My experience extends to full-stack development, leveraging <span className="text-blue-400 font-medium">React.js</span> to build dynamic user interfaces integrated with robust REST APIs using Django Rest Framework.
          </p>
          <p>
            I’m passionate about streamlining processes through <span className="text-blue-400 font-medium">Docker & DevOps</span> practices, ensuring efficient deployment and seamless CI/CD pipelines.
          </p>
          <p>
            Currently, I’m diving into <span className="text-blue-400 font-medium">Data Science</span>, blending analytical insights with software engineering to develop intelligent, data-driven solutions.
          </p>
          <p>
            With expertise in API development and <span className="text-blue-400 font-medium">third-party integrations</span>, I excel at solving complex challenges and delivering maintainable, high-quality code.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={openPdf}
            className="px-6 py-3 bg-blue-600 hoverthink-button-flicker hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Download CV
          </button>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-transparent border border-blue-400 hover:bg-blue-400 hover:text-gray-900 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </section>
  );
}