import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav"
import Wrapper from "./components/wrapper/wrapper";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import "./components/styles/about.css"



function App() {
  return (
    // <Router history={history}>
<Router>      
<Wrapper>
  
<Nav    />
<Route exact path="/about" component={About}   /> 
<Route exact path="/contact" component={Contact}   /> 
<Route exact path="/portfolio" component={Portfolio} />

</Wrapper>
</Router>
  )};

export default App;