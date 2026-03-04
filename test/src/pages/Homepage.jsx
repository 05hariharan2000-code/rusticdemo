import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top luxury-nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container">

     
       <Link to="/" className="navbar-brand luxury-logo">
  <img src={logo} alt="RS Logo" className="brand-logo" />
  <span className="brand-text">Rustic Studio</span>
</Link>
       
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link to="/" className="nav-link luxury-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/aboutus" className="nav-link luxury-link">About</Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className="nav-link luxury-link">Services</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link luxury-link">Contact</Link>
            </li>

          </ul>

          <Link to="/contact" className="luxury-btn">
            Book Now
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;