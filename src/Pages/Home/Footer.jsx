import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative bg-gray-900 py-16 px-6 lg:px-24 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-gray-900 opacity-90 animate-gradient"></div>

      <div className="container mx-auto max-w-7xl text-center relative z-10">
        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">
            Navigate My <span className="text-indigo-400">Portfolio</span>
          </h3>
          <div className="flex justify-center">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { to: "heroSection", label: "Home" },
                { to: "MyPortfolio", label: "Portfolio" },
                { to: "AboutMe", label: "About Me" },
                { to: "Contact", label: "Contact" },
                { to: "testimonial", label: "Certifications" },
                { to: "experience", label: "Experience" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to={link.to}
                    className="text-gray-300 hover:text-indigo-400 text-base font-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-10"
        >
          <ul className="flex justify-center space-x-8">
            {[
              {
                href: "https://www.instagram.com/143__ms__143?igsh=ZHljeG12NGl6Nnpj",
                label: "Instagram",
                svg: (
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="24"
                    width="24"
                  >
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
                  </svg>
                ),
              },
              {
                href: "https://web.whatsapp.com/",
                label: "WhatsApp",
                svg: (
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="24"
                    width="24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                    />
                  </svg>
                ),
              },
              {
                href: "https://www.linkedin.com/in/mukul-sarkar-a33164262/",
                label: "LinkedIn",
                svg: (
                  <svg
                    viewBox="0 0 33 33"
                    fill="currentColor"
                    height="24"
                    width="24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 21.9999 24.6548H24.0001Z"
                    />
                  </svg>
                ),
              },
            ].map((social, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.svg}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm text-gray-400 font-light"
        >
          <p>© {new Date().getFullYear()} Mukul Sarkar. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Background Animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background: linear-gradient(270deg, rgba(79, 70, 229, 0.3), rgba(0, 0, 0, 0.9), rgba(79, 70, 229, 0.3));
          background-size: 400% 400%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;