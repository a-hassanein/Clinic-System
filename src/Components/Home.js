import '../Style/Home.css';
import {
  ImFacebook,
  ImTwitter,
  ImGithub,
  ImLinkedin2,
} from "react-icons/im";
import Services from "../Pages/Services";
import Packages from "../Pages/Packages";
import About from '../Pages/About';
import Contact from '../Pages/ContactUs';
import Footer from './footer';
import NavBar from './NavBar';
import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
const Home = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);
  let token=localStorage.getItem("access");

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  function guestLinks() {
    return(
      <>
    <Fragment>
      <div className='buttonContent'>
        <Link to='/login' className="btn ml-lg-auto" id="signinID">
          SignIn
        </Link>

        <span> </span>
        <Link to='/signup' className="btn ml-lg-auto" id="signupID" >
          SignUp
        </Link>
      </div>
    </Fragment>
    
    </>)
  }

  function authLinks(){
    return(
        <>
      <div className='buttonContent'>
          <Link to='/' className="btn ml-lg-auto" id="signinID" onClick={logout_user}>
            Log Out
          </Link>
      </div>
      </>
    )

  }
  return (

    <>
      <NavBar />
      {/* <NavBar /> */}

      <div className='total' id='home'>
        <section className="banner">
          <div className="container-fluid" >
            <div className="row">
              <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                <div><h1 >Hello Doctor</h1></div>
                <div>
                  <p>Hello our dear Doctor in 3eadty Clinic System. thank you for visiting oursite.
Our system help you to manage your clinic and provide analytics form clinic activities per month To improve profits and opportunities in your business, also can access your clinic from anywhere you are in. 
Take a tour in our site to know features and packages we provide and being part of us.
3eadty is pecially built for you with love, We hope you enjoy with us.
3eadty Clinic System Team.</p>
                </div>
                <br />

                {token != null ? authLinks() : guestLinks()}

                {/* <div className='buttonContent'>
                  <Link to='/login' className="btn ml-lg-auto" id="signinID">
                    SignIn
                  </Link>

                  <span> </span>
                  <Link to='/signup' className="btn ml-lg-auto" id="signupID" >
                    SignUp
                  </Link>
                </div> */}
              </div>
              

              {/* <div className="col-lg-4 col-md-5 col-sm-0 col-xs-0"><img className="d-none d-lg-block" src={require('../Images/Home_img.png')} alt='...img' width={'450px'} /></div> */}

              <div className="col-lg-4 col-md-4"></div>
              <div className="col-md-1 col-lg-1 col-sm-0 col-xs-0">
                <ul className='social text-rirht'>
                  <li><Link to='signup' ><i><ImFacebook></ImFacebook></i></Link></li>
                  <li><Link to='signup'><i><ImTwitter></ImTwitter></i></Link></li>
                  <li><Link to='signup' ><i><ImLinkedin2></ImLinkedin2></i></Link></li>
                  <li><Link to='signup' ><i><ImGithub></ImGithub></i></Link></li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section >
          <Services />
        </section>

        <section >
          <Packages />
        </section>

        <section id='about' >
          <About />
        </section>

        <section >
          <Contact />
        </section>
        <section>
          <Footer />
        </section>

      </div>


    </>
  );
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Home);
