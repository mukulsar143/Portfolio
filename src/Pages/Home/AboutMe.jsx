import logo from "../../Pics/mypic66.jpg";
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
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Image Section */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]">
            {/* Circular Glow with Background Gradient */}
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-3xl opacity-50"></div>
            {/* Profile Image */}
            <img
              src={logo}
              alt="Mukul Sarkar"
              className="relative z-20 w-full h-full object-cover rounded-3xl shadow-xl border-4 border-gray-700 transform transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-125 hover:rotate-3"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-300 tracking-wide mb-6 font-bold">
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am a{" "}
            <strong className="text-purple-400">Software Engineer</strong>{" "}
            specializing in backend development with Python and Django, with
            extensive experience in full-stack projects. My expertise spans
            creating dynamic web applications using{" "}
            <strong className="text-purple-400">React.js</strong> on the
            frontend and Django Rest Framework for scalable backend solutions.
            Additionally, I have integrated various third-party APIs to enhance
            functionality and optimize workflows.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I thrive on building robust and scalable solutions while improving
            functionality by implementing core features. My work reflects a deep
            understanding of{" "}
            <span className="text-purple-400">modern software development</span>{" "}
            practices, containerized applications, and database management.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            In my full-stack projects, I have successfully handled end-to-end
            development, including creating intuitive user interfaces, crafting
            RESTful APIs, and ensuring seamless integrations with third-party
            services. My ability to troubleshoot complex issues and deliver
            efficient solutions highlights my proficiency in the software
            lifecycle.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Currently working as a Python Developer, I actively contribute to
            product efficiency and scalability while exploring the exciting
            field of data science.
          </p>

          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4">
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
