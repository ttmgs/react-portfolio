import React from "react";
import Nav from "./components/navbar/Nav"
import Projects from "./components/pages/projects";
// import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Footer from "./components/footer/footer";
import Header from "./components/pages/header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (

<div>
  <Nav />
<Header />
    <About />
    <Projects />
      <Footer />
  </div>




  )};

export default App;