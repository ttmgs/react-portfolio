import React from "react";
import {Link} from "react-router-dom"
import "../styles/footer.css";

function Footer() {
  return (
    <div class="bottom-container">
  <a class="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
  <a class="footer-link" href="https://twitter.com/">Twitter</a>
  <a class="footer-link" href="https://www.appbrewery.co/">Website</a>
  <p>© 2021 Magdi Tiea.</p>
</div>
  );
}

export default Footer;