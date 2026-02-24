import React from 'react'
import aboutt from '../Images/aboutt.jpg';
import Teams from './Teams';
import Testimonial from './Testimonial';

const Aboutus = () => {
  return (
    <div>
    <section class="aboutus" id="About">
          <div class="imagesec">
        <img src={aboutt} height={600} width={500} />
      </div>
      <div class="abouttitle">
        <h1>About</h1>
        <h2>Over 12 years leading and deeps in interiors industrial</h2>
        <h4>We know that good design means
          good business</h4>
        <p>Founded by Robert Downey Jr in 2004, we’re an employee-owned firm pursuing a democratic design process that values everyone’s input. Today we have more than 150 people in London, Hong Kong and Sydney providing architecture, interior & urban design services from concept to completion</p>
        <button type="submit">More About US</button>
      </div>
    </section>
        <Teams/>
        <Testimonial/>
    </div>

  )
}

export default Aboutus
