import React from "react";

// Import Images
import ReactLogo from "../assets/logo192.png";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="react">
        <img src={ReactLogo} className="logo" alt="logo" />
        <h1>React</h1>
      </div>
      <ul>
        <li>Price</li>
        <li>Courses</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
