import React, { useState } from "react";
import "../Style/patient.css";

const AddPatient = ({ addPatient }) => {
    const [patient_name, setpatient_name] = useState('')
    const [patient_phone, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [patient_age, setAge] = useState('')
    const [patient_email, setEmail] = useState('')
    const [current_disease, setCurrentDisease] = useState('')
    const [patient_gender, setGender] = useState('')
    const [doctor, setDoctor] = useState('')
    const [assistant, setAssistant] = useState('')
    const addPatientHandler = e => {
        e.preventDefault()
        addPatient({
            patient_name,
            patient_phone,
            address,
            patient_age,
            patient_email,
            current_disease,
            patient_gender,
            doctor,
            assistant,
        })

    }
    return (
        <div>
            <div className="container-fluid text-center" >
                <h1>Add New Patient</h1>
            </div>
            <div className="container" id="createpatientForm">
                <div className="container-fluid">
                    <form>
                        <div class="row">
                            <h4><b>Add New Patient</b></h4>
                            <div class="col-md-6">
                                <label class="col-form-label">Full Name</label>
                                <input class="form-control" placeholder="Enter Full Name" type="text" required onChange={e => setpatient_name(e.target.value)} />
                            </div>
                            <div class="col-md-6">
                                <label class="col-form-label">Phone Number</label>
                                <input class="form-control" placeholder="Enter Phone Number " type="phonenumber" required onChange={e => setPhoneNumber(e.target.value)} />

                            </div>

                        </div>
                        <div class="row g-3 align-items-center">
                            <div class="col-md-8">
                                <label class="col-form-label">Address</label>
                                <input class="form-control" placeholder="Enter Address" type="text" required onChange={e => setAddress(e.target.value)} />
                            </div>
                            <div class="col-md-4">
                                <label class="col-form-label">Age</label>
                                <input class="form-control" placeholder="Enter Age" type="number" required onChange={e => setAge(e.target.value)} />

                            </div>


                        </div>
                        <div class="row g-3 align-items-center">
                            <div class="col-md-8">
                                <label class="col-form-label">Doctor Name</label>
                                <input class="form-control" placeholder="Enter Doctor" type="number" required onChange={e => setDoctor(e.target.value)} />
                            </div>
                            <div class="col-md-4">
                                <label class="col-form-label">Assistant</label>
                                <input class="form-control" placeholder="Enter Assistant" type="number" required onChange={e => setAssistant(e.target.value)} />

                            </div>


                        </div>
                        <div class="row g-3 align-items-center">
                            <div class="col-md-5">
                                <label class="col-form-label">Email</label>
                                <input class="form-control" placeholder="Enter Email" type="email" required onChange={e => setEmail(e.target.value)} />

                            </div>
                            <div class="col-md-4">
                                <label class="col-form-label">Current Disease</label>
                                <input class="form-control" placeholder="Enter Current Disease" type="text" required onChange={e => setCurrentDisease(e.target.value)} />
                            </div>
                            <div class="col-md-3">
                                <label class="col-form-label">Gender</label>
                                <select class="form-select" onChange={e => setGender(e.target.value)}>
                                    <option>Female</option>
                                    <option>Male</option>

                                </select>
                            </div>

                        </div>
                        {/* <div class="row align-items-center">
                            <div class="col-md-12">
                                <label class="col-form-label">Comments</label>
                                <input class="form-control" placeholder="Enter Comments" type="text" required onChange={e => setComments(e.target.value)} />
                            </div>
                        </div> */}
                        <button type="submit" className="btn" id="searchbtn" onClick={addPatientHandler} style={{ marginLeft: "auto", marginRight: "auto", marginTop: "20px" }} >Add Patient</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPatient;
