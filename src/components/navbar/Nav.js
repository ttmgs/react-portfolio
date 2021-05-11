import React from "react";
import { Link, useLocation } from 'react-router-dom'

function Nav() {

const location = useLocation();

  return(



   <nav class="navbar navbar-expand-lg navbar-light bg-light">
   {/* <!-- Brand and toggle get grouped for better mobile display --> */}
    <a class="navbar-brand" href="/" id="logo">
    <Link className={ 
          location.pathname === "/about" 
          ? "nav-link active" 
          : "navlink"
      } to="/about">
      <bold/>MAGDI TIEA</Link></a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">

      <li class="nav-item">
      <a class="nav-link active" href="/">
        <Link className={ 
          location.pathname === "/about" 
          ? "nav-link active" 
          : "navlink"
      } to="/about">About Me  </Link></a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="/">
            <Link className={
            location.pathname === "/contact"
              ? "nav-link active"
              : "nav-link" 
           } to="/contact">Contact</Link></a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="/">
            <Link className={
            location.pathname === "/portfolio"
              ? "nav-link active"
              : "nav-link" 
           } to="/portfolio">Portfolio</Link></a>
        </li>
        
      </ul>
    </div>
  </nav>
    
  )
};

export default Nav