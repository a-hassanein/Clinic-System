import React from "react";
import "../Style/createpatient.css";

function AddPatient() {
    return (
        <div>
            <div className="container-fluid text-center">
                <h1>Add New Patient</h1>
            </div>
            <div className="container-fluid formPart" id="createpatientForm">
                <div className="container-fluid">
                    <form>
                        <div class="row">
                            <h4 id="personal_information">Add New Patient</h4>
                            <div class="col-md-6">
                                <label class="col-form-label">Full Name</label>
                                <input class="form-control" type="text" required />
                            </div>
                            <div class="col-md-6">
                                <label class="col-form-label">Phone Number</label>
                                <input class="form-control" type="phonenumber" required />

                            </div>

                        </div>
                        <div class="row g-3 align-items-center">
                            <div class="col-md-8">
                                <label class="col-form-label">Address</label>
                                <input class="form-control" type="text" required />
                            </div>
                            <div class="col-md-4">
                                <label class="col-form-label">Age</label>
                                <input class="form-control" type="number" required />

                            </div>


                        </div>
                        <div class="row g-3 align-items-center">
                            <div class="col-md-5">
                                <label class="col-form-label">Email</label>
                                <input class="form-control" type="email" required />

                            </div>
                            <div class="col-md-4">
                                <label class="col-form-label">Current Disease</label>
                                <input class="form-control" type="text" required />
                            </div>
                            <div class="col-md-3">
                                <label class="col-form-label">Gender</label>
                                <select class="form-select">
                                    <option>Female</option>
                                    <option>Male</option>

                                </select>
                            </div>

                        </div>
                        <div class="row align-items-center">


                            <div class="col-md-12">
                                <label class="col-form-label">Comments</label>
                                <input class="form-control" type="text" required />

                            </div>

                        </div>
                                <button type="submit" className="btn" id="searchbtn" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "20px" }}>Add Patient</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPatient;
