import React from "react";
import { Link } from "react-router-dom";
import signup from "../Images/signup-remove.png"
import { useState } from "react";
import logo from "../Images/logo3.png";
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
            <div className="main-signup">
                <div className="signup-conatiner">
                    <div className="left-side" id="leftSide">
                        <div className="welcomeNote" id="welcomeNote">
                            <p style={{ color: "#ffffff", fontWeight: 700 }}>
                                Welcome To

                                <img id="logoSignUpId" style={{ width: '100px', alignItems: "center", paddingBottom: 12, marginLeft: 10 }} src={logo} />
                            </p>
                            <h3 style={{ fontWeight: 600, fontSize: 20 }}>
                                We are so glad to have you here

                            </h3>
                        </div>
                        <div className="welcomeImg">
                            <img id="signupImg" src={signup}>
                            </img>
                        </div>

                    </div>
                    <div className="right-side">
                        <form id="formSign" onSubmit={handlesubmit}>
                            <div id="Form_Title">Create Account</div>
                            <div >
                                <label className="form-label"></label>
                                <input type="text" id="formInput" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Your Name" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="text" className="form-control" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter Your User Name" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Your Email" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$" type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$" type="password" className="form-control" value={Conpassword} onChange={(e) => { setConPassword(e.target.value) }} placeholder="Confirm Password" required />
                            </div>
                            <button type="submit" className="btn" >Sign Up</button>
                        </form>
                        <div >
                            <p id="social-text" style={{ alignitems: "center" }}> or sign up with</p>
                            <div id="socialmediaSignUp">
                            <a href="https://www.facebook.com"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.twitter.com" >
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>

                        </div>
                            <div className="footerform " style={{ color: "#528298", paddingTop: '15px' }}>
                                <p id="footerLink">Have an Account ? <Link id="linkform" to='/login'> Sign In Now </Link> </p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>


    );

}


export default SignUp;