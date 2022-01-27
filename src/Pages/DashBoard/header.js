import { Link } from "react-router-dom"
import "../../Style/nav.css";
import React from "react";

const Header = () => {
  return (
    <>
     <nav id="navbar" className="navbar navbar-expand-lg navbar-light fixed-top" style={{boxShadow:"0 2px 2px rgba(0, 0, 0, 0.10)"}}>
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