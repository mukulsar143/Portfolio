import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  // Navbar animation
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Menu animation
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl font-extrabold text-white tracking-wide">
              Portfolio<span className="text-purple-300">.</span>
            </h1>
          </motion.div>

          {/* Hamburger Icon */}
          <motion.button
            onClick={toggleNav}
            className="lg:hidden text-white focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: 0 }}
              animate={{ rotate: navActive ? 180 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  navActive ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.svg>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8 text-white text-lg font-medium">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 text-white text-lg font-medium">
                <li>
                  <Link
                    to="heroSection"
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
            </motion.div>
          </div>

          {/* Contact Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full font-medium shadow-md transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {navActive && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center bg-gradient-to-r from-gray-900 via-indigo-800 to-blue-900 p-6 space-y-6 absolute top-16 w-full text-white"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
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
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
