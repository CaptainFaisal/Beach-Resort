import React, { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button className="nav-btn" type="button" onClick={handleToggle}>
            <FaBars className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <Link to="/" onClick={handleToggle}>
            <li>Home</li>
          </Link>
          <Link to="/rooms" onClick={handleToggle}>
            <li>Rooms</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
