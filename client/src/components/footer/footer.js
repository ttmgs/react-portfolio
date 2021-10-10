import React from "react";
import "../styles/footer.css";


function Footer() {
  return (
    <div>

      <div id="contact">
    <div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-green">Contact</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4" style={{color: "white"}}>
          <br></br>
          Email- magditiea@gmail.com
          </p>
          <a href="https://www.instagram.com/ttmaggs/" class="fa fa-instagram"></a>
          <a href="https://www.linkedin.com/in/magdi-tiea-6b56071b9/" class="fa fa-linkedin"></a>
          <a href="https://github.com/ttmgs" class="fa fa-github"></a>

<h5>programs I use</h5>
<p style={{color: "white"}}> React, Node.js, EJS, Javascript, HTML, CSS, JQuery, MongoDB, NOSQL </p>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
}

export default Footer;