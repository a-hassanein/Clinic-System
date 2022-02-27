import React from "react";
import '../Style/ListAppointment.css'

const ListAppointment = (props) => {
  if (props.appointments.length === 0) {
    return (
    
      <ul className="list-group list-group-flush text-center container-fluid formPart" >
        <li className="list-group-item h1 listclass">No Appointment Today</li>
        </ul>
    
    );
  }
  return (
   
      <ul className="list-group list-group-flush text-center container-fluid formPart">
        {props.appointments.map((appointment) => (
          <li className="list-group-item h1 listclass">
            {" "}
            {appointment.patient} {appointment.date} {appointment.phone}{" "}
            {appointment.checkup}
            <button>Done</button>{" "}
          </li>
        ))}
      </ul>
  
  );
};

export default ListAppointment;
