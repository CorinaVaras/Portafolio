import React from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className='container-all'>
      <label htmlFor="toggle">
      <i class="fas fa-bars"></i>
      </label>
      <input type="checkbox" id="toggle" />

      <div className="container-nav">
        <div className="container-img">
        <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
          <img
            alt="marcyfood"
            src={logo}
            />
          </Link>  
        </div>
        <div className="container-items">
          <div className="item-nav ">
            <Link
              className="hvr-underline-from-center"
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              About me
            </Link>
          </div>
          <div className="item-nav">
            <Link
              className="hvr-underline-from-center"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Skills
            </Link>
          </div>
          <div className="item-nav">
            <Link
              className="hvr-underline-from-center"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Projects
            </Link>
          </div>
          <div className="item-nav">
            <Link
              className="hvr-underline-from-center"
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
