import React from "react";
import { Link, useLocation } from 'react-router-dom'

function Nav() {

const location = useLocation();

  return(

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/about">Magdi Tiea</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item active"/>
        <a class="nav-link" href="/about">
        <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
          About </Link></a>
      

      <li class="nav-item">
      <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            }
          >
          Contact </Link>
      </li>

      <li class="nav-item">
        <li className="nav-item"/>
        <Link
            to="/portfolio"
            className={
              location.pathname === "/portfolio"
                ? "nav-link active"
                : "nav-link"
            }
          >
          Portfolio </Link>
      </li>
    </ul>
 
  </div> 
</nav>







  )
};

export default Nav



