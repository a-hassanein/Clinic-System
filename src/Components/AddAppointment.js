import React, { useState } from "react";
import CardAppointment from "./CardAppointment";
import classes from "../Style/AddAppointment.module.css";
import ButtonAppiontment from "./ButtonAppiontment";
const AddAppointment = (props) => {
  const [enteredPatient, setEnteredPatient] = useState("");
  const [enteredDate, setEntereddate] = useState("");

  const addAppointmentHandler = (event) => {
    event.preventDefault();
    if (enteredPatient.trim().length === 0 || enteredDate.trim().length === 0 ){ return;  }
    props.onAddAppointment(enteredPatient , enteredDate);
    setEnteredPatient("");
    setEntereddate("");
  };

  const patientHandler = (event) => {
    setEnteredPatient(event.target.value);
  };
  const dateHandler = (event) => {
    setEntereddate(event.target.value);
  };

  return (
    <>
      <CardAppointment className={classes.input}>
        <form onSubmit={addAppointmentHandler}>
          <label htmlFor="patient">Patient: </label>
          <input
            id="patient"
            type="text"
            value={enteredPatient}
            onChange={patientHandler}
          />
          <label htmlFor="time">Date: </label>
          <input
            id="time"
            type="datetime-local"
            value={enteredDate}
            onChange={dateHandler}
          />
          <ButtonAppiontment type="submit"> Add Appointment </ButtonAppiontment>
        </form>
      </CardAppointment>
    </>
  );
};

export default AddAppointment;
