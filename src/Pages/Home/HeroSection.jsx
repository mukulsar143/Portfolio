import logo from '../../data/img/my_pic.jpg';
import YourPDFFile from '../../Pics/Mukul-Sarkar-CV.pdf';

export default function HeroSection() {
  const openPdf = () => {
    window.open(YourPDFFile, '_blank'); // Open the PDF file in a new tab
  };

  return (
    <section
      id="heroSection"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center overflow-y-auto"
    >
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm sm:text-lg text-purple-400 font-medium uppercase tracking-wider font-extralight hover:text-white transform transition-all duration-300 ease-in-out hover:scale-105">
            Hey, I'm Mukul
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Software Engineer
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 leading-relaxed font-mono">
            Backend Engineer | Python Developer | Docker <br />
            Aspiring Data Scientist
          </p>
          <div className="mt-6 space-x-4 flex flex-col sm:flex-row items-center sm:items-start">
            <button
              onClick={openPdf}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 w-full sm:w-auto"
            >
              Get My CV
            </button>
            <a
              href="#contact"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 w-full sm:w-auto mt-4 sm:mt-0"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Circular Glow */}
            <div className="absolute -inset-2 bg-gradient-to-br from-purple-600 to-blue-500 rounded-t-2xl blur-3xl opacity-50"></div>
            {/* Profile Image */}
            <img
              src={logo}
              alt="Mukul Sarkar"
              className="relative z-20 w-64 sm:w-80 lg:w-96 xl:w-120 w-full rounded-3xl shadow-xl border-4 border-gray-700 transform transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-125 hover:rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
