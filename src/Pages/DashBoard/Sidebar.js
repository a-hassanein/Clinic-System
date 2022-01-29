import {Link} from "react-router-dom";
import React, { useState, useRef,useEffect } from "react";
import SignUp from '../signup';
import Home from '../../Components/Home';
import "../../Style/sidebar.css";
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import {
    FiMenu,
    FiGrid,
    FiCalendar,
    FiSettings
} from "react-icons/fi";

import {
    GiMedicines,
    GiScalpel
} from "react-icons/gi";

import {
    FaUserInjured
} from "react-icons/fa";

import {
    ImLab,
    ImSearch
} from "react-icons/im";

import {
    RiNurseFill,
    RiBillLine
} from "react-icons/ri";

import {
    BsBagDashFill
} from "react-icons/bs";

import {
    BiLogOut
  } from "react-icons/bi";

const Sidebar = () => {
    let sidebar = document.querySelector(".sidebar");

    
    const btnclass = () => {
        sidebar.classList.toggle("active");
    }

    const searchBtnclass = () => {
        sidebar.classList.toggle("active");
    }

    
  return (
    <>
        <body className="sidebarBody">  
        <div className='sidebar'>

            <div className="logo_content">
                <div className="logo">
                    <img className={"logo"} src={require("../../Images/logo4.png")} alt="..logo"/>
                </div>
                <i id="btn" className={""} onClick={btnclass} ><FiMenu></FiMenu></i>
            </div> 

            <ul className='nav_list'>

                <li className="nav_Item">
                    <Link className="linkClass" to={""}>
                    <input type={"text"} placeholder={"search"}/>
                    <i className="searchIcon" onClick={searchBtnclass} style={{bottom:"-0.2px"}}><ImSearch></ImSearch></i>
                    <span className="tooltip">search</span>
                    </Link>
                </li>
                <li className="nav_Item">
                    <Link className="linkClass" to={"#"}>
                        <i><FiGrid></FiGrid></i>
                        <span className="links_name">Dashboard</span>
                        <span className="tooltip">Dashboard</span>
                    </Link>
                    
                </li>
                <li className="nav_Item">
                    <Link to={"#"} className="linkClass">
                        <i><FaUserInjured></FaUserInjured></i>
                        <span className="links_name">Patient</span>
                        <span className="tooltip">Patient</span>
                    </Link>
                </li>
                <li className="nav_Item">
                    <Link to={"#"} className="linkClass">
                        <i><FiCalendar></FiCalendar></i>
                        <span className="links_name">Appointment</span>
                        <span className="tooltip">Appointment</span>
                    </Link>
                </li>
                <li className="nav_Item">
                    <Link to={"#"} className="linkClass">
                        <i><GiMedicines></GiMedicines></i>
                        <span className="links_name">Prescription</span>
                        <span className="tooltip">Prescription</span>
                    </Link>
                </li>
                <li className="nav_Item"> 
                    <Link to={"#"} className="linkClass">
                        <i><RiNurseFill></RiNurseFill></i>
                        <span className="links_name">Assistants</span>
                        <span className="tooltip">Assistants</span>
                    </Link>
                </li>
                <li className="nav_Item">
                    <Link to={"#"} className="linkClass">
                        <i><BsBagDashFill></BsBagDashFill></i>
                        <span className="links_name">Materials</span>
                        <span className="tooltip">Materials</span>
                    </Link>
                </li>
                <li className="nav_Item">
                    <Link to={"/bill"} className="linkClass">
                        <i><RiBillLine></RiBillLine></i>
                        <span className="links_name">Bill</span>
                        <span className="tooltip">Bill</span>
                    </Link>
                </li>
                <li className="nav_Item">
                    <Link to={"/surgery"} className="linkClass">
                        <i><GiScalpel></GiScalpel></i>
                        <span className="links_name">Surgery</span>
                        <span className="tooltip">Surgery</span>
                    </Link>
                </li>
                <li className="nav_Item">
                    <Link to={"#"} className="linkClass">
                        <i><FiSettings></FiSettings></i>
                        <span className="links_name">Settings</span>
                        <span className="tooltip">Settings</span>
                    </Link>
                </li>
            </ul>
            <div className="profile_content">
                <div className="profile">
                    <div className="profile_details">
                    <img className="profileImg" src={require("../../Images/Hassanein.png")} alt="..logo"/>
                    <div className="name_clinic">
                        <div className="name">Ahmed Hassanein</div>
                        <div className="clinic">Masr Clinic</div>
                    </div>
                    </div>
                    <i id="log_out"><BiLogOut></BiLogOut></i>
                </div>
            </div>
        </div>
        <section class="home-section">
            <div class="text">HHHHHHHHHHedfsgzgfjhgdfghgfgfdgfdgfdgrdsfgrslllo</div>
        </section>
        </body>
    </>
  );
};

export default Sidebar;