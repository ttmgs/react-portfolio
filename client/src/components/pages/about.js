import React, {useEffect} from "react";
import "./home.css";
import grad from "../images/grad.png";
import upei from "../images/upei.png";
import mom from "../images/8.png";
import me from "../images/me.png";
import Aos from "aos";
import "aos/dist/aos.css";


function About() {
  useEffect(() => {
    Aos.init({ duration: 1000});
  }, [])

  return (
    <div>

<div data-aos="fade-left">
<div id="about" style={{backgroundColor: "black"}}>
<div class="b-example-divider"></div>
    
    <div class="px-4 pt-5 my-5 text-center border-bottom" style={{color: "white"}}>
      <h1 class="display-4 fw-bold">About Me</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4" style={{color: "white"}}> Came into this world not knowing the answers, but trying to make a
              difference. This is my objective and my life
              goal. My mission is to teach people fundamentals of human development. I believe that everyone
              deserves an opportunity. We are the ones that create our own
              reality, and we have so much power to do so</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <center>
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
            </center>
        </div>
      </div>
      <div class="overflow-hidden" style={{maxHeight: "30vh"}}>
        <div class="container px-5" style={{display: "inline-flex"}}>
       
        </div>
      </div>
    </div>
</div>
    </div>
    </div>
  );
}

export default About;




