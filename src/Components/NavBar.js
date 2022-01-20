import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
 
     
     
      <nav className="navbar navbar-expand-lg navbar-light">
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
          <div className="collapse navbar-collapse " id="navbarNav" style={{justifyContent:"center"}}>
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
                <Link className="nav-link" to="/packages"  style={{ color: "black" ,fontWeight: "bold"}}>
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
          </div>

       
      </nav> 



      {/* <Navbar bg="white" expand="lg" fill variant="pills">
    <Navbar.Brand>  
     <Link className="navbar-brand" to="/">
            <img src={require('../Images/logo.png')} alt="..logo" style={{width: "100%" , height:"100%" , maxWidth:"100px" ,marginLeft:"25px" }} />
     </Link>
          </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav " />
   
    <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"25px" , justifyContent:"center"}}>
   
      <Nav className="me-auto"  >
      <Link className="nav-link text-uppercase" to="/" style={{ color: "#528197" , fontWeight: "bold" }}>
                  Home
      </Link>
      <Link className="nav-link  text-uppercase" to="/services" style={{fontWeight: "bold"}}>
                  Services
                </Link>
                <Link className="nav-link text-uppercase" to="/packages" style={{fontWeight: "bold"}}>
                  Packages
                </Link>
                <Link className="nav-link  text-uppercase" to="/about" style={{fontWeight: "bold"}}>
                  About
                </Link>
                <Link className="nav-link text-uppercase" to="/contact" style={{fontWeight: "bold"}}>
                  Contact Us
                </Link>
      </Nav>
     
    </Navbar.Collapse>
    
</Navbar> */}







    </>
  );
};



export default NavBar;
