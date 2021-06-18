import React from "react";
import "../styles/about.css";
import logo from "../images/cropme.png";
import grad from "../images/grad.png";
import react from "../images/react.png";
import nodejs from "../images/node.png";
import html from "../images/html.png";
import css from "../images/css.png";
import jquery from "../images/jquery.png";
import upei from "../images/upei.png";
import mom from "../images/8.png";
import me from "../images/me.png";
import mongo from "../images/mongo.png";
import resume from "../images/resume.PDF";



const About = () => {

  return (
    <div>
      <div className="topContainer">
        <div id="name">
          <img
            src={logo}
            alt="me"
            style={{ width: "250px", height: "250px" }}
          ></img>
          <br></br>
          <h1>Magdi Tiea</h1>
          <br></br>
          <p id="job">Full-Stack Website Developer from Windsor, ON</p>

        </div>
      </div>
      <br></br>
      <div id="contactme" style={{textAlign: "center"}}>
<p style={{fontSize: "20px"}}>📞  : (226)- 759- 5872</p>
<p style={{fontSize: "20px"}}>📩  : magditiea@gmail.com</p>
<a class="btn line-btn-dark btn-icon btn-radius" href={resume} title="" download><button id="buttonone" style={{textAlign: "center"}}>click to download resume</button></a>
</div>
      <br></br>
      <br></br>
      <br></br>

      <div class="middle-container">
        <div id="picbox">
          <div id="pics">
            <img
              src={grad}
              alt="grad"
              style={{ width: "140px", height: "140px", marginBottom: "15px" }}
            ></img>
            <img
              src={upei}
              alt="grad"
              style={{ width: "140px", height: "140px", marginBottom: "15px" }}
            ></img>
            <img
              src={mom}
              alt="grad"
              style={{ width: "140px", height: "140px", marginBottom: "15px" }}
            ></img>
            <img
              src={me}
              alt="grad"
              style={{ width: "140px", height: "140px", marginBottom: "15px" }}
            ></img>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="profile">
          <p style={{ fontFamily: "monospace", fontSize: "20px" }}>
            <strong>
            Came into this world not knowing the answers, but trying to make a difference in peoples lives. This is my objective
and my life goal. My mission is to teach people and help them with basic fundamentals of human development. I believe that everyone deserves an opportunity. We are
the ones that create our own reality, and we have so much power to do so {" "}
            </strong>
          </p>
          
        </div>
        <hr></hr>
        <br></br>
        <div class="skill-row" style={{ marginTop: "20px" }}>
          <h2>Technologies I use</h2>
          <div
            id="programs"
            style={{ display: "inline-flex", fontSize: "15px" }}
          >
            <div id="react" style={{marginRight: "15px" }}>
              <img
                src={react}
                alt="react"
                style={{ width: "50px", height: "50px" }}
              ></img>
              <p>React</p>
            </div>

            <div id="nodejs" style={{marginRight: "15px" }}>
              <img
                src={nodejs}
                alt="node"
                style={{ width: "50px", height: "50px", padding: "5px" }}
              ></img>
              <p>NodeJS</p>
            </div>

            <div id="html" style={{marginRight: "15px" }}>
              <img
                src={html}
                alt="node"
                style={{ width: "50px", height: "50px", padding: "5px" }}
              ></img>
              <p>HTML5</p>
            </div>

            <div id="css" style={{ fontSize: "15px", marginRight: "15px" }}>
              <img
                src={css}
                alt="css"
                style={{ width: "50px", height: "50px", padding: "5px" }}
              ></img>
              <p>CSS</p>
            </div>

            <div id="jquery" style={{marginRight: "15px" }}>
              <img
                src={jquery}
                alt="jquery"
                style={{
                  width: "50px",
                  height: "50px",
                  padding: "5px",
                  fontSize: "15px",
                  marginRight: "15px",
                }}
              ></img>
              <p>JQuery</p>
            </div>
            <div id="mongo" style={{ fontSize: "15px", marginRight: "15px" }}>
              <img
                src={mongo}
                alt="mongo"
                style={{ width: "50px", height: "50px", padding: "5px" }}
              ></img>
              <p>mongoDB</p>
            </div>
          </div>
        </div>
        <br></br>
        <hr></hr>
      </div>
    </div>
  );
};

export default About;
