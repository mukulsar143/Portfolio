import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "heroSection" },
    { label: "Skills", to: "mySkills" },
    { label: "About", to: "AboutMe" },
    { label: "Certificates", to: "testimonial" },
    { label: "Experience", to: "experience" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-16 flex items-center justify-between">
            {/* LOGO */}
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              Mukul Sarkar<span className="text-blue-400">.</span>
            </h1>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex gap-8 text-gray-300 text-sm font-medium">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      spy
                      smooth
                      offset={-70}
                      duration={500}
                      activeClass="text-blue-400"
                      className="cursor-pointer transition-colors hover:text-blue-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="Contact"
                smooth
                offset={-70}
                duration={500}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium shadow-md hover:bg-blue-700 transition"
              >
                Contact
              </Link>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setNavOpen(true)}
              className="lg:hidden text-white"
            >
              <span className="block w-6 h-[2px] bg-white mb-1"></span>
              <span className="block w-6 h-[2px] bg-white mb-1"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#0B0F19]/95 backdrop-blur-xl lg:hidden"
          >
            {/* CLOSE */}
            <button
              onClick={() => setNavOpen(false)}
              className="absolute top-6 right-6 text-white text-2xl"
            >
              ✕
            </button>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full flex flex-col items-center justify-center gap-8"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={item.to}
                    smooth
                    offset={-70}
                    duration={500}
                    onClick={() => setNavOpen(false)}
                    className="text-2xl font-medium text-gray-200 hover:text-blue-400 transition"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                to="Contact"
                smooth
                offset={-70}
                duration={500}
                onClick={() => setNavOpen(false)}
                className="mt-6 px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
