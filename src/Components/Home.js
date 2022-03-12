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
                  <p>The Doctor is the title character in the long-running BBC science fiction television programme Doctor Who.
                    Since the show's inception in 1963, the character has been portrayed by thirteen lead actors.
                    In the programme, "the Doctor" is the alias assumed by a millennia-old humanoid alien called a Time Lord
                    who travels through space and time in the TARDIS, frequently with companions.
                    The transition to each succeeding actor is explained within the show's narrative through the plot device of "regeneration",
                    a biological function of the Time Lord race that allows a change of cellular structure and appearance with recovery following
                    a potentially fatal injury Hi Ashraf@.</p>
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