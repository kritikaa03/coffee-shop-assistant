import React from "react";
import "./Navbar.css";

const Navbar = ({ setIsHome }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">The Coffee Corner</h1>
      <div className="nav-buttons">
        <button onClick={() => setIsHome(true)} className="nav-button">Home</button>
        <button onClick={() => setIsHome(false)} className="nav-button">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
