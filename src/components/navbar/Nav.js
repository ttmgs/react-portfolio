import React from "react";
import Portfolio from "../pages/portfolio";
import { Link  } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "../pages/contact";

function Nav() {



  return(

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
    <a class="navbar-brand" href="index.html" id="logo"><bold>MAGDI TIEA</bold></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <Router>
      <li class="nav-item">
          <a class="nav-link active" href="aboutme.html"><Link to={"about"}>About Me</Link></a>
        </li>
        </Router>

        <Router>
        <li class="nav-item">
          <a class="nav-link active" href="contact.js"><Link to={"/contact"}>Contact</Link></a>
        </li>
        </Router>
        <Router>

        <li class="nav-item">
          <a class="nav-link active" href="portfolio.html"><Link to={"/portfolio"}>Portfolio</Link></a>
        </li>
        </Router>
      </ul>
    </div>
  </nav>
    
  )
};

export default Nav