import React from "react";
import "../../Style/patient.css";
import CreatePatient from './createpatient';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Patient() {

    return (
        <>
            <section className='home-section' style={{marginTop:'20px' , textAlign:"center"}} >
                <div>
                    <h2 className="header_patient"> ALL PATIENTS</h2>
                </div>

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

                <table class="table" id="table_container">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">PATIENT FIRST NAME </th>
                            <th scope="col">PATIENT LAST NAME </th>
                            <th scope="col">PHON NUMBER</th>
                            <th scope="col">PATIENT's DOCTOR</th>
                            <th scope="col">CURRENT DISEASE</th>
                            <th scope="col">PATIENT STATUS</th>
                            <th scope="col">NEXT APPOINTMENT</th>
                            <th scope="col">SURGERY</th>
                            <th scope="col">UPDATES</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>

                        </tr>
                    </tbody>
                </table>
            </section>

        </>


    );

}


export default Patient;