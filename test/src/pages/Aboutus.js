import React from "react";
import aboutt from "../Images/aboutt.jpg";
import Teams from "./Teams";
import Testimonial from "./Testimonial";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div>
      <section className="aboutus" id="about">
        <div className="imagesec">
          <img src={aboutt} alt="About Rustic" />
        </div>

        <div className="abouttitle">
          <h1>About Us</h1>
          <h2>Over 12 Years Leading In Interior & Industrial Design</h2>
          <h4>We know that good design means good business</h4>

          <p>
            Founded in 2004, we are an employee-owned firm pursuing a
            democratic design process that values everyone’s input.
            Today we have more than 150 professionals providing
            architecture, interior & urban design services from
            concept to completion.
          </p>

          <button className="about-btn">More About Us</button>
        </div>
      </section>

      <Teams />
      <Testimonial />
      <section className="mission-section">
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver innovative and sustainable design
            solutions that enhance spaces and improve the quality of life.
            We believe in combining creativity with functionality to
            produce exceptional results.
          </p>
        </div>

        <div className="mission-box">
          <h2>Our Vision</h2>
          <p>
            To become a globally recognized design firm known for
            excellence, integrity, and forward-thinking solutions
            that shape the future of architecture and interiors.
          </p>
        </div>
      </section>
      <section className="why-choose">
  <h2>Why Choose Us</h2>

  <div className="why-grid">
    <div className="why-card">
      <h4>✔ 12+ Years Experience</h4>
      <p>Delivering high-quality interior and architectural solutions.</p>
    </div>

    <div className="why-card">
      <h4>✔ 150+ Happy Clients</h4>
      <p>Trusted by businesses and individuals worldwide.</p>
    </div>

    <div className="why-card">
      <h4>✔ Expert Team</h4>
      <p>Professional designers and developers focused on excellence.</p>
    </div>

    <div className="why-card">
      <h4>✔ Modern Approach</h4>
      <p>We use the latest technologies and innovative ideas.</p>
    </div>
  </div>
</section>
    </div>
  );
};

export default Aboutus;