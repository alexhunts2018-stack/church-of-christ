import React from "react";
import logo from "../assets/imgs/churchlogo.png";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="header">
      <img src={logo} />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About us</Link></li>
        <li><Link to="/Videos">Videos</Link></li>
        <li><Link to="/Links">Links</Link></li>
        <li><Link to="/visit">Visit Us</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><a href="#">More...</a></li>
      </ul>
    </div>
  );
}