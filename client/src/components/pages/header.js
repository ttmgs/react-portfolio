import React, {useEffect} from "react";
import logo from "../images/cropme.png";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";



function Header() {
  useEffect(() => {
    Aos.init({ duration: 1000});
  }, [])

  return(


    <div data-aos="fade-right">

    <div id="home">

      <div class="px-4 py-5 my-5 text-center">
        
        <img class="d-block mx-auto mb-4" src={logo} alt="" width="300" height="300"/>
        <div className="center">
        <div className="typewriter">
        <h1 class="display-5 fw-bold" style={{color: "blue"}}> Magdi Tiea</h1>
        </div>
        </div>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4" style={{color: "white"}}>Full Stack Web Developer from Windsor, ON</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {/* <a
          class="btn line-btn-dark btn-icon btn-radius"
          href={resume}
          title=""
          download
        >   <button type="submit" class="btn btn-primary btn-lg px-4 gap-3" style={{display: "block"}}>Click to Download resume</button></a> */}
          </div>
        </div>
      </div>
      </div>
      </div>


















  )
}

export default Header;