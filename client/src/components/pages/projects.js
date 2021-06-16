import React from "react";
import "../styles/projects.css";
import Wrapper from "../wrapper/wrapper";
import newsletter from "../images/newsletter.png";
import pokemon from "../images/pokemon.png";
import password from "../images/password.png";
import planner from "../images/planner.png";
import search from "../images/search.png";
import simon from "../images/simon.png";
import lizzy from "../images/lizzy.png"

const Projects = () => {
  return (
    <div>
      <Wrapper>
        <div class="container">
          <div class="row">
            <div class="col">
              <img
                src={pokemon}
                alt="newsletter"
                style={{ width: "450px", height: "250px" }}
              ></img>{" "}
              <h4>
                Pokemon STAY{" "}
                <span>
                  <a href="https://group4-project2.herokuapp.com/" alt="stay">
                    <button style={{ color: "white", backgroundColor: "red" }}>
                      view application
                    </button>
                  </a>
                </span>{" "}
              </h4>
              <p>
                <strong>Technologies Used:</strong> MySQL, Node.js, Express,
                Sequelize and Handlebars
              </p>
              <p>
                <strong>Description:</strong>
              </p>
            </div>
            <div class="col">
              <img
                src={planner}
                alt="planner"
                style={{ width: "450px", height: "250px" }}
              ></img>{" "}
              <h4>
                My Travel Planner{" "}
                <span>
                  <a
                    href="https://mich3ll3e.github.io/My-travel-planner-app/"
                    alt="planner"
                  >
                    <button
                      style={{ color: "white", backgroundColor: "blue" }}
                    >
                      view application
                    </button>
                  </a>
                </span>
              </h4>
              <p>
                <strong>Technologies Used:</strong> Javascript, HTML and CSS
              </p>
              <p>
                <strong>Description:</strong> My Travel Planner allows you to
                plan the most important aspects of your trips in a centralized
                location.
              </p>
            </div>
          </div>
          <div class="row">
          <div class="col">
            <img
              src={password}
              alt="password"
              style={{ width: "450px", height: "250px" }}
            ></img>{" "}
            <h4>
              Password Generator{" "}
              <span>
                <a
                  href="https://ttmgs.github.io/Password-Generator/"
                  alt="password"
                >
                  <button style={{ color: "white", backgroundColor: "purple" }}>
                    view application
                  </button>
                </a>
              </span>
            </h4>
            <p>
              <strong>Technologies Used:</strong> Javascript, CSS and HTML
            </p>
            <p>
              <strong>Description:</strong> Choose between 3 character types and this app will generate a random password for you
            </p>
          </div>
          <div className="col">
                <img
                  src={search}
                  alt="newsletter"
                  style={{ width: "450px", height: "250px" }}
                ></img>{" "}
                <h4>Live Search Employee Directory <span><a href="https://ttmgs.github.io/User-Directory/" alt="search"><button style={{backgroundColor: "orange"}}>view application</button></a></span></h4>
                <p><strong>Technologies Used: </strong>Node.js, React, JQuery and CSS</p>
                <p><strong>Description: </strong>This live search allows you to type in a name and as you type letter by letter the employee information related to the name you searched will apear. </p>
            </div>
            </div>
            <div class="row">
              <div className="col">
                <img
                  src={simon}
                  alt="newsletter"
                  style={{ width: "450px", height: "250px" }}
                ></img>{" "}
                <h4>Simon Game <span><a href="https://ttmgs.github.io/Simon-Game/" alt="simon"><button style={{backgroundColor: "yellow"}}>view application</button></a></span></h4>
                <p><strong>Technologies Used: </strong>HTML, CSS and Javascript</p>
                <p><strong>Description: </strong>This app is a memory game which you have to memorize the colors that are randomly assigned to you. Choose the wrong color and its Game over!</p>
            </div>
            <div className="col">
                <img
                  src={lizzy}
                  alt="newsletter"
                  style={{ width: "450px", height: "250px" }}
                ></img>{" "}
                <h4>Model Website <span><a href="https://ttmgs.github.io/Lizzy-g-portfolio/" alt="simon"><button style={{backgroundColor: "white"}}>view application</button></a></span></h4>
                <p><strong>Technologies Used: </strong>HTML and CSS</p>
                <p><strong>Description: </strong>This website is the very first website i created for a client. Simple model website with pictures & information</p>
            </div>
            </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Projects;
