import React, { useState } from "react";
import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Clear the form
    setFormData({ name: "", email: "", message: "" });

    // Optional: Show success message / alert / send to backend
    alert("Message sent successfully!");
  };

  return (
    <>
      <div className="heading-contact">
        <h1>Contact Us</h1>
        <hr />
      </div>

      <div className="contact-us">
        <form className="contact-us-1" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <br />
          <input type="submit" value="Send" id="send" />
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
