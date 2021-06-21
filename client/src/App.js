import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';import Nav from "./components/navbar/Nav"
import Projects from "./components/pages/projects";
// import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Footer from "./components/footer/footer";



function App() {

  const scrollTo = (ref) => {
    if (ref + Projects) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  

  return (


<Router>      
  <div>
<Nav />
<Route exact path="/" component={About}   />

<div ref={scrollTo}>
{Projects}
<Projects />

</div>.


<Footer/>
</div>
</Router>

  )};

export default App;