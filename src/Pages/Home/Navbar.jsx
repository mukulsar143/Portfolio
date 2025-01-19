import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-indigo-800 to-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold text-white tracking-wide">
              Portfolio<span className="text-purple-300">.</span>
            </h1>
          </div>

          {/* Hamburger for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleNav}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={navActive ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div
            className={`lg:flex lg:items-center lg:space-x-8 space-y-4 lg:space-y-0 mt-4 lg:mt-0 ${
              navActive ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 text-white text-lg font-medium">
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-purple-300 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="mySkills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-purple-300 transition-all duration-300"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="AboutMe"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-purple-300 transition-all duration-300"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-purple-300 transition-all duration-300"
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-purple-300 transition-all duration-300"
                >
                  Experiences
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden lg:block">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full font-medium shadow-md transition-all duration-300"
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navActive && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="flex flex-col items-center bg-gradient-to-r from-gray-900 via-indigo-800 to-blue-900 p-6 space-y-4">
            <ul className="space-y-4 text-white text-lg font-medium">
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-purple-300 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="mySkills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-purple-300 transition-all duration-300"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="AboutMe"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-purple-300 transition-all duration-300"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-purple-300 transition-all duration-300"
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-purple-300 transition-all duration-300"
                >
                  Experiences
                </Link>
              </li>
            </ul>

            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full font-medium shadow-md transition-all duration-300"
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
