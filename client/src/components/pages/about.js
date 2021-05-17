import React from "react";
import "../styles/about.css";
import me from "../images/me.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
   <div>
    <div class="card">
      <img class="centerMe" id="me" src={me} alt="John" />
      <h1>Magdi Tiea</h1>
      <p class="title" id="aboutPara">Future Full-Stack Developer</p>
      <p>Congrats youve made it to my portfolio. <br></br>
       Cell: (226)- 759 -5872 <br></br>
      
      </p>
      <div>
        <a href="https://www.instagram.com/">
          <i class="fa fa-instagram"></i>
        </a>
        <a href="https://github.com/ttmgs?tab=repositories">
          <i class="fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit">
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
      <p>
        <button id="contactBtn">
          <Link
            to="/contact"
      
          >
          Send me a message
          </Link>
        </button>
      </p>
</div>



  
</div> 
  );
};

export default About;

