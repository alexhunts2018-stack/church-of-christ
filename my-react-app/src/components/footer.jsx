import React from "react";
import "../styles/styles.css";
import Reveal from "../components/reveal";

export default function Footer() {
  return (
      <footer>
      <Reveal>
        <div className="footer-container">
          <div className="footer-left">
            <h3>Oxford Church of Christ</h3>
            <h4>01295 574869</h4>

            <a href="https://www.facebook.com/profile.php?id=100091498353465"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.youtube.com/@oxfordchurchofchrist"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://x.com/oxford_church1g"><i className="fa-brands fa-twitter"></i></a>
          </div>

          <div className="footer-right">
            <h3>Contact us:</h3>

            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <textarea rows="6" placeholder="Enter message"></textarea>
            </form>
          </div>
        </div>
      </Reveal>
    </footer>
    
  );
}

