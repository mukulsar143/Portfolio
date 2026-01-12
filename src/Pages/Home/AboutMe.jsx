import { motion } from "framer-motion";
import { Link } from "react-scroll";
import YourPDFFile from "../../Pics/Software-Engineer.pdf";

export default function AboutMe() {
  const openPdf = () => window.open(YourPDFFile, "_blank");

  return (
    <section
      id="AboutMe"
      className="relative bg-[#0B0F19] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0E1324] to-[#111827]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
        >
          About Me
        </motion.h2>

        {/* Short tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-300 text-base sm:text-lg max-w-3xl"
        >
          Backend-focused software engineer building scalable systems with clean architecture and real-world impact.
        </motion.p>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-10 space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed max-w-4xl"
        >
          <p>
            I am a <span className="text-blue-400 font-medium">Software Engineer</span> with a strong focus on backend development, specializing in building scalable, secure, and high-performance applications using Python and Django.
          </p>

          <p>
            My work revolves around designing clean <span className="text-blue-400 font-medium">RESTful APIs</span>, handling complex business logic, and ensuring systems remain reliable and maintainable as they scale.
          </p>

          <p>
            On the frontend, I work with <span className="text-blue-400 font-medium">React.js</span> to create responsive and intuitive user interfaces that integrate seamlessly with backend services.
          </p>

          <p>
            I actively use <span className="text-blue-400 font-medium">Docker and modern DevOps practices</span> to streamline deployments, improve consistency across environments, and support CI/CD workflows.
          </p>

          <p>
            Currently, I am expanding into <span className="text-blue-400 font-medium">Data Science and intelligent systems</span>, aiming to combine analytical insights with robust engineering to build data-driven products.
          </p>

          <p>
            I enjoy solving real-world problems, working with third-party integrations, and delivering production-ready solutions that teams can confidently scale and maintain.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={openPdf}
            className="px-7 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-blue-500/40 transition-all"
          >
            Download Resume
          </button>

          <Link
            to="Contact"
            smooth
            duration={500}
            className="px-7 py-3 rounded-xl border border-blue-400/60 text-white font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
