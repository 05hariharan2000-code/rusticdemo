import React from "react";
import brossia from "../Images/brossia.jpg";
import combines from "../Images/combines.jpg";
import nordic from "../Images/nordic.jpg";
import hero2 from"../Images/hero2.jpg";

const Heropage = () => {
  return (
    <div className="herosection" id="Home">

      <div className="carousel-wrapper">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">


            
            <div className="carousel-item active position-relative">
              <img src={brossia} className="d-block w-100 hero-img" alt="slide1" />
              <div className="hero-overlay"></div>

              <div className="carousel-caption custom-caption">
                <h2 className="animate-text">Rustic Interior Studio</h2>
                <p className="animate-text delay-1">
                  Rustic and modern living experience
                </p>
                <button className="hero-btn animate-text delay-2">
                  Explore Now
                </button>
              </div>
            </div>

       
            <div className="carousel-item position-relative">
              <img src={combines} className="d-block w-100 hero-img" alt="slide2" />
              <div className="hero-overlay"></div>

              <div className="carousel-caption custom-caption">
                <h2 className="animate-text">International Designs</h2>
                <p className="animate-text delay-1">
                  Inspired from all over the world
                </p>
                <button className="hero-btn animate-text delay-2">
                  View Collection
                </button>
              </div>
            </div>

            <div className="carousel-item position-relative">
              <img src={nordic} className="d-block w-100 hero-img" alt="slide3" />
              <div className="hero-overlay"></div>

              <div className="carousel-caption custom-caption">
                <h2 className="animate-text">Advanced Technology</h2>
                <p className="animate-text delay-1">
                  3D Print Technology with simple designs
                </p>
                <button className="hero-btn animate-text delay-2">
                  Shop Now
                </button>
              </div>
            </div>

          </div>

        
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>

   
      <div className="hero-content">
        <h2>Why Choose Our Studio?</h2>
        <p>
          We combine creativity, innovation, and technology to bring your dream 
          interiors to life. From rustic elegance to modern minimalism, 
          we design spaces that inspire.
        </p>

        <div className="hero-features">
          <div>
            <h4>✔ Premium Materials</h4>
            <p>High quality sustainable resources.</p>
          </div>

          <div>
            <h4>✔ Modern Designs</h4>
            <p>Trendy and elegant interior styles.</p>
          </div>

          <div>
            <h4>✔ Smart Technology</h4>
            <p>Advanced 3D modeling & innovation.</p>
          </div>
        </div>
      </div>  

<section className="hero-extra">
  <div className="extra-container">

    <div className="extra-image">
      <img src={hero2} alt="Luxury Interior" />
    </div>

    <div className="extra-text">
      <h2>Design That Reflects Your Lifestyle</h2>
      <p>
        At Rustic Interior Studio, we believe every space tells a story.
        Our team creates personalized interiors that match your vision,
        comfort, and personality. From luxury apartments to sustainable
        smart homes, we deliver excellence in every project.
      </p>

      <ul className="extra-list">
        <li>✔ Customized Interior Solutions</li>
        <li>✔ Sustainable & Eco-Friendly Designs</li>
        <li>✔ End-to-End Project Management</li>
      </ul>

      <button className="extra-btn">Discover More</button>
    </div>

  </div>
</section>
    </div>
  );
};

export default Heropage;