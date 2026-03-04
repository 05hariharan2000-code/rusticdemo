import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">


        <div className="column">
          <h1>Contact Us</h1>
          <h3>New Mexico, United States</h3>
          <p>No. 1002, Dahill Rd Str, Albuquerque, NM, USA</p>
          <p>(+070) 3689 56 56 56</p>
          <p>contact@HHstudio.co</p>
        </div>


        <div className="column">
          <h2>Feedback Form</h2>

          <form className="contact-form">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label>Your Feedback</label>
            <textarea
              name="message"
              placeholder="Write your feedback"
              rows="4"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;