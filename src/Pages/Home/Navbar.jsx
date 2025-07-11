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
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Menu animation
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-lg shadow-md"
          : "bg-gray-900/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-2xl font-semibold text-white tracking-tight">
              Mukul Sarkar<span className="text-blue-400">.</span>
            </h1>
          </motion.div>

          {/* Hamburger Icon */}
          <motion.button
            onClick={toggleNav}
            className="lg:hidden text-white focus:outline-none"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <ul className="flex space-x-8 text-gray-200 text-base font-medium">
                <li>
                  <Link
                    to="heroSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
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
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
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
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
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
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
                  >
                    Experience
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow-md transition-all duration-300 hover:shadow-lg"
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navActive && (
          <motion.div
            className="fixed inset-0 bg-gray-900/95 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full p-6 space-y-8 text-white"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <ul className="space-y-6 text-gray-200 text-lg font-medium">
                  <li>
                    <Link
                      to="heroSection"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={closeMenu}
                      className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
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
                      className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
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
                      className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
                    >
                      About
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
                      className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
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
                      className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
                    >
                      Experience
                    </Link>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  Contact
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