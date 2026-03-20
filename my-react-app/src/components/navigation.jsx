import React from "react";
import logo from "../assets/imgs/churchlogo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
    }
  };

  return (
    <div className="header">
      <img src={logo} alt="Church logo" />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About us</Link></li>
        <li><Link to="/Videos">Videos</Link></li>
        <li><Link to="/Links">Links</Link></li>
        <li><Link to="/visit">Visit Us</Link></li>
        <li><Link to="/resources">Resources</Link></li>

        <li className="nav-dropdown">
          <select defaultValue="" onChange={handleChange}>
            <option value="" disabled hidden>More...</option>
            <option value="/Lessons">Lessons</option>
            <option value="/whatson">What's on</option>
            <option value="/To-do">Things to do in Oxford</option>
          </select>
        </li>
      </ul>
    </div>
  );
}