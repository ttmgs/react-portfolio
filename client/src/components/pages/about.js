import React from "react";
import "../styles/about.css";
import logo from "../images/cropme.png";



const About = () => {
  return (
<div>
  <div className="topContainer">
  <div id="name">

          <img src={logo} alt="me"></img>
<br></br>
        <h1>Magdi Tiea</h1>

          <p id="job"><em> Full-Stack Web Developer  </em></p>




</div>
</div>





<div class="middle-container">
  <div class="profile">
    <img src="" alt=""/>
    <h2>About Me</h2>
    <p>After dropping out of my 2nd year in University taking computer science, I decided to pursue another path in the web development field</p>
  </div>
  <hr></hr>
  <div class="skills">
    <h2>My Skills.</h2>
    <div class="skill-row">
      <img class="" src="" alt=""/>
      <h3>Lorem & Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
    </div>
    <div class="skill-row">
      <img class="" src="" alt=""/>
      <h3>Lorem Ipsum Dolor</h3>
      <p>Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.</p>
    </div>
  </div>
  <hr></hr>
  <div class="contact-me">
    <h2>Get In Touch</h2>
    <h3>Lorem ipsum dolor sit amet, non elit.</h3>
    <p>Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui, ornare erat.</p>
    <a class="btn" href="mailto:name@email.com">CONTACT ME</a>
  </div>
</div>


<div class="bottom-container">
  <a class="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
  <a class="footer-link" href="https://twitter.com/">Twitter</a>
  <a class="footer-link" href="https://www.appbrewery.co/">Website</a>
  <p>© 2018 Name Surname.</p>
</div>







</div>
  );
};

export default About;

