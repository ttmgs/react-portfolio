import {Link} from 'react-scroll';
import "../styles/nav.css";

function Nav() {

  
  return(




      
<nav class="fixed-nav-bar">
  <div id="menu" class="menu">
    {/* do when u wake up */}
    <a class="sitename" href="/"><Link to="/home" spy={true} smooth={true}>  MAGDI TIEA</Link></a>
    {/* <!-- Example responsive navigation menu  --> */}
    <a class="show" href="#menu">Menu</a><a class="hide" href="#hidemenu">Menu</a>
    <ul class="menu-items">
      {/* <li><a href="//sixrevisions.com">Home</a></li> */}
      <li><a href="/about"><Link to="about" spy={true} smooth={true}> About</Link></a></li>
      <li><a href="/projects"><Link to="projects" spy={true} smooth={true}> Projects</Link></a></li>
      <li><a href="/projects"><Link to="contact" spy={true} smooth={true}> Contact</Link></a></li>
      </ul>
  </div>
</nav>





  )
};

export default Nav;





