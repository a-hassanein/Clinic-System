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
            <section className='home-section' style={{ marginTop: '30px', }} >
            <div id="page_image">
                <div>
                    <h1 className="header_patient"> ADD NEW PATIENT </h1>
                </div>
                <div className="container" id="createpatientForm">
                    <div className="container-fluid">
                        <form>
                            <div class="row align-items-center">
                                <h4 id="personal_information">Personal Information</h4>
                                <div class="col-md-6">
                                    <label class="col-form-label">FIRST NAME</label>
                                    <input class="form-control" type="text" required />
                                    {/* <div class="valid-feedback">Good! Patient First Name looks valid.</div>
                                    <div class="invalid-feedback">Opps! You have entered an invalid password.</div> */}

                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">LAST NAME</label>
                                    <input class="form-control" type="text" required />
                                    {/* <div class="valid-feedback">Good! Patient Last Name looks valid.</div> */}
                                </div>

                            </div>
                            <div class="row g-3 align-items-center">
                                <div class="col-md-8">
                                    <label class="col-form-label">ADDRESS</label>
                                    <input class="form-control" type="text" required />

                                </div>
                                <div class="col-md-4">
                                    <label class="col-form-label">PHONE NUMBER</label>
                                    <input class="form-control" type="phonenumber" required />

                                </div>

                            </div>
                            <div class="row g-3 align-items-center">
                                <div class="col-md-6">
                                    <label class="col-form-label">EMAIL</label>
                                    <input class="form-control" type="email" required />

                                </div>
                                <div class="col-md-3">
                                    <label class="col-form-label">AGE</label>
                                    <input class="form-control" type="number" required />

                                </div>
                                <div class="col-md-3">
                                    <label class="col-form-label">GENDER</label>
                                    <select class="form-select">
                                        <option>Female</option>
                                        <option>Male</option>

                                    </select>
                                </div>

                            </div>
                            <div class="row align-items-center">
                                <h4 id="medical_details">MEDICAL DETAILS</h4>
                                <div class="col-md-6">
                                    <label class="col-form-label">DOCTOR NAME</label>
                                    <input class="form-control" type="text" required />

                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">SURGERY NAME</label>
                                    <input class="form-control" type="text" required />

                                </div>

                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <label class="col-form-label">Scanning</label>
                                    <input class="form-control" type="text" required />

                                </div>
                                <div class="col-md-4">
                                    <label class="col-form-label">CURRENT DISEASE</label>
                                    <input class="form-control" type="text" required />

                                </div>
                                <div class="col-md-4">
                                    <label class="col-form-label">QUANTITY OF DRUG</label>
                                    <input class="form-control" type="text" required />
                                </div>

                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <label class="col-form-label">VISITA</label>
                                    <input class="form-control" type="text" required />

                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">COMMENTS</label>
                                    <input class="form-control" type="text" required />

                                </div>
                            
                            </div>



                            <button type="submit" id="searchbtn"  style={{ marginLeft: "auto" , marginRight:"auto" , marginTop:"20px" , width:"200px"}} className="btn align-items-center">Add Patient</button>
                        </form>
                    </div>
                </div>
                </div>
            </section>
        </>


    );

}


export default CreatePatient;