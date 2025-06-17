import React from "react";
import "./Contact.css"
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="heading-contact">
        <h1>Contact Us</h1>
        <hr />
      </div>
      <div className="contact-us">
        <form action="" className="contact-us-1">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
          />

          <label for="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
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
