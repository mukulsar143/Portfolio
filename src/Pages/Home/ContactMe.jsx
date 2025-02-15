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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FirstName || !LastName || !email || !phone || !topic || !message) {
      alert("Please fill in all required fields.");
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
      } else {
        alert("There was an issue, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Particle Background */}
      <Particles
      id="Contact"
   init={async (engine) => {
     await loadFull(engine);
   }}
   options={{
     background: { color: "#000" },
     particles: {
       number: { value: 80 },
       shape: { type: "circle" },
       opacity: { value: 0.5 },
       size: { value: 3 },
       move: { enable: true, speed: 2 },
     },
   }}
   className="absolute inset-0 z-0"
 />

      
      {/* Animated Background Glow */}
      <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        ></motion.div>
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-center mb-12 tracking-wide font-mono relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 animate-pulse"
      >
        Contact <span className="text-white">Me</span>
      </motion.h2>
      
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto bg-gray-900 bg-opacity-90 p-10 rounded-3xl shadow-2xl backdrop-blur-lg border border-gray-700 hover:shadow-purple-400 transition-all duration-500"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} className="input-field" required />
            <input type="text" placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} className="input-field" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" required />
            <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field" required />
          </div>
          <select value={topic} onChange={(e) => setTopic(e.target.value)} className="input-field" required>
            <option>Select a Topic</option>
            <option>General Inquiry</option>
            <option>Product Support</option>
            <option>Partnership</option>
          </select>
          <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} className="input-field" rows="6" required></textarea>
          <div className="flex items-center">
            <input type="checkbox" required className="form-checkbox" />
            <span className="ml-2 text-sm text-white">I accept the terms and conditions</span>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-full hover:shadow-xl transition-all"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
      
      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        }
        .input-field:focus {
          outline: none;
          border-color: #6366f1;
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </section>
  );
}
