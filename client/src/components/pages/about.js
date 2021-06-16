import React from "react";
import "../styles/about.css";
import logo from "../images/cropme.png";
import grad from "../images/grad.png";
import react from "../images/react.png";
import nodejs from "../images/node.png";
import html from "../images/html.png";
import css from "../images/css.png";
import jquery from "../images/jquery.png";


const About = () => {
  return (
<div>
  <div className="topContainer">
  <div id="name">

          <img src={logo} alt="me" style={{width: "250px", height: "250px"}}></img>
<br></br>
        <h1>Magdi Tiea</h1>

          <p id="job"><em> Full-Stack Web Developer & Entrepreneaur  </em></p>




</div>
</div>





<div class="middle-container">
  <div class="profile">
    <h2>About Me</h2>
    <p>Grew up in Windsor, Ontario </p>
  </div>
  <hr></hr>

<img src={grad} alt="grad" style={{width: "160px", height: "160px", marginBottom: "15px"}}></img>
  <div class="education">
    <h2>Education</h2>

    <div id="educationtable" style={{textAlign: "center"}}>
<table style={{alignContent: "center"}}>
<tr>
  <td>
    <strong>
    Grand River Academy🎓
    </strong>
    </td>
    <td><em>2018-2019</em></td>
    </tr>
    <tr>
      <td>
        <strong>
        Carelton University Coding Bootcamp
        </strong>
      </td>
      <td>
        November 2, 2020 - May 12, 2021
      </td>
    </tr>
    <tr>
      <td>
        <strong>
       Udemy- The Complete 2021 Web Development Bootcamp
       </strong>
      </td>
      <td>
       June 2, 2021 - present
      </td>
    </tr>
    </table>
    </div>
    </div>
<hr></hr>

    <div class="skill-row" style={{marginTop: "20px"}}>
      <h2>Skills</h2>
      <div id="programs" style={{display: "inline-flex", fontSize: "15px"}}>

        <div id="react" style={{fontSize: "15px", marginRight: "15px"}}>
      <img src={react} alt="react" style={{width: "60px", height: "60px",  }}
></img>
<p>React</p>
</div>

<div id="nodejs" style={{fontSize: "15px", marginRight: "15px"}}>
<img src={nodejs} alt="node" style={{width: "60px", height: "60px", padding: "5px"}}></img>
<p>NodeJS</p>
</div>


<div id="html" style={{fontSize: "15px", marginRight: "15px"}}>
<img src={html} alt="node" style={{width: "60px", height: "60px", padding: "5px"}}></img>
<p>HTML</p>
</div>

<div id="css" style={{fontSize: "15px", marginRight: "15px"}}>
  <img src={css} alt="css" style={{width: "60px", height: "60px", padding: "5px"}}></img>
  <p>CSS</p>
</div>

<div id="jquery" style={{fontSize: "15px", marginRight: "15px"}}>
  <img src={jquery} alt="jquery" style={{width: "60px", height: "60px", padding: "5px", fontSize: "15px", marginRight: "15px"}}></img>
  <p>JQuery</p>
</div>

</div>
  </div>
  <hr></hr>
  <div class="contact-me">
    <h2>Get In Touch</h2>
    <a class="btn" href="mailto:name@email.com" style={{borderRadius: "15px 15px", backgroundColor: "blue", color: "white"}}>Send me a message</a>
  </div>
</div>








</div>
  );
};

export default About;

