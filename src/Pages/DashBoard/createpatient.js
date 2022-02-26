import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar"
import "../../Style/createpatient.css";

function CreatePatient() {

    return (

        <>
            <Sidebar />
            <section className='home-section' >
                <div className="container" id="navbar_container" >
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid" >
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="">MASR CLINIC </a>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/addpatient">CREATE PATIENT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/patient">ALL PATIENTS</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search For Patient" aria-label="Search" id="searchfield" />
                                    <button className="btn" id="searchbtn" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container" id="createpatientForm">
                    <div className="container-fluid">
                        <div>
                            <h2 id="header_form"> Welcome , Add New Patient</h2>
                        </div>
                        <form>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">First Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Last Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Address</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Phone Number</label>
                                <div className="col-sm-10">
                                    <input type="phone" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Phone Number</label>
                                <div className="col-sm-10">
                                    <input type="phone" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Phone Number</label>
                                <div className="col-sm-10">
                                    <input type="phone" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Phone Number</label>
                                <div className="col-sm-10">
                                    <input type="phone" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Phone Number</label>
                                <div className="col-sm-10">
                                    <input type="phone" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Phone Number</label>
                                <div className="col-sm-10">
                                    <input type="phone" className="form-control" />
                                </div>
                            </div>
                            


                            <button type="submit" id="searchbtn" style={{marginLeft:"440px"}} className="btn">Add Patient</button>
                        </form>
                    </div>
                </div>
            </section>
        </>


    );

}


export default CreatePatient;