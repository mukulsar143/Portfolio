import { useState } from "react";

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
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          first_name: FirstName,
          last_name: LastName,
          email: email,
          phone: phone,
          topic: topic,
          message: message,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Submission successful: ", data);
        alert("Message has been sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setTopic("");
        setMessage("");
      } else {
        console.error("Failed to submit the form");
        alert("There was an issue, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <section
      id="Contact"
      className="bg-gradient-to-t from-gray-800 to-black text-white py-16 px-6 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 tracking-tight font-serif text-shadow-md">
          Contact Me
        </h2>
        <div className="bg-gradient-to-r from-gray-700 to-gray-600 shadow-xl rounded-lg p-8 md:p-12 space-y-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-medium text-white mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="contact-input px-6 py-3 rounded-lg bg-white text-black border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 w-full"
                  required
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-lg font-medium text-white mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="contact-input px-6 py-3 rounded-lg bg-white text-black border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 w-full"
                  required
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input px-6 py-3 rounded-lg bg-white text-black border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 w-full"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium text-white mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="contact-input px-6 py-3 rounded-lg bg-white text-black border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 w-full"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="choose-topic"
                className="block text-lg font-medium text-white mb-2"
              >
                Choose a Topic
              </label>
              <select
                id="choose-topic"
                className="contact-input px-6 py-3 rounded-lg bg-white text-black border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 w-full"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option>Select One...</option>
                <option>General Inquiry</option>
                <option>Product Support</option>
                <option>Partnership</option>
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="contact-input px-6 py-3 rounded-lg bg-white text-black border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 w-full"
                rows="6"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                required
                name="checkbox"
                id="checkbox"
                className="form-checkbox text-gray-500"
              />
              <span className="ml-2 text-sm text-white">
                I accept the terms and conditions
              </span>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="btn-submit px-10 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
