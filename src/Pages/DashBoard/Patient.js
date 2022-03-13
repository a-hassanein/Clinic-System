import React, { useEffect,Fragment } from "react";
import "../../Style/patient.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import PatientTable from "../../Components/PatientTable";
import AddPatient from "../../Components/AddPatient";
import config from "../../actions/auth"
import PatientReadOnlyRow from "./component/PatientReadOnlyRow";
import EditPatienttableRow from "./component/EditPatienttableRow";

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

const [addPatient, setAddPatient] = useState({
    fullname: "",
    phone: "",
    address: "",
    age: "",
    doctorname: "",
    email: "",
    currentdisease: "",
    Gender: "",
});

const [editPatient, setEditPatient] = useState({
    fullname: "",
    phone: "",
    address: "",
    age: "",
    doctorname: "",
    email: "",
    currentdisease: "",
    Gender: "",
});

const [editPatientID, setEditPatientID] = useState(null);

const handleEditPatientChange = (event) => {
    event.preventDefault();
  
    const name = event.target.getAttribute("name");
    const value = event.target.value;
  
    const newPatientData = { ...editPatient };
    newPatientData[name] = value;
  
    setEditPatient(newPatientData);
  };

  const handleEditPatientSubmit = (event) => {
    event.preventDefault();
  
    const newData = {
      patient_phone: editPatient.phone,
      doctor: editPatient.doctorname,
      patient_name: editPatient.fullname,    
      patient_gender: editPatient.Gender,    
      current_disease: editPatient.currentdisease,    
      patient_email: editPatient.email,    
      patient_age: editPatient.age,    
      patient_address: editPatient.address,       
    };
  
    const newDatas = [newData];
    
    setPatients(newDatas);
  
    try{
        axios.put(`/patient/patient/${editPatientID}/`, {
            patient_phone: editPatient.phone,
            doctor: editPatient.doctorname,
            patient_name: editPatient.fullname,    
            patient_gender: editPatient.Gender,    
            current_disease: editPatient.currentdisease,    
            patient_email: editPatient.email,    
            patient_age: editPatient.age,    
            patient_address: editPatient.address,   
        }).then((response)=>{
            getPatients()
            console.log(response.data)
  
        })
  
    }catch(error){
        console.log(error)
    }
    setEditPatientID(null);
  };

  const handleEditClick = (event , resdata) => {
    event.preventDefault();
    //console.log(typeof(resdata.assistant_id))
    setEditPatientID(resdata.patient_id);
  
    const formValues = {
        phone: resdata.patient_phone,
        doctorname: resdata.doctor,
        fullname: resdata.patient_name,    
        Gender: resdata.patient_gender,    
        currentdisease: resdata.current_disease,    
        email: resdata.patient_email,    
        age: resdata.patient_age,    
        address: resdata.patient_address,  
    };
  
    console.log(formValues)
  
    setEditPatient(formValues);
  };
  
  const handleCancelClick = () => {
    setEditPatientID(null);
  };
  
  const handleAddPatientChange = (event) => {
      event.preventDefault();
  
      const name = event.target.getAttribute("name");
      const value = event.target.value;
  
      const newPatientData = { ...addPatient };
      newPatientData[name] = value;
  
      setAddPatient(newPatientData);
    };
  
  
    const handleAddPatientSubmit = (event) => {
      event.preventDefault();
  
      const newData = {
        patient_phone: addPatient.phone,
        doctor: addPatient.doctorname,
        patient_name: addPatient.fullname,    
        patient_gender: addPatient.Gender,    
        current_disease: addPatient.currentdisease,    
        patient_email: addPatient.email,    
        patient_age: addPatient.age,    
        patient_address: addPatient.address,      
      };
  
      const newDatas = [...patients, newData];
      
      setPatients(newDatas);
  
      try{
          axios.post('/patient/patient/', newData).then((response)=>{
              console.log(response.data)
          })
  
      }catch(error){
          console.log(error)
      }
    };
  
    const handledeletePatient = async (patient_id) => {
      try {
        await axios.delete(`/patient/patient/${patient_id}/`);
        getPatients();
      } catch (error) {
        console.log(error);
      }
    };
  
    console.log(patients)

    return (
        <>
            <section className='home-section' style={{ marginTop: '20px' }} >

            

                <div className="container-fluid text-center" >
                <h1>Add New Patient</h1>
            </div>
            <div className="container-fluid formPart" id="createpatientForm">
                <div className="container-fluid">
                    <form onSubmit={handleAddPatientSubmit}>
                        <div class="row">
                            <h4><b>Add New Patient</b></h4>
                            <div class="col-md-6">
                                <label class="col-form-label">Full Name</label>
                                <input class="form-control" placeholder="Enter Full Name" type="text" name="fullname" onChange={handleAddPatientChange} required />
                            </div>
                            <div class="col-md-6">
                                <label class="col-form-label">Phone Number</label>
                                <input class="form-control" placeholder="Enter Phone Number " type="phonenumber" name="phone" onChange={handleAddPatientChange} required />

                            </div>

                        </div>
                        <div class="row g-3 align-items-center">
                            <div class="col-md-8">
                                <label class="col-form-label">Address</label>
                                <input class="form-control" placeholder="Enter Address" type="text" name="address" onChange={handleAddPatientChange} required />
                            </div>
                            <div class="col-md-4">
                                <label class="col-form-label">Age</label>
                                <input class="form-control" placeholder="Enter Age" type="number" name="age" onChange={handleAddPatientChange} required />

                            </div>


                        </div>
                        
                        <div class="row g-3 align-items-center">
                            <div class="col-md-5">
                                <label class="col-form-label">Email</label>
                                <input class="form-control" placeholder="Enter Email" type="email" name="email" onChange={handleAddPatientChange} required />

                            </div>
                            <div class="col-md-4">
                                <label class="col-form-label">Current Disease</label>
                                <input class="form-control" placeholder="Enter Current Disease" type="text" name="currentdisease" onChange={handleAddPatientChange} required />
                            </div>
                            <div class="col-md-3">
                                <label class="col-form-label">Gender</label>
                                <select class="form-select" name="Gender" onChange={handleAddPatientChange}>
                                    <option value="0">Select Your Gender</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>

                                </select>
                            </div>

                        </div>

                        <div class="row g-3 align-items-center">
                            <div class="col-md-12">
                                <label class="col-form-label">Doctor Name</label>
                                <input class="form-control" placeholder="Enter Doctor" name="doctorname" type="text"  onChange={handleAddPatientChange}/>
                            </div>
                            


                        </div>

                        {/* <div class="row align-items-center">
                            <div class="col-md-12">
                                <label class="col-form-label">Comments</label>
                                <input class="form-control" placeholder="Enter Comments" type="text" required onChange={e => setComments(e.target.value)} />
                            </div>
                        </div> */}
                        <input type="submit" className="btn prescriptionButton" id="searchbtn" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "20px" }} value="Add Patient"/>
                    </form>
                </div>
            </div>

                    <div className="container-fluid text-center">
                        <h1>All Patients</h1>
                    </div>
                    <div className="frame_nav d-flex justify-content-center">
                        <form className="d-flex" >
                            <input className="form-control me-2" type="search" placeholder="Search For Patient" aria-label="Search" id="searchfield" />
                            <button className="btn" id="searchbtn" type="submit">Search</button>
                        </form>


                    </div>
                <div className="container-fluid">
                <div className="row">
                <div className="col-12">
                    <form onSubmit={handleEditPatientSubmit}>
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
                                <th scope="col">UPDATE SURGERY</th>
                                <th scope="col">DELETE SURGERY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((resdata, index)=> (
                                <Fragment>
                                {editPatientID === resdata.patient_id ? (
                                    <EditPatienttableRow
                                    editPatient={editPatient}
                                    handleEditFormChange={handleEditPatientChange}
                                    handleCancelClick={handleCancelClick}
                                    resdata={resdata}
                                    handleEditFormSubmit={handleEditPatientSubmit}
                                    index={index}
                                    />
                                ) : (
                                    <PatientReadOnlyRow  index={index} resdata={resdata}
                                    handleEditClick={handleEditClick} handledeletePatient={handledeletePatient}/>
                                )}
                                </Fragment>
                            ))}
                        </tbody>
                        
                    </table>
                    </form>
                    </div>
                    </div>
                    </div>
            </section>

        </>


    );

}


export default Patient;