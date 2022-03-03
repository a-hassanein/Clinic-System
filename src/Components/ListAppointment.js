import React from "react";
import "../Style/ListAppointment.css";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";

const ListAppointment = (props) => {
  if (props.appointments.length === 0) {
    return (
      <ul className="list-group list-group-flush text-center container-fluid formPart">
        <li className="list-group-item h1 listclass">No Appointment Today</li>
      </ul>
    );
  }


  return (
    <ul className="list-group list-group-flush  container-fluid  formPartwith list-group-numbered" >
      {props.appointments.map((appointment , index) => (
        <li className="list-group-item  h4 formPartwith row">
          <span className="col-2 "> {appointment.patient} </span>
          <span className="col-3 offset-1"> {appointment.date} </span>
          <span className="col-2 offset-1">{appointment.phone} </span>
          <sapn className="rounded-pill col-2 offset-1"> {appointment.checkup} </sapn>
          <span >
          <a
                    style={{
                      border: "none",
                      backgroundColor: "none",
                      color: "var(--first_color)",
                      fontSize: "28px",
                      marginLeft: "5px",
                    }}
                   
                  >
                    <HiMinusCircle></HiMinusCircle>
                  </a>
          </span>
          <input
            className="form-check-input col-2 offset-2"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />

        </li>
      ))}
    </ul>
  );
};

export default ListAppointment;
