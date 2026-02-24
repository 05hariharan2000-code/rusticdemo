import React from 'react'
import { Link } from 'react-router-dom'
const Homepage = () => {
  return (
    <div class="allnav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <div class = "logo"><Link to ="/"> <a class="nav-link active" aria-current="page" href="#Home"><h1 class="navbarlogo">Rustic </h1 ></a></Link></div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navlist navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                 <Link to ="/"><a class="nav-link active" aria-current="page" href="#Home">Home</a></Link>
              </li>
              <li class="nav-item">
               <Link to ="/aboutus"><a class="nav-link" href="#About">About</a></Link>
              </li>
              <li class="nav-item">
                 <Link to ="/services"><a class="nav-link" href="#Services">Services</a></Link>
              </li> <li class="nav-item">
                 <Link to ="Contact/"><a class="nav-link" href="#Contact">Contact</a></Link>
              </li>
            </ul>
          <div class="signin">
            <p class="slist"> Sign in</p>
          </div>
        </div>
        </div>
      </nav >
      <div class="search-container">
        <form class="search-form">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </div >
  )
}

export default Homepage
