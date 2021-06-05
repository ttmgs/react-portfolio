import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav"
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Wrapper from "./components/wrapper/wrapper";




function App() {
  return (
<div>
  <Nav />
<Router>      
<Route exact path="/react-portfolio" component={About}  />
<Route exact path="/" component={About}  />
<Route exact path="/about" component={About}   /> 
<Route exact path="/contact" component={Contact}   /> 
<Route exact path="/projects" component={Projects} />
</Router>
</div>
  )};

export default App;