import React from "react";
import "../styles/nav.css";
import jQuery from "jquery";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";


function Nav() {
  const location = useLocation();


  return(
    <div>



<nav class="navbar navbar-default">
<div class="container">
  <div class="navbar-header">
    <p class="navbar-brand">Magdi Tiea</p>
  </div>
    <ul class="nav navbar-nav navbar-right">
      <li id="home"><a href="/react-portfolio">HOME</a></li>
      <li id="projects"><a href="/react-portfolio/projects"><Link to="/react-portfolio/projects" className={location.pathname === "/react-portfolio/projects" ? "nav-link active" : "nav-link"}>
      
      Projects</Link></a></li>
    </ul>
</div>
</nav>

</div>


  )
};

export default Nav;







// <li> <Link to="/react-portfolio" className={location.pathname === "/react-portfolio" ? "nav-link active" : "nav-link"}>
      
// Home</Link></li>