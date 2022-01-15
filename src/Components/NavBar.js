import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsGoogle,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <Link className="nav-link active" to="/" style={{ color: "#528197" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Packages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <a
              href="https://www.google.com"
              className="btn btn-outline-info btn-floating m-1"
            >
              <i>
                <BsGoogle />
              </i>
            </a>
            <a
              href="https://twitter.com/?logout=1639488448834"
              className="btn btn-outline-info btn-floating m-1"
            >
              <i>
                <BsTwitter />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              className="btn btn-outline-info btn-floating m-1"
            >
              <i>
                <BsLinkedin />
              </i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100035313377270"
              className="btn btn-outline-info btn-floating m-1"
            >
              <i>
                <BsFacebook />
              </i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="btn btn-outline-info btn-floating m-1"
            >
              <i>
                <BsInstagram />
              </i>
            </a>
            <a
              href="https://github.com/Ahmedxd199/"
              className="btn btn-outline-info btn-floating m-1"
            >
              <i>
                <BsGithub />
              </i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
