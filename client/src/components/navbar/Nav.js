import React from "react";
import "../styles/nav.css";
import $ from "jquery";
import Projects from '.././pages/projects';
import {Link} from 'react-scroll'



function Nav() {
  
  return(
    <div>



<nav class="navbar navbar-default">
<div class="container">
  <div class="navbar-header">
    <p class="navbar-brand">Magdi Tiea</p>
  </div>
    <ul class="nav navbar-nav navbar-right">
      <li id="home"><a href="/react-portfolio">HOME</a></li>
      <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
    </ul>
</div>
</nav>

</div>


  )
};

export default Nav;







// <li> <Link to="/react-portfolio" className={location.pathname === "/react-portfolio" ? "nav-link active" : "nav-link"}>
      
// Home</Link></li>