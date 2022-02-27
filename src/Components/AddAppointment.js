import React, { useState } from "react";


import "../Style/prescription.css";
const AddAppointment = (props) => {
  const [enteredPatient, setEnteredPatient] = useState("");
  const [enteredDate, setEntereddate] = useState("");
  const [enteredPhone, setEnteredphone] = useState("");
  const [enteredCheckup, setEnteredCheckup] = useState("");

  const addAppointmentHandler = (event) => {
    event.preventDefault();
    if (
      enteredPatient.trim().length === 0 ||
      enteredDate.trim().length === 0 ||
      enteredPhone.trim().length === 0 ||
      enteredCheckup.trim().length === 0
    ) {
      return;
    }
    props.onAddAppointment(
      enteredPatient,
      enteredDate,
      enteredPhone,
      enteredCheckup
    );
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
                value={enteredPatient}
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
                value={enteredPhone}
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
                value={enteredCheckup}
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
            value={enteredDate}
            onChange={dateHandler}
            className="form-control"
          />
          </div>
          </div>
          <div className="row text-center">
          <div className="col-lg-12" style={{marginTop:"30px"}}>
          <input type="submit" className="btn prescriptionButton" value="Add Appointment"/> 
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAppointment;
