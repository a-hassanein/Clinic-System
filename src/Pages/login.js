import React from "react";
import { useState } from "react";
import Logo from "../Images/logo.png"
import { Link } from "react-router-dom";
import "../Style/login.css"
import login from "../Images/login-remove.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handlesubmit = (event) => {
        event.preventDefault();
    }
    return (
        <>
            {/* <div>
                <NavBar />
            </div> */}
            <div className="main-login">
                <div className="login-conatiner ">
                    <div className="left-side">
                        <div className="img-className">
                            <Link to='' >
                            <img id ="loginlogoID" src={Logo} />
                            </Link>
                        </div>
                        <form id="LoginForm" onSubmit={handlesubmit}>
                            <div className="Form_Title" id="Form_Title"> Sign In</div>
                            <div >
                                <label className="form-label"></label>
                                <input  type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Your Email" required/>
                            </div>
                            <div >
                                <label  className="form-label"></label>
                                <input   type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" id="button" required />
                            </div>
                            <button type="submit" className="btn" >Sign In</button>
                        </form>
                        <div>
                            <p id="social-text" style={{ alignitems: "center" }}> or sign in with</p>
                            <div id="socialmediaLogin">
                                <a href="https://www.facebook.com">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <a href="https://www.twitter.com" >
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                                <a href="https://www.instagram.com">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </div>
                            <div className="footerform " style={{ color: "#528298", paddingTop: '15px' }}>
                                <p id="footerLink" >Dont Have an Account ? <Link id ="linkform" to='/signup'> Register Now </Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="right-side" id="rightSide">
                        <div className="welcomeNote" id="welcomeNote">
                            <p style={{color:"#ffffff" , fontWeight:700}}>
                                Welcome Back
                            </p>
                        </div>
                        <div className="welcomeImg">
                            <img id="loginImg" src={login}>
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}


export default Login;