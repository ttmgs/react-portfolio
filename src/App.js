import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import history from "./components/history/history";
import Nav from "./components/navbar/Nav"
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import "./components/styles/portfolio.css"



function App() {
  return (
    // <Router history={history}>
      // <switch>
<Router>      
  
<Nav />
<Route exact path="/about" component={About}   /> 

  </Router>
  )};

export default App;