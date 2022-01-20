import { Link } from "react-router-dom";
import React, { Component } from "react";

//import "../Style/nav.css"
//import { Nav, Navbar , Offcanvas , Container } from "react-bootstrap";
import "../Style/nav.css"
import { FaAlignRight } from "react-icons/fa";

export default class NavBar extends Component {

  state = {
    isOpen: false
  };
   handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
 



  render() {
  return (
    <>
 
 
      <nav id="navbar-example2" className="navbar navbar-expand-lg navbar-light" style={{position:"relative"}}> 
          <Link   to="/">
            <img  className={"logo"} src={require('../Images/logo.png')} alt="..logo" />
          </Link>
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
          <div className="collapse navbar-collapse " id="navbarNav" style={{justifyContent:"center"}}>
          <ul class="nav nav-pills">
            <ul className="navbar-nav  " >
              <li className="nav-item active">
                <Link className="nav-link text-uppercase" to="/" style={{ color: "black" , fontWeight: "bold" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link className="nav-link" to="/services" style={{ color: "black" ,fontWeight: "bold"}}>
                  Services
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link className="nav-link" smooth to="#packId"  style={{ color: "black" ,fontWeight: "bold"}}>
                  Packages
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link className="nav-link" to="/about"  style={{ color: "black" ,fontWeight: "bold"}}>
                 About
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link className="nav-link" to="/contact"  style={{ color: "black" ,fontWeight: "bold"}}>
                  Contact Us
                </Link>
              </li>
            </ul>
            </ul>
          </div>

       
      </nav>    

 

     






    </>
  );
    }

};



