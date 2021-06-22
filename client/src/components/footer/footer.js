import React from "react";
import "../styles/footer.css";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";


function Footer() {
  return (
    <div class="bottom-container">
  <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
<a href="https://www.linkedin.com/feed/" class="fa fa-linkedin"></a>
<a href="https://github.com/ttmgs" class="fa fa-github"></a>
  <p>© 2021 Magdi Tiea.</p>
</div>
  );
}

export default Footer;