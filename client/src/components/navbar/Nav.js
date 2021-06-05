import React from "react";
import "../styles/nav.css";
import jQuery from "jquery";
import $ from "jquery";
import { Link, useLocation } from 'react-router-dom';


function Nav() {
  const location = useLocation();



//menu toggle
function tog(){
  $('.nav-toggle').on("click", function(e){
      e.preventDefault();
      $('.nav-toggle').toggleClass('active');
      $('.nav-menu').toggleClass('active');
      $('.nav-overlay').toggleClass('active');
  })
  $('.nav-overlay').on("click", function(e){
      e.preventDefault();
      $('.nav-toggle').toggleClass('active');
      $('.nav-menu').toggleClass('active');
      $('.nav-overlay').toggleClass('active');
  })
// eslint-disable-next-line no-unused-expressions
}(jQuery);




  return(
    <div>

<div class="nav-overlay"></div>

<nav class="navigation">
			<div class="nav-logo">Your Logo</div>
			<ul class="nav-menu" onClick={tog}>
				<li><a href="/about">
        <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >Home</Link></a></li>
          
				<li><a href="/projects">
        <Link
            to="/projects"
            className={
              location.pathname === "/projects"
                ? "nav-link active"
                : "nav-link"
            }
          >Projects</Link></a></li>

				<li><a href="/contact">
        <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            }
          >Contact</Link></a></li>
			</ul>
			<div class="nav-toggle" onClick={tog}>
				<span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
			</div>
		</nav>



</div>


  )
};

export default Nav



