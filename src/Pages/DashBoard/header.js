import { Link } from "react-router-dom"
import React from "react";
// import "../../Style/header.css";

import {
  BiLogOut
} from "react-icons/bi";

const Header = () => {
  return (
    <>

      <nav id="headerDash" className="navbar navbar-expand-lg navbar-light fixed-top" >
        
      </nav>

     {/* <nav id="headerDash" className="navbar navbar-expand-lg navbar-light fixed-top" >
        <Link to="/">
          <img className={"logo"} src={require("../../Images/logo.png")} alt="..logo"/>
        </Link>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <div className="name_clinic">
                <div className="name">Ahmed Hassanein</div>
                <div className="clinic">masr clinic</div>
              </div>
            </div>
            <i><BiLogOut></BiLogOut></i>
          </div>
        </div>
      </nav> */}
    </>
  );
};
export default Header;