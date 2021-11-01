import React, {useEffect} from "react";
import Nav from "./components/navbar/Nav"
import Projects from "./components/pages/projects";
// import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Footer from "./components/footer/footer";
import Header from "./components/pages/header";
import Certifications from "./components/pages/certifications";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000});
  }, []);
  return (

<div>
  <Nav />
  <div data-aos="flip-up">
<Header />
</div>
<div data-aos="zoom-in-down">
    <About />
    </div>
    <div data-aos="zoom-in-down">
    <Certifications />
    </div>
    <div data-aos="zoom-in-up">
    <Projects />
    </div>
      <Footer />
  </div>




  )};

export default App;