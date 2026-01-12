import { Link } from "react-scroll";
import { motion } from "framer-motion";
import YourPDFFile from "../../Pics/Mukul_Sarkar_CV3.pdf";

export default function HeroSection() {
  const openPdf = () => window.open(YourPDFFile, "_blank");

  return (
    <section
      id="heroSection"
      className="relative min-h-screen flex items-center justify-center bg-[#0B0F19] text-white overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0E1324] to-[#111827]" />

      {/* Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-indigo-600/30 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-6xl px-6 mx-auto text-center">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base uppercase tracking-[0.25em] text-blue-400"
        >
          Hi, I’m Mukul Sarkar
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Backend & Full-Stack Engineer
          </span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          I build <span className="text-white font-medium">scalable backend systems</span>,  
          design <span className="text-white font-medium">clean APIs</span>,  
          and deliver <span className="text-white font-medium">production-ready full-stack solutions</span>  
           using Python, Django, Docker, and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={openPdf}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.03]"
          >
            Download Resume
          </button>

          <Link
            to="Contact"
            smooth
            duration={500}
            className="px-8 py-3 rounded-xl border border-blue-400/60 text-white font-semibold backdrop-blur-md hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 cursor-pointer"
          >
            Let’s Connect
          </Link>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-3 text-sm text-gray-300"
        >
          {[
            "Python",
            "Django",
            "FastAPI",
            "Docker",
            "PostgreSQL",
            "React",
            "REST APIs",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-[3px] h-[3px] bg-blue-300 rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
