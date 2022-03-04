import React, { useState } from "react";


import "../Style/prescription.css";
const AddAppointment = (props) => {
  const [patient_name, setEnteredPatient] = useState("");
  const [appointment_date, setEntereddate] = useState("");
  const [patient_phone, setEnteredphone] = useState("");
  const [checkup_type, setEnteredCheckup] = useState("");

  const addAppointmentHandler = (event) => {
    event.preventDefault();
    if (
      patient_name.trim().length === 0 ||
      appointment_date.trim().length === 0 ||
      patient_phone.trim().length === 0 ||
      checkup_type.trim().length === 0
    ) {
      return;
    }
     props.addAppointment({
      patient_name ,
      appointment_date , 
      patient_phone ,
      checkup_type,
       completed: false ,
     });
    setEnteredPatient("");
    setEntereddate("");
    setEnteredphone("");
    setEnteredCheckup("");
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

  return (
    <>
      <div className="container-fluid formPart">
        <form onSubmit={addAppointmentHandler}>
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
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="phone" className="form-label">
                Phone:{" "}
              </label>
              <input
                id="patient"
                type="tel"
                value={patient_phone}
                onChange={phoneHandler}
                className="form-control"
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
              >
                <option>Choose</option>
                <option value="examination">Examination</option>
                <option value="re-examination">Re-Examination</option>
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
          />
          </div>
          </div>
          <div className="row text-center">
          <div className="col-lg-12" style={{marginTop:"30px"}}>
          <input type="submit" className="btn prescriptionButton" value="Add Appointment" onClick={addAppointmentHandler}/> 
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAppointment;
