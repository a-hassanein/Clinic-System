import React from "react";
import { Link } from "react-router-dom";
import signup from "../Images/signup-remove.png"
import { useState } from "react";
import "../Style/signup.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
function SignUp() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [Conpassword, setConPassword] = useState("");

    const [password, setPassword] = useState("");
    const handlesubmit = (event) => {
        event.preventDefault();
    }
    return (
        <>
            {/* <div>
                <NavBar />
            </div> */}
            <div className="main-signup bg-light">
                <div className="signup-conatiner bg-light">
                    <div className="left-side">
                        <div className="welcomeNote" id="welcomeNote">
                            <h1>
                                Welcome Doctor
                                {/* <div className="img-className">
                            <img style={{ height: '150px', width: '400px' }} src={Logo} />
                      </div> */}
                            </h1>
                            <h3>
                                We are so glad to have you here

                            </h3>
                        </div>
                        <div className="welcomeImg">
                            <img id="loginImg" src={signup}>
                            </img>
                        </div>

                    </div>
                    <div className="right-side">
                        {/* <div className="img-className">
                            <img style={{ height: '150px', width: '400px' }} src={Logo} />
                      </div> */}
                        <form onSubmit={handlesubmit}>
                            <div id="Form_Title">Create Account</div>
                            <div >
                                <label className="form-label"></label>
                                <input type="text" minLength={4} className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Your Name" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="text" className="form-control" onkeyup="if (/[^|a-z0-9]+/g.test(this.value)) this.value = this.value.replace(/[^|a-z0-9]+/g,'')" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter Your User Name" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Your Email" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input minlength="8" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$" type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input minlength="8" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$" type="password" className="form-control" value={Conpassword} onChange={(e) => { setConPassword(e.target.value) }} placeholder="Confirm Password" required />
                            </div>
                            <button type="submit" className="btn" >Sign Up</button>
                        </form>
                        <div>
                            <p id="social-text" style={{ alignitems: "center" }}> or sign up with</p>
                            <div id="social-media">
                                <a href="https://www.facebook.com"
                                    className="facebook social">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <a href="https://www.twitter.com" className="twitter social">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                                <a href="https://www.instagram.com"
                                    className="instagram social">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </div>
                            <div className="footerform " style={{ color: "var(--first_color)", fontSize: '5px', paddingTop: '15px' }}>
                                <h5>Have an Account ? <Link id="linkform" to='/login'> Sign In Now </Link> </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );

}


export default SignUp;