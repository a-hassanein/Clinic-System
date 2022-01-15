import { Link } from "react-router-dom";
// import {
//   BsFacebook,
//   BsInstagram,
//   BsGoogle,
//   BsTwitter,
//   BsGithub,
//   BsLinkedin,
// } from "react-icons/bs";
import Home from "./header";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ color: "#528197" }}>
            {" "}
            Logo{" "}
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
          <div className="collapse navbar-collapse offset-3" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link text-uppercase" to="/" style={{ color: "#528197" , fontWeight: "bold" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link className="nav-link" to="#" style={{fontWeight: "bold"}}>
                  Services
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link className="nav-link" to="#" style={{fontWeight: "bold"}}>
                  Packages
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link className="nav-link" to="#" style={{fontWeight: "bold"}}>
                  About
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link className="nav-link" to="#" style={{fontWeight: "bold"}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

       
        </div>
      </nav>



      <br/>
      <br/>
      <br/>


    <Home />



    </>
  );
};

export default NavBar;
