import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
import logo from "../Images/logo.jpg"
const Footer = () => {
  return (
    <div>
      
<footer class="bg-dark text-light pt-5" id="Contact">
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-4">
               <Link to="/" className="navbar-brand luxury-logo">
  <img src={logo} alt="RS Logo" className="brand-logo" />
  <span className="brand-text">Rustic Studio</span>
</Link>
        <p>
          We build modern, responsive websites using the latest technologies.
        </p>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="text-uppercase">Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#Home" class="footer-link">Home</a></li>
          <li><a href="#About" class="footer-link">About</a></li>
          <li><a href="#Services" class="footer-link">Services</a></li>
          <li><a href="#Contact" class="footer-link">Contact</a></li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="text-uppercase">Contact</h5>
        <p>Email: info@example.com</p>
        <p>Phone: +91 0000 0000</p>
        <p>Location: India</p>
      </div>

    </div>

    <hr class="border-secondary"></hr>

    <div class="text-center pb-3">
      © 2026 My Website | All Rights Reserved
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
