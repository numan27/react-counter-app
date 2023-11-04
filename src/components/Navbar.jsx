import React from 'react';
import { Link } from 'react-router-dom';
import IMAGES from "../assets/images"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img width={170} src={IMAGES.LOGO} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
