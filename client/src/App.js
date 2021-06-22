import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/navbar/Nav"
import Projects from "./components/pages/projects";
// import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Footer from "./components/footer/footer";
import Header from "./components/pages/header";
import Page from "./components/pages/page";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (

<div>
  <Nav />
<body>



<Header />
    <About />
    <Projects />
    
          
      </body>










  </div>




  )};

export default App;