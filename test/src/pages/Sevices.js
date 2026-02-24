import React from 'react'
import serviceimg from '../Images/serviceimg.jpg'
import Project from './Project'
import Premium from './Premium'

const Sevices = () => {
  return (
    <div>
      <section class="about " id="Services">
            <div class="leftsection">
                <div class="stitle">
                    <h1>Services</h1>
                    <p class="subservice">
                        Best solutions for your dream.</p>
                </div>
                <div class="boxcontainer overflow-hidden">
                    <div class="row gy-5">
                        <div class="col-12">
                            <div class="p-3 border t">
                                <h3><i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></i>Residential</h3>
                                <p>We provide all materials, labor, equip ensure a safe and secure</p>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="p-3 border">
                                <h3><i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></i>Commercial</h3>
                                <p>We provide all materials, labor, equip ensure a safe and secure</p>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="p-3 border ">
                         
                                <h3><i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></i>Suitanable Space</h3>


                                <p>We provide all materials, labor, equip ensure a safe and secure</p></div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="rightsection">
                <img src={serviceimg} height={600} width={600} />
            </div>
        </section >
<Project/>
<Premium/>
    </div>
  )
}

export default Sevices
