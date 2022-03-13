import React from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import registerImg from "../Images/signup-remove.png"
import { useState } from "react";
import logo from "../Images/logo3.png";
import "../Style/signup.css"
import { signup } from '../actions/auth';
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

    const { name, username, email, age, gender, phone, password, re_password } = formData;
    const [errorMessage, setErrorMessage] = useState('');

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let username = document.getElementById('username').value;
        let phone = document.getElementById('phone').value;
        let age = document.getElementById('age').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let re_password = document.getElementById('re_password').value;
        let gender = document.getElementById('gender').value;
        let err = document.getElementById('errorMessage')
        var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var nameregx=/^[aA-zZ\s]+$/;
        if(name === null || name === ""){
            setErrorMessage("Name is required")
            err.style.visibility = "visible"
        }
        else if (!name.match(nameregx)) {
            setErrorMessage("name should be string")
            err.style.visibility = "visible"
        }
        else if(username === null || username === ""){
            setErrorMessage("Username is required")
            err.style.visibility = "visible"
        }else if(isNaN(phone)){
            setErrorMessage("Password should be a number not string")
            err.style.visibility = "visible"
        }else if(phone.length < 11 || phone.length > 11 ){
            setErrorMessage("Mobile Phone Number digits should be 11")
            err.style.visibility = "visible"
        }else if(age === null || age ===""){
            setErrorMessage("Age is required")
            err.style.visibility = "visible"
        }else if(isNaN(age)){
            setErrorMessage("Age should be a number not string")
        }else if(email === null || email === ""){
            setErrorMessage("Email is required")
            err.style.visibility = "visible"
        }else if(!email.match(mailformat)){
            setErrorMessage("email should be example@exam.com")
            err.style.visibility = "visible"
        }else if(password === null || password === ""){
            setErrorMessage("Password is required")
            err.style.visibility = "visible"
        }
        else if(re_password === null || re_password === ""){
            setErrorMessage("Confirm Password is required")
            err.style.visibility = "visible"
        }
        else if (password !== re_password) {
            setErrorMessage("Passwords Doesnt Match")
            err.style.visibility = "visible"
        }
        else if (gender === null || gender === ""){
            setErrorMessage("Gender is required")
            err.style.visibility = "visible"
        }
        else if (password === re_password) {
            signup(name, username, email, age, gender, phone, password, re_password);
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
                                <input type="text" id="name" className="form-control" name='name'
                                    value={name}
                                    onChange={e => onChange(e)} placeholder="Enter Your Name*"  />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="text" id="username"
                                    className="form-control" name='username'
                                    value={username}
                                    onChange={e => onChange(e)}
                                     placeholder="Enter Your User Name*" />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="email" id="email" className="form-control" name='email' value={email}
                                    onChange={e => onChange(e)}
                                    placeholder="Enter Your Email*"  />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="number" className="form-control" id="age" name='age' value={age} onChange={e => onChange(e)} placeholder="Enter Your Age*"  />
                            </div>
                            <div className="col-lg-6">
                                <select class="custom-select" name="gender"  value={gender} onChange={e => onChange(e)} id="gender" required>
                                    <option value="">choose your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            {/* <div >
                                <label className="form-label"></label>
                                <input type="text" className="form-control" name='gender' value={gender} onChange={e => onChange(e)} placeholder="Enter Your Gender*" required />
                            </div> */}
                            <div >
                                <label className="form-label"></label>
                                <input type="text" className="form-control" id="phone" name='phone' value={phone} pattern="^01[0-2]\d{1,8}$" onChange={e => onChange(e)} placeholder="Enter Your Phone Number*"  />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="password" name='password' id="password" className="form-control" value={password}
                                    onChange={e => onChange(e)}
                                    minLength='8'
                                    placeholder="Password*"  />
                            </div>
                            <div >
                                <label className="form-label"></label>
                                <input type="password" className="form-control" id="re_password" name='re_password'
                                    value={re_password}
                                    onChange={e => onChange(e)}
                                    minLength='6'
                                    placeholder="Confirm Password*"  />
                            </div>
                            <div align="center" className="col-12 text-center" id="errorMessage" >
                                <span>{errorMessage}</span>
                                <br/>
                            </div>
                            <button type="submit" className="btn" >Sign Up</button>
                        </form>
                        <div >
                            {/* <p id="social-text" style={{ alignitems: "center" }}> or sign up with</p>
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

                            </div> */}
                           
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