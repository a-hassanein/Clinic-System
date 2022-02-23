import React from "react";

const AddAppointment = props => {
    const addAppointmentHandler = (event) =>{
        event.preventDefault();
    }
   return(
       <>
    <form onSubmit={addAppointmentHandler}>
        <label htmlFor="patient">Patient: </label>
        <input id="patient" type="text"/> <br/>
        <label htmlFor="time" >Date: </label>
        <input id="time" type="date" /> <br/>
        <button type="submit" > Add Appointment </button>
    </form>
    </>
   )

}

export default AddAppointment;