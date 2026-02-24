import React from 'react'
import brossia from "../Images/brossia.jpg"
import chobham from "../Images/chobham.jpg"
import samp from "../Images/samp.jpg"
import nordic from "../Images/nordic.jpg"
import serviceimg from "../Images/serviceimg.jpg"
import aboutt from "../Images/aboutt.jpg"
import combines from "../Images/combines.jpg"
import hidden from "../Images/hidden.jpg"

const Project = () => {
    return (
<section className="project">
  <div className="container">
    <div className="main-txt">
      <h1>Our Project</h1>
    </div>
    <div className="row g-1">
      <div className="col-md-3 col-sm-6">
        <div className="project-card">
          <img src={brossia} alt="" />
          <div className="project-content">
            <h4>RESIDENTAL</h4>
            <h1>BROSSIA HEIGH LUXURY APPARTMENT</h1>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6">
        <div className="project-card">
          <img src={chobham} alt="" />
          <div className="project-content">
            <h4>SUSTAINABLE SPACE</h4>
            <h1>CHOBHAM MANOR MASTERPLAN</h1>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6">
        <div className="project-card">
          <img src={samp} alt="" />
          <div className="project-content">
            <h4>SUSTAINABLE SPACE</h4>
            <h1>INNOVATION PRIVATE RESIDENCE</h1>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6">
        <div className="project-card">
          <img src={nordic} alt="" />
          <div className="project-content">
            <h4>RESIDENTAL</h4>
            <h1>BROSSIA HEIGH LUXURY APPARTMENT</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-1 mt-2">
      <div className="col-md-3 col-sm-6">
        <div className="project-card">
          <img src={serviceimg} alt="" />
          <div className="project-content">
            <h4>COMMERCIAL</h4>
            <h1>INSPIRED FROM CHINA WEB DESIGN</h1>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6">
        <div className="project-card">
          <img src={aboutt} alt="" />
          <div className="project-content">
            <h4>COPPER BRASS</h4>
            <h1>NORDIC INTERIOR STUDIO</h1>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6">
        <div className="project-card">
          <img src={combines} alt="" />
          <div className="project-content">
            <h4>COMMERCIAL</h4>
            <h1>SAMPLE VILLA</h1>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6">
        <div className="project-card">
          <img src={hidden} alt="" />
          <div className="project-content">
            <h4>RESIDENTAL</h4>
            <h1>HIDDEN AGENDA OF RESIDENTAL</h1>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

    )
}

export default Project
