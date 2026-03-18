import React from "react";
import "../styles/styles.css";
import Reveal from "../components/reveal";

export default function Before() {
  return (
    <Reveal>
    <div>
        <div className="beforefoot">
          <h3>Share your email:</h3>

          <div className="m-space">
            <label>Be inspired</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email Here"
            />
            <label>Subscribe</label>
          </div>
        </div>
       </div>
      </Reveal>
    
  );
}

