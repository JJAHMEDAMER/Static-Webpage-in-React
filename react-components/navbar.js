import React from "react";
function NavBar() {
  return (
    <nav className="nav-bar">
      <img className="logo" src="./React-icon.svg.png" />
      <h1>React</h1>
      <ul className="nav-items">
        <li>React Course - Project 1</li>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
