import React from 'react'
import brossia from '../Images/brossia.jpg';
import combines from '../Images/combines.jpg';
import nordic from '../Images/nordic.jpg';

const Heropage = () => {
  return (
    <div class ="herosection" id="Home">
        <div class ="carousel">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
       <img src={brossia} height={600} width={1600}/>
      <div class="carousel-caption ">
        <h5>Rustic Interior Studio</h5>
        <p>Ruatic and morden</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={combines}height={600} width={1600}/>
      <div class="carousel-caption">
        <h5>Internation Designs</h5>
        <p>Inspired from all over word </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={nordic} height={600} width={1600}/>
      <div class="carousel-caption">
        <h5>Advanced Technology</h5>
        <p>Print 3D Technology and simple designs.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      
    </div>
  )
}

export default Heropage
