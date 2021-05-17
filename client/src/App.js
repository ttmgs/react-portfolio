import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav"
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Wrapper from "./components/wrapper/wrapper";




function App() {
  return (
<Router>      
  <Wrapper>
<Nav/>
<Route exact path="/home" component={About}  />
<Route exact path="/about" component={About}   /> 
<Route exact path="/contact" component={Contact}   /> 
<Route exact path="/portfolio" component={Portfolio} />
</Wrapper>
</Router>

  )};

export default App;