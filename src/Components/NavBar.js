import { Link } from "react-router-dom";
//import "../Style/nav.css"
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import "../Style/nav.css";
import React, { useState, useRef } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };

  return (
    <>
      {/* <nav className="navbar  navbar-light navbar-expand-lg fixed-top " id="navbar">

<Link to={"/"} className="navbar-brand">
        <img  className={"logo"} src={require('../Images/logo.png')} alt="..logo"  /> 
</Link>

<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navLinks">
      <span class="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse text-center" id="navLinks">

<ul className="navbar-nav ms-auto">
<li className="nav-item text-uppercase">
     <a className="nav-link" href="#home" style={{color: "var(--first_color)"}}>
       Home
     </a>
   </li>
   <li className="nav-item  text-uppercase">
     <a  className="nav-link" href="#services" >
       Services
     </a>
   </li>
   <li className="nav-item  text-uppercase">
     <a className="nav-link" href="#packId" >
       Packages
     </a>
   </li>
   <li className="nav-item  text-uppercase">
     <a className="nav-link" href="#about"  >
      About
     </a>
   </li>
   <li className="nav-item  text-uppercase">
     <a className="nav-link" href="#contact">
       Contact Us
     </a>
   </li>
</ul>

</div>


</nav>
         */}

      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light fixed-top"
      >
        <a href="#home">
          <img
            className={"logo"}
            src={require("../Images/logo.png")}
            alt="..logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse "
          id="navbarNav"
          style={{ justifyContent: "center" }}
        >
          <ul className="nav  nav_ul">
            <ul className="navbar-nav  ">
              <li className="nav-item text-uppercase">
                <a
                  className="nav-link "
                  href="#home"
                  style={{ color: "var(--first_color)" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item text-uppercase">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item text-uppercase">
                <a className="nav-link" href="#packId">
                  Packages
                </a>
              </li>
              <li className="nav-item text-uppercase">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item text-uppercase">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
