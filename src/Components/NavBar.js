import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={require('../Images/logo.png')} alt="..logo" style={{width: "100%" , height:"100%" , maxWidth:"100px" , marginLeft:"50px"}} />
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
                <Link className="nav-link" to="/packages" style={{fontWeight: "bold"}}>
                  Packages
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link className="nav-link" to="/about" style={{fontWeight: "bold"}}>
                  About
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link className="nav-link" to="/contact" style={{fontWeight: "bold"}}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

       
        </div>
      </nav>



      <br/>
      <br/>
      <br/>




    </>
  );
};

export default NavBar;
