import React, { useState } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1500 });

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contact__heading" data-aos="zoom-in">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit} data-aos="zoom-in">
        <div className="feedback-title">
          <p>Need a Service?</p>
          <h3>Send A Message</h3>
        </div>

        <div className="form-control">
          <input
            type="text"
            name="name"
            id=""
            required
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>

        <div className="form-control">
          <input
            type="email"
            name="email"
            id=""
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>

        <div className="form-control">
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            required
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea"
          ></textarea>
        </div>

        <div className="form-control">
          <button type="submit" className="btn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
