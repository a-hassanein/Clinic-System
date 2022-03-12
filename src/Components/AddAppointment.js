import React, { useState } from "react";


import "../Style/AddAppointment.css";
const AddAppointment = (props) => {
  const [patient_name, setEnteredPatient] = useState("");
  const [appointment_date, setEntereddate] = useState("");
  const [patient_phone, setEnteredphone] = useState("");
  const [checkup_type, setEnteredCheckup] = useState("");
  const [patient_id , setPatientID] = useState("");
 // const [completed , setCompleted] = useState(false);
   
  const [errorMessage , setErrorMessage] = useState('');

  const addAppointmentHandler = (event) => {
    event.preventDefault();
    let patient = document.getElementById('patient').value;
    let patientID = document.getElementById('patientID').value;
    let phone = document.getElementById('phone').value;
    let checkup = document.getElementById('checkup').value;
    let time = document.getElementById('time').value;
    let err = document.getElementById('error') 
  //  let date = new Date()

    if(patient == null || patient == ""){
       setErrorMessage('Patient name is required')
       err.style.visibility = 'visible'
    }else if (patientID == null || patientID == ""){
       setErrorMessage('Patient ID is required')
       err.style.visibility = 'visible'
    }else if (isNaN(patientID ) ){
      setErrorMessage('Patient ID must be number not text')
      err.style.visibility = 'visible'
    }else if (phone == null || phone =="" ){
      setErrorMessage('Phone is required')
      err.style.visibility = 'visible'
    }else if (isNaN(phone)){
      setErrorMessage('Phone must be number not text')
      err.style.visibility = 'visible'
    }else if (phone < 11){
      setErrorMessage("Phone digits must be more than 11")
      err.style.visibility = "visible"
    }/*else if (checkup == null || checkup == "" ){
      setErrorMessage('Check up name is required')
      err.style.visibility = 'visible'
    }*/
    else if (checkup == "Choose"  ){
      setErrorMessage('Check up name ')
      err.style.visibility = 'visible'

    }
    else if (time == null || time == '' ){
      setErrorMessage('Time is required')
      err.style.visibility = 'visible'

    }
    else if (err.value == null || err.value =="" ){
      setErrorMessage("")
      err.style.visibility = "hidden"
    }
    
     

    

    if (
      patient_name.trim().length === 0 ||
      appointment_date.trim().length === 0 ||
      patient_phone.trim().length === 0 ||
      checkup_type.trim().length === 0 ||
      patient_id.trim().length === 0
    ) {
      return;
    }
     props.addAppointment({
      patient_name ,
      appointment_date , 
      patient_phone ,
      checkup_type,
      patient_id,
      completed : false ,
     });
    setEnteredPatient("");
    setEntereddate("");
    setEnteredphone("");
    setEnteredCheckup("");
    setPatientID("");
    setErrorMessage("");
  };

  const patientHandler = (event) => {
    setEnteredPatient(event.target.value);
  };
  const dateHandler = (event) => {
    setEntereddate(event.target.value);
  };
  const phoneHandler = (event) => {
    setEnteredphone(event.target.value);
  };
  const checkupHandler = (event) => {
    setEnteredCheckup(event.target.value);
  };
  const patientIDHandler = (event) =>{
    setPatientID(event.target.value)

  }

  return (
    <>
      <div className="container-fluid formPart  ">
      <div align="center" id="error">
                  <span>{errorMessage}</span>
                  <br/>
                  </div> 
        <form  className="card-body">
          <div className="row">
            <div className="col">
              <label htmlFor="patient" className="form-label">
                Patient:{" "}
              </label>
              <input
                id="patient"
                type="text"
                value={patient_name}
                onChange={patientHandler}
                className="form-control"
                pattern="[A-Za-z]"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="patientID" className="form-label">
                Patient ID:{" "}
              </label>
              <input
                id="patientID"
                type="text"
                value={patient_id}
                onChange={patientIDHandler}
                className="form-control"
                pattern="[0-9]"
                required

              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="phone" className="form-label">
                Phone:{" "}
              </label>
              <input
                id="phone"
                type="tel"
                value={patient_phone}
                onChange={phoneHandler}
                className="form-control"
                pattern="[0-9]"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="checkup" className="form-label">
                Check Up:{" "}
              </label>
              <select
                name="checkup"
                id="checkup"
                value={ checkup_type}
                onChange={checkupHandler}
                className="form-select"
                required
              >
                <option value="Choose">Choose</option>
                <option value="Examination">Examination</option>
                <option value="Re-Examination">Re-Examination</option>
                <option value="Surgery">Surgery</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
          <label htmlFor="time" className="form-label">Date: </label>
          <input
            id="time"
            type="datetime-local"
            value={appointment_date}
            onChange={dateHandler}
            className="form-control"
            required
          />
          </div>
          </div>
          <div className="row text-center">
          <div className="col-lg-12" style={{marginTop:"30px"}}>
          <input type="submit" className="btn AppointmentButton" value="Add Appointment" onClick={addAppointmentHandler}/> 
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAppointment;
