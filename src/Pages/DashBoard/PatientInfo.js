import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PatientInfo = (props) => {
    const [patientInfo, setPatientInfo] = useState([])
    const [myAppoiontment, setmyAppoiontment] = useState([])
    const [saveFormData, setSaveFormData] = useState({
        fullname: "",
        phone: "",
        address: "",
        age: "",
        doctorname: 1,
        email: "",
        currentdisease: "",
        Gender: "",
    });
    const getPatientInfo = async () => {
        try {
            const response = await axios.get(`/patient/info/${props.match.params.id}`)
            const { data } = response
            console.log(data)
            setPatientInfo(data)
            setSaveFormData({
                fullname: data.patient_name,
                phone: data.patient_phone,
                address: data.patient_address,
                age: data.patient_age,
                doctorname: 1,
                email: data.patient_email,
                currentdisease: data.current_disease,
                Gender: data.patient_gender,
            })
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getPatientInfo()
    }, [])

    const getMyAppointment = async () => {
        try {
            const response = await axios.get(`/patient/myappointment/${props.match.params.id}`)
            const { data } = response
            console.log(data)
            setmyAppoiontment(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getMyAppointment()
  }, [])

    const [errorMessage, setErrorMessage] = useState('');

    function disabledFieldset() {
        document.getElementById('pet').disabled = !document.getElementById('pet').disabled;
    }

    const handleSaveFormChange = (event) => {
        event.preventDefault();

        const name = event.target.getAttribute("name");
        const value = event.target.value;

        const newFormData = { ...saveFormData };
        newFormData[name] = value;

        setSaveFormData(newFormData);
    };


    const handleSaveFormSubmit = () => {

        let fullname = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let address = document.getElementById('address').value;
        let age = document.getElementById('age').value;
        let email = document.getElementById('email').value;
        let currentdisease = document.getElementById('currentdisease').value;
        let Gender = document.getElementById('Gender').value;
        let err = document.getElementById('error')
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (fullname === null || fullname === "") {
            setErrorMessage("name is required")
            err.style.visibility = "visible"
        } else if (phone === null || phone === "") {
            setErrorMessage("mobile is required")
            err.style.visibility = "visible"
        } else if (isNaN(phone)) {
            setErrorMessage("mobile should be a number not text")
            err.style.visibility = "visible"
        } else if (phone.length < 11 || phone.length > 11) {
            setErrorMessage("mobile digits should be 11")
            err.style.visibility = "visible"
        } else if (email === null || email === "") {
            setErrorMessage("email is required")
            err.style.visibility = "visible"
        } else if (!email.match(mailformat)) {
            setErrorMessage("email should be example@exam.com")
            err.style.visibility = "visible"
        } else if (currentdisease === null || currentdisease === "") {
            setErrorMessage("currentdisease is required")
            err.style.visibility = "visible"
        } else if (Gender === null || Gender === "") {
            setErrorMessage("Gender is required")
            err.style.visibility = "visible"
        } else if (age === null || age === "") {
            setErrorMessage("currentdisease is required")
            err.style.visibility = "visible"
        } else if (isNaN(age)) {
            setErrorMessage("age must a number")
            err.style.visibility = "visible"
        } else if (address === null || address === "") {
            setErrorMessage("address is required")
            err.style.visibility = "visible"
        }
        else {


            try {
                axios.put(`/patient/patient/${props.match.params.id}/`, {
                    patient_name: saveFormData.fullname,
                    patient_phone: saveFormData.phone,
                    patient_email: saveFormData.email,
                    patient_age: saveFormData.age,
                    current_disease: saveFormData.currentdisease,
                    patient_address: saveFormData.address,
                    patient_gender: saveFormData.Gender,
                    doctor:1,

                }).then((response) => {
                    getPatientInfo()
                    document.getElementById('pet').disabled = true;
                    err.style.visibility = "hidden"
                    console.log(response.data)
                })

            } catch (error) {
                console.log(error)
            }

        }}
        return (
            <>
                <section className='home-section' style={{ marginTop: '20px' }} >
                    <div className="container-fluid text-center" >
                        <h1>Patient Info</h1>
                    </div>
                    {/* <h1>Hello Patient {props.match.params.id} </h1> */}
                    <div className='container-fluid formPart' >
                        <div align="center" className="col-12 text-center" id="error" style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <span>{errorMessage}</span>
                            <br />
                        </div>
                        <center><h2 id="h2t" style={{ marginBottom: "50px", marginTop: "-30px", fontSize: "1.6em" }}>Basic Info</h2></center>
                        <fieldset disabled id="pet">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label">Full Name</label>
                                    <input type='text' className='form-control' id={'name'} name="fullname" defaultValue={patientInfo.patient_name} onChange={handleSaveFormChange} />
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label">Mobile Phone</label>
                                    <input type='text' className='form-control' id={'phone'} name="phone" defaultValue={patientInfo.patient_phone} onChange={handleSaveFormChange} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label">Email</label>
                                    <input type='text' className='form-control' id={'email'} name="email" defaultValue={patientInfo.patient_email} onChange={handleSaveFormChange} />
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label">Gender</label>
                                    <select className="form-select" name="Gender" defaultValue={patientInfo.patient_gender} id={'Gender'} onChange={handleSaveFormChange}>
                                        <option value={patientInfo.patient_gender}>{patientInfo.patient_gender}</option>
                                        <option value="female">Male</option>
                                        <option value="male">Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <label className="form-label">Address</label>
                                    <textarea className="form-control" id={'address'} name="address" defaultValue={patientInfo.patient_address} onChange={handleSaveFormChange} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label">Current Disease</label>
                                    <input type='text' className="form-control" id={'currentdisease'} name="currentdisease" defaultValue={patientInfo.current_disease} onChange={handleSaveFormChange} />
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label">Age</label>
                                    <input type='text' className="form-control" id={'age'} name="age" defaultValue={patientInfo.patient_age} onChange={handleSaveFormChange} />
                                </div>
                            </div>
                        </fieldset>
                        <div className="row text-center">
                            <div className="col-lg-12" style={{ marginTop: "30px" }}>
                                <button className="btn prescriptionButton" onClick={disabledFieldset}>Edit</button>
                                <span> </span>
                                <button className="btn prescriptionButton" onClick={handleSaveFormSubmit}>Save</button>
                            </div>
                        </div>

                    </div>

                    <div className='container-fluid formPart' >
                    <center><h2 id="h2t" style={{ marginBottom: "50px", marginTop: "10px", fontSize: "1.6em" }}>Patient History</h2></center>
                    <div class="list-group text-center">
                    {myAppoiontment.map((resdata, index)=> (
                        <Link to={`/dashboard/patient/patientinfo/${props.match.params.id}/patienthistory/${resdata.appointment_id}`} class="list-group-item d-flex justify-content-between align-items-center" style={{fontSize:"2.5em",color:"#528298",fontWeight:"bold",textDecoration:"none",padding:"20px"}}>{resdata.appointment_date}<span class="badge pill" style={{backgroundColor:"#528298"}}>{index+1}</span></Link>
                    ))}
                    </div>

                    </div>
                </section>
            </>
        )
    }
    export default PatientInfo; 