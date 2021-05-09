import React from "react";
import "./styles.css";


function Aboutpage() {
  return (
    <div className="aboutme">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <a class="navbar-brand" href="index.html" id="logo">
          MAGDI TIEA
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="index.html" button onClick={indexPage} />
                
                </li>
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="aboutme.html">
                  About Me
                </a>
              </li>
            </ul>
          </div>
        </a>
      </nav>
    </div>
  );
}

export default Aboutpage;
