import React, { useEffect } from "react";
import "../../Style/patient.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import PatientTable from "../../Components/PatientTable";
import AddPatient from "../../Components/AddPatient";

import axios from "axios";
function Patient() {
    const [patients, setPatients] = useState([])
    const getPatients = async () => {
        try {
            const response = await axios.get('/patient/patient/')
            const { data } = response
            console.log(data)
            setPatients(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getPatients()
    }, [])
    const addPatient = async newpatient => {
        try {
            console.log(newpatient)
            await axios.post('/patient/patient/' , {
                "patient_phone": newpatient.patient_phone,
                "patient_name":  newpatient.patient_name,
                "patient_gender": newpatient.patient_gender,
                "current_disease": newpatient.current_disease,
                "patient_email": newpatient.patient_email,
                "patient_age": newpatient.patient_age,
                "patient_address": newpatient.patient_address,
                "doctor": newpatient.doctor,
                "assistant": newpatient.assistant
            } )
            getPatients()

        } catch (err) {
            console.log(err)
        }
    }
  

    return (
        <>
            <section className='home-section' style={{ marginTop: '20px' }} >

                <div>

                    <AddPatient  addPatient={ addPatient }/>
                    <div className="container-fluid text-center">
                        <h1>All Patients</h1>
                    </div>
                    <div className="frame_nav d-flex justify-content-center">
                        <form className="d-flex" >
                            <input className="form-control me-2" type="search" placeholder="Search For Patient" aria-label="Search" id="searchfield" />
                            <button className="btn" id="searchbtn" type="submit">Search</button>
                        </form>


                    </div>
                    <table class="table" id="table_container">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">PATIENT Full NAME </th>
                                <th scope="col">PATIENT PHONE NUMBER</th>
                                <th scope="col">PATIENT EMAIL</th>
                                <th scope="col">PATIENT AGE</th>
                                <th scope="col">PATIENT's DOCTOR</th>
                                <th scope="col">CURRENT DISEASE</th>
                                <th scope="col">NEXT APPOINTMENT</th>


                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient, index) => (

                                <PatientTable patient={patient}  index={index}/>
                            )
                            )}
                        </tbody>

                    </table>
                </div>

            </section>

        </>


    );

}


export default Patient;