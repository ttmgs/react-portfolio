import React from "react";
import { Link, useLocation } from 'react-router-dom'

function Nav() {

const location = useLocation();

  return(

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/about">Magdi Tiea</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item active"/>
        <a className="nav-link" href="/about">
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



