import React, { useState } from "react";
import "./Navbar.css";
import { SiHackerone } from "react-icons/si";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="container navbar">
      <div className="logo">
        <SiHackerone color="#fff" size={45} />
        <p className="logo-text">
          om<span>e</span>
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>
          <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li>
        </ul>
      </menu>

      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
