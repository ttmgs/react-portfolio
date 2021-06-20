import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import Nav from "./components/navbar/Nav"
import Projects from "./components/pages/projects";
// import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Footer from "./components/footer/footer";



function App() {

    
<Route path='*' render={() => 
     (
       <Redirect to="/projects"/>
     )
}/>
  return (


<div>
<Router>      
<Nav />
<Route exact path="/" component={About}  />
<Route exact path="/portfolio" component={Projects} />
<Route exact path="/react-portfolio/:projects" component={Projects} />

</Router>
<Footer/>
</div>
  )};

export default App;