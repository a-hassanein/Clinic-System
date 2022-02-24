import React from "react";
import CardAppointment from "./CardAppointment";
import classes from "../Style/AddAppointment.module.css";
const ListAppointment = (props) => {
    if (props.appointments.length === 0 ){
        return (
            <CardAppointment  className={classes.input}>
                <h2>No Appointment today</h2>
            </CardAppointment>
        )
    }
  return (
    
  <CardAppointment  className={classes.input}>
      
    <ul>
      {props.appointments.map((appointment) => (
       <li> {appointment.patient} {appointment.date}  <button>Done</button> </li>
       
       
      ))}
    </ul>
    </CardAppointment>
  );  
};

export default ListAppointment;
