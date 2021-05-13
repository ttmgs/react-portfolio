import React from "react";
import "../styles/about.css";
import me from "../images/me.png"

const About = () => {
  return(


    <div class="card">
      <img src={me} alt="John"/>
      <h1>Magdi Tiea</h1>
      <p class="title">CEO & Founder, Example</p>
      <p>Harvard University</p>
      <div>
        <a href="#"><i class="fa fa-dribbble"></i></a> 
        <a href="#"><i class="fa fa-twitter"></i></a>  
        <a href="#"><i class="fa fa-linkedin"></i></a>  
        <a href="#"><i class="fa fa-facebook"></i></a> 
      </div>
      <p><button>Contact</button></p>
    </div>
    
  )
};

export default About;








 // <div class="container">
    // <div class="image">
    //   <img src={me} alt="yo"/>
    // </div>
    // <div class="text"/>
    //   <h3>I'm Full-Stack Website Developer Magdi Tiea </h3>
    //   <p>a full-stack web developer from windsor, on</p>
    // <link href="https://github.com/kirsralk/Group4-Project2"/>
    // </div>