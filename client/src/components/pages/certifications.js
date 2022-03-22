import React from "react";
import { useState } from "react";
import "../styles/contact.css";
import carlt from "../images/carlt.pdf"
import carl from "../images/carl.png";
import udemyW from "../images/udemyweb.pdf";
import udemyP from "../images/udemy.png";
import beginH from "../images/beginH.jpeg";
import hackersE from "../images/hackersE.jpeg";


const Certifications = () => {
  return (

    <div>

    <div id="certifications" style={{backgroundColor: "black"}}>
    <div class="b-example-divider"></div>
        
        <div class="px-4 pt-5 my-5 text-center border-bottom" style={{color: "white"}}>
          <h1 class="display-4 fw-bold">click to view certifications</h1>
          <div class="col-lg-6 mx-auto">
            <a
          class="btn line-btn-dark btn-icon btn-radius"
          href={carlt}
          title=""
          download
        >  
        <img src={carl} alt="carl" style={{width: '300px', height: '100px'}}/> 
        </a>
        <a
          class="btn line-btn-dark btn-icon btn-radius"
          href={udemyW}
          title=""
          download
        >  
        <img src={udemyP} alt="carl" style={{width: '300px', height: '100px'}}/> 
        </a>
        <a
          class="btn line-btn-dark btn-icon btn-radius"
          href={beginH}
          title=""
          download
        >  
        <img src={beginH} alt="carl" style={{width: '300px', height: '180px'}}/> 
        </a> <a
          class="btn line-btn-dark btn-icon btn-radius"
          href={hackersE}
          title=""
          download
        >  
        <img src={hackersE} alt="carl" style={{width: '300px', height: '180px'}}/> 
        </a>

          </div>
        </div>
    </div>
        </div>
  );
};

export default Certifications;
