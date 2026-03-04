import React from "react";
import serviceimg from "../Images/serviceimg.jpg";
import Project from "./Project";
import Premium from "./Premium";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <section className="services-section" id="services">
        <div className="leftsection">
          <div className="stitle">
            <h1>Services</h1>
            <p className="subservice">Best solutions for your dream.</p>
          </div>

          <div className="boxcontainer">
            <div className="service-card">
              <h3>🏠 Residential</h3>
              <p>
                We provide all materials, labor, equipment and ensure a safe
                and secure working environment for your dream home.
              </p>
            </div>

            <div className="service-card">
              <h3>🏢 Commercial</h3>
              <p>
                Professional commercial interior and architectural services
                tailored to modern business needs.
              </p>
            </div>

            <div className="service-card">
              <h3>♻ Sustainable Space</h3>
              <p>
                Eco-friendly and sustainable design solutions that create
                efficient and future-ready spaces.
              </p>
            </div>
          </div>
        </div>

        <div className="rightsection">
          <img src={serviceimg} alt="Our Services" />
        </div>
      </section>

      <Project />
      <Premium />
    </div>
  );
};

export default Services;