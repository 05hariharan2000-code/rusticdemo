import React from "react";
import brossia from "../Images/brossia.jpg";
import chobham from "../Images/chobham.jpg";
import samp from "../Images/samp.jpg";
import nordic from "../Images/nordic.jpg";
import serviceimg from "../Images/serviceimg.jpg";
import aboutt from "../Images/aboutt.jpg";
import combines from "../Images/combines.jpg";
import hidden from "../Images/hidden.jpg";
import "./Project.css";

const Project = () => {
  return (
    <section className="project">
      <div className="container">
        <div className="main-txt">
          <h1>Our Projects</h1>
        </div>

        <div className="project-grid">

          <div className="project-card">
            <img src={brossia} alt="Brossia High Luxury Apartment" />
            <div className="project-content">
              <h4>RESIDENTIAL</h4>
              <h3>Brossia High Luxury Apartment</h3>
            </div>
          </div>

          <div className="project-card">
            <img src={chobham} alt="Chobham Manor Masterplan" />
            <div className="project-content">
              <h4>SUSTAINABLE SPACE</h4>
              <h3>Chobham Manor Masterplan</h3>
            </div>
          </div>

          <div className="project-card">
            <img src={samp} alt="Innovation Private Residence" />
            <div className="project-content">
              <h4>SUSTAINABLE SPACE</h4>
              <h3>Innovation Private Residence</h3>
            </div>
          </div>

          <div className="project-card">
            <img src={nordic} alt="Nordic Luxury Apartment" />
            <div className="project-content">
              <h4>RESIDENTIAL</h4>
              <h3>Nordic Luxury Apartment</h3>
            </div>
          </div>

          <div className="project-card">
            <img src={serviceimg} alt="Inspired From China Web Design" />
            <div className="project-content">
              <h4>COMMERCIAL</h4>
              <h3>Inspired From China Web Design</h3>
            </div>
          </div>

          <div className="project-card">
            <img src={aboutt} alt="Nordic Interior Studio" />
            <div className="project-content">
              <h4>COPPER BRASS</h4>
              <h3>Nordic Interior Studio</h3>
            </div>
          </div>

          <div className="project-card">
            <img src={combines} alt="Sample Villa" />
            <div className="project-content">
              <h4>COMMERCIAL</h4>
              <h3>Sample Villa</h3>
            </div>
          </div>

          <div className="project-card">
            <img src={hidden} alt="Hidden Agenda of Residential" />
            <div className="project-content">
              <h4>RESIDENTIAL</h4>
              <h3>Hidden Agenda of Residential</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Project;