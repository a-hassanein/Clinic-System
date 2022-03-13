import React, { useEffect,Fragment } from "react";
import "../../Style/patient.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import PatientTable from "../../Components/PatientTable";
import AddPatient from "../../Components/AddPatient";
import config from "../../actions/auth"
import PatientReadOnlyRow from "./component/PatientReadOnlyRow";
import EditPatienttableRow from "./component/EditPatienttableRow";
import "../../Style/assistant.css"
import axios from "axios";
function Patient() {
    const [patients, setPatients] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
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
    doctorname: 1,
    email: "",
    currentdisease: "",
    Gender: "",
});

const [editPatient, setEditPatient] = useState({
    fullname: "",
    phone: "",
    address: "",
    age: "",
    doctorname: 1,
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
      doctor: 1,
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
            doctor: 1,
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
        fullname: resdata.patient_name,    
        Gender: resdata.patient_gender,
        doctor: 1,    
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

        let fullname = document.getElementById('fullname').value;
        let phone = document.getElementById('phone').value;
        let address = document.getElementById('address').value;
        let age = document.getElementById('age').value;
        let email = document.getElementById('email').value;
        let currentdisease = document.getElementById('currentdisease').value;
        let Gender = document.getElementById('Gender').value;
        let err = document.getElementById('error')
        var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let flag=0
        for(let i=0 ; i< patients.length ; i++){
            if(phone==patients.patient_phone){
                flag =1
            }
        }

        if(fullname === null || fullname === ""){
            setErrorMessage("name is required")
            err.style.visibility = "visible"
        }else if(phone === null || phone === ""){
            setErrorMessage("mobile is required")
            err.style.visibility = "visible"
        }else if(isNaN(phone)){
            setErrorMessage("mobile should be a number not text")
            err.style.visibility = "visible"
        }else if(flag>0){
            setErrorMessage("mobile already exist")
            err.style.visibility = "visible"
        }else if(phone.length < 11){
            setErrorMessage("mobile digits should be 11")
            err.style.visibility = "visible"
        }else if(age === null || age ===""){
            setErrorMessage("age is required")
            err.style.visibility = "visible"
        }else if(isNaN(age)){
            setErrorMessage("age should be a number not text")
        }else if (address === "" || address === null){
            setErrorMessage("address is required")
            err.style.visibility = "visible"
        }else if(email === null || email === ""){
            setErrorMessage("email is required")
            err.style.visibility = "visible"
        }else if(!email.match(mailformat)){
            setErrorMessage("email should be example@exam.com")
            err.style.visibility = "visible"
        }else if(currentdisease === null || currentdisease === ""){
            setErrorMessage("currentdisease is required")
            err.style.visibility = "visible"
        }else if (Gender === null || Gender === ""){
            setErrorMessage("gender is required")
            err.style.visibility = "visible"
        }else {
  
      const newData = {
        patient_phone: addPatient.phone,
        doctor: 1,
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
            err.style.visibility = "hidden"  
            console.log(response.data)
          })
  
      }catch(error){
          console.log(error)
      }}
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
            <      div align="center" className="col-12 text-center" id="error" >
                  <span>{errorMessage}</span>
                  <br/>
                  </div>
                <div className="container-fluid">
                    <form onSubmit={handleAddPatientSubmit}>
                        <div className="row">
                            <h4><b>Add New Patient</b></h4>
                            <div className="col-md-6">
                                <label className="col-form-label">Full Name</label>
                                <input className="form-control" placeholder="Enter Full Name" type="text" name="fullname" id={"fullname"} onChange={handleAddPatientChange} required />
                            </div>
                            <div className="col-md-6">
                                <label className="col-form-label">Phone Number</label>
                                <input className="form-control" placeholder="Enter Phone Number " type="phonenumber" name="phone" id={"phone"} onChange={handleAddPatientChange} required />

                            </div>

                        </div>
                        <div className="row g-3 align-items-center">
                            <div className="col-md-8">
                                <label className="col-form-label">Address</label>
                                <input className="form-control" placeholder="Enter Address" type="text" name="address" id={"address"} onChange={handleAddPatientChange} required />
                            </div>
                            <div className="col-md-4">
                                <label className="col-form-label">Age</label>
                                <input className="form-control" placeholder="Enter Age" type="number" name="age" id={"age"} onChange={handleAddPatientChange} required />

                            </div>


                        </div>
                        
                        <div className="row g-3 align-items-center">
                            <div className="col-md-5">
                                <label className="col-form-label">Email</label>
                                <input className="form-control" placeholder="Enter Email" type="email" name="email" id={"email"} onChange={handleAddPatientChange} required />

                            </div>
                            <div className="col-md-4">
                                <label className="col-form-label">Current Disease</label>
                                <input className="form-control" placeholder="Enter Current Disease" type="text" name="currentdisease" id={"currentdisease"} onChange={handleAddPatientChange} required />
                            </div>
                            <div className="col-md-3">
                                <label className="col-form-label">Gender</label>
                                <select className="form-select" name="Gender" onChange={handleAddPatientChange} id={"Gender"}>
                                    <option value="0">Select Your Gender</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>

                                </select>
                            </div>

                        </div>

                        {/* <div className="row g-3 align-items-center">
                            <div className="col-md-12">
                                <label className="col-form-label">Doctor Name</label>
                                <input className="form-control" placeholder="Enter Doctor" name="doctorname" type="text"  onChange={handleAddPatientChange}/>
                            </div>
                        </div> */}

                        {/* <div className="row align-items-center"> 
                            <div className="col-md-12">
                                <label className="col-form-label">Comments</label>
                                <input className="form-control" placeholder="Enter Comments" type="text" required onChange={e => setComments(e.target.value)} />
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
                    <table className="table" id="table_container">
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
                                <Fragment key={index}>
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