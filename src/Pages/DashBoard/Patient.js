import React, { useEffect } from "react";
import "../../Style/patient.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import PatientTable from "../../Components/PatientTable";
import AddPatient from "../../Components/AddPatient";

import axios from "axios";
function Patient() {
    const [patients, setPatients] = useState([])
    // const [addPatientsData, setPatientsData] = useState({
    //     name: "",
    //     mobile: "",
    //     gender: "",
    //     address: "",
    //     email: "",
    //     pass: "",
    //     age: "",
    // });
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
    // const handleAddPatientChange = (event) => {
    //     event.preventDefault();
    
    //     const name = event.target.getAttribute("name");
    //     const value = event.target.value;
    
    //     const newFormData = { ...addPatientsData };
    //     newFormData[name] = value;
    
    //     setaddPatientsData(newFormData);
    //   };

    //   const handleAddFormSubmit = (event) => {
    //     event.preventDefault();
    
    //     const newData = {
    //       assistant_name: addPatientsData.name,
    //       assistant_email: addPatientsData.email,
    //       assistant_pass: addPatientsData.pass,
    //       assistant_number: addPatientsData.mobile,
    //       assistant_gender: addPatientsData.gender,
    //       assistant_address: addPatientsData.address,
    //       assistant_age: addPatientsData.age, 
    //       doctor: 1,        
    //     };

    //     const newDatas = [...data, newData];
        
    //     setData(newDatas);

    //     try{
    //         axios.post('http://127.0.0.1:8000/patient/patient/', newData).then((response)=>{
    //             getPatients()
    //             console.log(response.data)
    //         })

    //     }catch(error){
    //         console.log(error)
    //     }

    // }
    
    
  

    return (
        <>
            <section className='home-section' style={{ marginTop: '20px' }} >

                <div>

                    <AddPatient />
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