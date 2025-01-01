import { useState } from "react";

export default function ContactMe() {
const [FirstName, setFirstName] = useState("")
const [LastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [topic, setTopic] = useState("")
const [message, setMessage] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!FirstName || !LastName || !email || !phone || !topic || !message) {
    alert("Please fill in all required fields");
    return;
  }
  try {
    const response = await fetch("http://127.0.0.1:8000/contact/",{
      headers : {
        "Content-Type" : "application/json"
      },
      method : "POST",
      body : JSON.stringify({
        first_name : FirstName,
        last_name : LastName,
        email : email,
        phone : phone,
        topic : topic,
        message : message
      }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("submission successful: ", data)
      alert("message has been sent successfully!")
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setTopic("");
      setMessage("");
    } else {
      console.error("Failed to submit the form")
      alert("There was an issue, please try again")
    }
  }    catch (error) {
    console.error("Error submitting form : ", error)      
  }
};

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me..</h2>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
              value={FirstName}
              onChange={(e)=>setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
              value={LastName}
              onChange={(e)=>setLastName(e.target.value)}
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md" value={topic} onChange={(e)=>setTopic(e.target.value)}>
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
