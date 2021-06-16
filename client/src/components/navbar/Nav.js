import React, { useReducer } from "react";
import { Link, useLocation } from 'react-router-dom';
import "../styles/nav.css";
import jQuery from "jquery";
import $ from "jquery";


function Nav() {



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
			<div class="nav-logo">Magdi Tiea</div>
			<ul class="nav-menu" onClick={tog}>
				<li><a href="/about">
      Home</a></li>
          
				<li><a href="/projects">
   
       Projects</a></li>

				<li><a href="/contact">
      Contact</a></li>
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



