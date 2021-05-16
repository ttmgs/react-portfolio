import React from "react";
import "../styles/about.css";
import me from "../images/me.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="card">
      <img src={me} alt="John" />
      <h1>Magdi Tiea</h1>
      <p class="title">Future Full-Stack Developer</p>
      <p>Windsor Ontario</p>
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
        <button>
          <Link
            to="/contact"
      
          >
            Send me a message
          </Link>
        </button>
      </p>
    </div>
  );
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
