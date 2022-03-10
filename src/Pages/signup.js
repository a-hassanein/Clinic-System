import React from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import registerImg from "../Images/signup-remove.png"
import { useState } from "react";
import logo from "../Images/logo3.png";
import "../Style/signup.css"
import { signup} from '../actions/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
const SignUp = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        age: '',
        gender: '',
        phone: '',
        password: '',
        re_password: '',
    
    });

    const { name, username, email,  age, gender, phone,  password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(name, username, email,  age, gender, phone,  password, re_password);
            setAccountCreated(true);
        }
    };
    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    if (accountCreated) {
        return <Redirect to='/login' />
    }


    return (
        <>
            <div className="main-signup">
                <div className="signup-conatiner">
                    <div className="left-side" id="leftSide">
                        <div className="welcomeNote" id="welcomeNote">
                            <p style={{ color: "#ffffff", fontWeight: 700 }}>
                                Welcome To
                                <Link to=''>
                                    <img id="logoId" style={{ width: '100px', alignItems: "center", paddingBottom: 12, marginLeft: 10 }} src={logo} />
                                </Link>
                            </p>
                            <h3 style={{ fontWeight: 600, fontSize: 20 }}>
                                We are so glad to have you here

                            </h3>
                        </div>
                        <div className="welcomeImg">
                            <img id="registerImg" src={registerImg}>
                            </img>
                        </div>

                    </div>
                    <div className="right-side">
                        <form id="formSign" onSubmit={e => onSubmit(e)}>
                            <div id="Form_Title">Create Account</div>
                            <div >
                                <label className="form-label"></label>
                                <input type="text" id="formInput" className="form-control" name='name'
                                    value={name}
                                    onChange={e => onChange(e)} placeholder="Enter Your Name*" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="text" className="form-control" name='username'
                                    value={username}
                                    onChange={e => onChange(e)}
                                    required placeholder="Enter Your User Name*" />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="email" className="form-control"  name='email' value={email}
                                    onChange={e => onChange(e)}
                                    placeholder="Enter Your Email*" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="number" className="form-control"  name='age' value={age} onChange={e => onChange(e)} placeholder="Enter Your Age*" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="text" className="form-control"  name='gender' value={gender} onChange={e => onChange(e)} placeholder="Enter Your Gender*" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="text" className="form-control"  name='phone' value={phone} onChange={e => onChange(e)} placeholder="Enter Your Phone Number*" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input  type="password"  name='password' className="form-control" value={password}
                                    onChange={e => onChange(e)}
                                    minLength='8'
                                    placeholder="Password*" required />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="password" className="form-control" name='re_password'
                                    value={re_password}
                                    onChange={e => onChange(e)}
                                    minLength='6'
                                    placeholder="Confirm Password*" required />
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

};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(SignUp);