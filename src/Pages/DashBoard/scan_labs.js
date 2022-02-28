import React from "react";
import "../../Style/scan_lab.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Scan_labs() {

    return (
        <>
            <section className='home-section' style={{ marginTop: '20px' }} >
                <div>

                    <div>
                        <h1 className="header_patient"> Scan & Labs </h1>
                    </div>
                    <div className='container-fluid  formcontainer' >
                        <form method="post">
                            <div className="row">
                                <div className="col-lg-4">
                                    <label className="form-label">Patient Name</label>
                                    <input type='text' className='form-control' name="patientname" required />
                                </div>
                                <div className="col-lg-4">
                                    <label className="form-label">Patient Phone Number </label>
                                    <input type='text' className='form-control' name="patientmobile" required />
                                </div>
                                <div className="col-lg-4">
                                    <label className="form-label">Doctor Name</label>
                                    <input type='text' className='form-control' name="patientname" required />
                                </div>
                            </div>
                            <div className="row">
                            <div class="container mt-5">
  <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
  </select>
</div>
                                <div className="col-lg-6">

                                    <label className="form-label">Scan</label>
                                    <select className="form-select" multiple>
                                        <option value="1">Scan 1</option>
                                        <option value="2">Scan 2</option>
                                        <option value="2">Scan 3</option>
                                        <option value="3">Scan 4</option>
                                        <option value="4">Scan 5</option>
                                        <option value="5">Scan 6</option>

                                    </select>
                                </div>
                                <div className="col-lg-6">

                                    <label className="form-label">Lab</label>
                                    <select className="form-select" multiple data-mdb-clear-button="true">
                                        <option value="1">Lab 1</option>
                                        <option value="2">Lab 2</option>
                                        <option value="2">Lab 3</option>
                                        <option value="3">Lab 4</option>
                                        <option value="4">Lab 5</option>
                                        <option value="5">Lab 6</option>

                                    </select>
                                </div>
                                {/* <table className="table col-lg-6" id="table_container_1">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">SCAN NAME </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>


                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Mark</td>


                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Mark</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Mark</td>

                                        </tr>
                                    </tbody>
                                </table>
                                <table className="table col-lg-6" id="table_container_1">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Lab NAME </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>


                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Mark</td>


                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Mark</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Mark</td>

                                        </tr>
                                    </tbody>
                                </table> */}
                            </div>
                            <div className="row text-center">
                                <div className="col-lg-12" style={{ marginTop: "30px" }}>
                                    <input type="submit" className="btn prescriptionButton" value="submit" />
                                </div>
                            </div>
                        </form>

                    </div>


                </div>

            </section >

        </>


    );

}


export default Scan_labs;