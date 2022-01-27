import { Link } from "react-router-dom"
import "../../Style/nav.css";
import React from "react";

const Header = () => {
  return (
    <>
     <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light fixed-top"
      >
        <Link to={"/"}>
        <a href="#home">
          <img
            className={"logo"}
            src={require("../../Images/logo.png")}
            alt="..logo"
          />
        </a>
        </Link>
        
      </nav>
    </>
  );
};

export default Header;