import React from "react";
import { useState } from "react";
import Logo from "../Images/logo.png"
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import "../Style/login.css"
import loginImage from "../Images/login-remove.png"
import { login } from '../actions/auth';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const [errorMessage, setErrorMessage] = useState('');
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        let err = document.getElementById('errorMessage')
        e.preventDefault();
        login(email, password);
        
    };
    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    return (
        <>
            <div className="main-login">
                <div className="login-conatiner ">
                    <div className="left-side">
                        <div className="img-className">
                            <Link to='' >
                                <img id="loginlogoID" src={Logo} />
                            </Link>
                        </div>
                        <form id="LoginForm" onSubmit={e => onSubmit(e)}>
                            <div className="Form_Title" id="Form_Title"> Sign In</div>
                            <div >
                                <label className="form-label"></label>
                                <input type="email" className="form-control" name='email'
                                    value={email}
                                    onChange={e => onChange(e)} placeholder="Enter Your Email" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="password" className="form-control" name='password'
                                    value={password}
                                    onChange={e => onChange(e)}
                                    minLength='8' placeholder="Password" required />
                            </div>
                            <div align="center" className="col-12 text-center" id="errorMessage" >
                                <span>{errorMessage}</span>
                                <br />
                            </div>
                            <div style={{ textDecoration: "none", direction: "none" }}>
                                <Link to={"/dashboard"} style={{ textDecoration: "none", direction: "none" }}>
                                    <button type="submit" className="btn" >Sign In</button>
                                </Link>
                            </div>
                        </form>
                        <div>
                            {/* <p id="social-text" style={{ alignitems: "center" }}> or sign in with</p>
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
                            </div> */}
                            <div className="footerform " style={{ color: "#528298", paddingTop: '15px' }}>
                                <p id="footerLink" >Forget Password ? <Link id="linkform" to='/reset-password'> Reset Password  </Link> </p>
                            </div>
                            <div className="footerform " style={{ color: "#528298", paddingTop: '15px' }}>
                                <p id="footerLink" >Dont Have an Account ? <Link id="linkform" to='/signup'> Register Now </Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="right-side" id="rightSide">
                        <div className="welcomeNote" id="welcomeNote">
                            <p style={{ color: "#ffffff", fontWeight: 700 }}>
                                Welcome Back
                            </p>
                        </div>
                        <div className="welcomeImg">
                            <img id="loginImg" src={loginImage}>
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);