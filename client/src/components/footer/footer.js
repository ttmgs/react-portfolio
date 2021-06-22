import React from "react";
import "../styles/footer.css";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";


function Footer() {
  return (
    <div>

      <div id="contact">
    <div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white">Contact</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4" style={{color: "white"}}>
          Phone Number- (226)-759-5872
          <br></br>
          Email- magditiea@gmail.com
          </p>
        {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
          <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>
        </div> */}
      </div>
    </div>
  </div>
  </div>
  </div>
  );
}

export default Footer;