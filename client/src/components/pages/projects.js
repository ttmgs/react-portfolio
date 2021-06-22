import React from "react";
import "../styles/projects.css";
import Wrapper from "../wrapper/wrapper";
// import newsletter from "../images/newsletter.png";
import pokemon from "../images/pokemon.png";
import password from "../images/password.png";
import planner from "../images/planner.png";
import search from "../images/search.png";
import simon from "../images/simon.png";
import lizzy from "../images/lizzy.png";

function Projects() {
  return (
    <div>
      <div id="projects">
        <div class="b-example-divider"></div>
        <h1 class="display-4 fw-bold">Projects</h1>
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div class="col">
                  <img
                    src={pokemon}
                    alt="newsletter"
                    style={{ width: "200px", height: "150px" }}
                  ></img>{" "}
                  <h4>Pokemon STAY </h4>{" "}
                  <span>
                    <a href="https://group4-project2.herokuapp.com/" alt="stay">
                      <button
                        style={{ color: "white", backgroundColor: "blue" }}
                      >
                        view application
                      </button>
                    </a>
                  </span>{" "}
                  <span>
                    <a
                      href="https://github.com/kirsralk/Group4-Project2"
                      alt="stay"
                    >
                      <button
                        style={{ color: "white", backgroundColor: "red" }}
                      >
                        more details
                      </button>
                    </a>
                  </span>{" "}
                  <p>
                    <strong>Technologies Used:</strong> MySQL, Node.js, Express,
                    Sequelize and Handlebars
                  </p>
                  <img
                    src={search}
                    alt="search"
                    style={{ width: "200px", height: "150px" }}
                  ></img>{" "}
                  <h4>Live Search Employee Directory </h4>{" "}
                  <span>
                    <a
                      href="https://ttmgs.github.io/User-Directory/"
                      alt="search"
                    >
                      <button style={{ backgroundColor: "orange" }}>
                        view application
                      </button>
                    </a>
                  </span>{" "}
                  <span>
                    <a
                      href="https://github.com/ttmgs/User-Directory"
                      alt="search"
                    >
                      <button
                        style={{ backgroundColor: "red", color: "white" }}
                      >
                        more details
                      </button>
                    </a>
                  </span>
                  <p>
                    <strong>Technologies Used: </strong>Node.js, React, JQuery
                    and CSS
                  </p>
                </div>

                <div class="col">
                  <img
                    src={password}
                    alt="password"
                    style={{ width: "200px", height: "150px" }}
                  ></img>{" "}
                  <h4>Password Generator </h4>{" "}
                  <span>
                    <a
                      href="https://ttmgs.github.io/Password-Generator/"
                      alt="password"
                    >
                      <button
                        style={{ color: "white", backgroundColor: "purple" }}
                      >
                        view application
                      </button>
                    </a>
                  </span>{" "}
                  <span>
                    <a
                      href="https://github.com/ttmgs/Password-Generator"
                      alt="password"
                    >
                      <button
                        style={{ color: "white", backgroundColor: "red" }}
                      >
                        more details
                      </button>
                    </a>
                  </span>
                  <p>
                    <strong>Technologies Used:</strong> Javascript, CSS and HTML
                  </p>
                  <img
                    src={planner}
                    alt="planner"
                    style={{ width: "200px", height: "150px" }}
                  ></img>{" "}
                  <h4>My Travel Planner </h4>{" "}
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
                  </span>{" "}
                  <span>
                    <a href="https://github.com/mich3ll3e/My-travel-planner-app">
                      <button
                        style={{ color: "white", backgroundColor: "red" }}
                      >
                        more details
                      </button>
                    </a>
                  </span>
                  <p>
                    <strong>Technologies Used:</strong> Javascript, HTML and CSS
                  </p>
                </div>
                <div class="col">
                  <img
                    src={simon}
                    alt="newsletter"
                    style={{ width: "200px", height: "150px" }}
                  ></img>{" "}
                  <h4>Simon Game</h4><span><p>(mobile device)</p></span>{" "}
                  <span>
                    <a href="https://ttmgs.github.io/Simon-Game/" alt="simon">
                      <button
                        style={{ backgroundColor: "orange", color: "white" }}
                      >
                        view application
                      </button>
                    </a>
                  </span>{" "}
                  <span>
                    <a href="https://github.com/ttmgs/Simon-Game" alt="simon">
                      <button
                        style={{ backgroundColor: "red", color: "white" }}
                      >
                        more details
                      </button>
                    </a>
                  </span>
                  <p>
                    <strong>Technologies Used: </strong>HTML, CSS and Javascript
                  </p>
                  <img
                    src={lizzy}
                    alt="newsletter"
                    style={{ width: "200px", height: "150px" }}
                  ></img>{" "}
                  <h4>Model Website </h4>{" "}
                  <span>
                    <a
                      href="https://ttmgs.github.io/Lizzy-g-portfolio/"
                      alt="simon"
                    >
                      <button
                        style={{ backgroundColor: "blue", color: "white" }}
                      >
                        view application
                      </button>
                    </a>
                  </span>{" "}
                  <span>
                    <a
                      href="https://github.com/ttmgs/Lizzy-g-portfolio"
                      alt="simon"
                    >
                      <button
                        style={{ backgroundColor: "red", color: "white" }}
                      >
                        more details
                      </button>
                    </a>
                  </span>
                  <p>
                    <strong>Technologies Used: </strong>HTML and CSS
                  </p>
                </div>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
