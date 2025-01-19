import logo from "../../Pics/mypic2.jpg";
import YourPDFFile from "../../Pics/Mukul-Sarkar-CV.pdf";

export default function AboutMe() {
  const openPdf = () => {
    window.open(YourPDFFile, "_blank"); // Open the PDF file in a new tab
  };

  return (
    <section
      id="AboutMe"
      className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-120 lg:h-120">
            {/* Circular Glow with Background Gradient */}
            <div className="absolute -inset-2 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-3xl opacity-50"></div>
            {/* Profile Image */}
            <img
              src={logo}
              alt="Mukul Sarkar"
              className="relative z-20 w-full h-full object-cover rounded-3xl shadow-xl border-4 border-gray-700 transform transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-125 hover:rotate-3"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-300 tracking-wide mb-4">
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am a{" "}
            <strong className="text-purple-400">Software Engineer</strong>{" "}
            specializing in backend development with Python and Django, and I
            have extensive experience in full-stack projects. My technical
            expertise spans across databases, containerized applications, and
            API integrations.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I thrive on building scalable solutions and improving functionality
            by implementing core features. My work demonstrates a deep
            understanding of{" "}
            <span className="text-purple-400">modern software development</span>{" "}
            practices.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Currently working as a Python Developer, I actively contribute to
            product efficiency while exploring the exciting field of data
            science.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <button
              className="px-8 py-3 bg-purple-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-purple-700 transform hover:-translate-y-1 transition duration-300 w-full md:w-auto"
              onClick={openPdf}
            >
              Download CV
            </button>
            <a
              href="#Contact"
              className="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-600 text-lg font-medium rounded-lg shadow-md hover:bg-purple-600 hover:text-white transform hover:-translate-y-1 transition duration-300 w-full md:w-auto"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
