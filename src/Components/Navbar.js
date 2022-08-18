import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <img
            src="https://wmh.ai/static/media/logo.de2bf2d4.svg"
            alt="app__logo"
          />
        </div>

        <div className="navbar__logo-name">
          <h2>
            World <span className="yellow-text">Music</span> Hub
          </h2>
        </div>

        <div className="navbar__right-section">
          <div className="search-container">
            <input className="search-input" type="text" placeholder=""></input>
            <div className="icon">
              <FaSearch />
            </div>
          </div>

          <ul className="app__navbar-links">
            <li className="p__opensans">
              <a className="explore" href="#explore">
                Explore
              </a>
            </li>
            <li className="p__opensans">
              <a className="about-us" href="#aboutus">
                About Us
              </a>
            </li>
            <li className="p__opensans">
              <a className="explore" href="#login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
