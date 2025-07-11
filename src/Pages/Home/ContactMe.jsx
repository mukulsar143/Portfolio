import { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ContactMe() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FirstName || !LastName || !email || !phone || !topic || !message || !isChecked) {
      alert("Please fill in all required fields and accept the terms.");
      return;
    }
    try {
      const response = await fetch("http://127.0.0.1:8000/contact/", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ first_name: FirstName, last_name: LastName, email, phone, topic, message }),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setTopic("");
        setMessage("");
        setIsChecked(false);
      } else {
        alert("There was an issue, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 py-24 px-6 lg:px-24 overflow-hidden"
      id="Contact"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={async (engine) => {
          await loadFull(engine);
        }}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 2, random: { enable: true, minimumValue: 1 } },
            move: { enable: true, speed: 1, direction: "none", random: true },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-gray-900 opacity-90 animate-gradient"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl font-bold text-white mb-6 tracking-tight font-sans">
          Contact <span className="text-indigo-400">Me</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Let's connect to discuss projects, collaborations, or opportunities. I'm just a message away!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full mx-auto bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="input-field"
            required
          >
            <option value="">Select a Topic</option>
            <option>General Inquiry</option>
            <option>Project Collaboration</option>
            <option>Technical Support</option>
          </select>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input-field"
            rows="5"
            required
          ></textarea>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="form-checkbox h-5 w-5 text-indigo-400 border-gray-600 bg-gray-700 rounded focus:ring-indigo-400"
              required
            />
            <span className="ml-3 text-sm text-gray-300 font-light">
              I accept the <a href="/terms" className="text-indigo-400 hover:text-indigo-200 transition-colors duration-300">terms and conditions</a>
            </span>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-indigo-600 text-white font-semibold text-base rounded-lg hover:bg-indigo-500 transition-all duration-300 shadow-md"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Styles */}
      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        .input-field:focus {
          outline: none;
          border-color: #818cf8;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
        }
        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
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
    </section>
  );
}