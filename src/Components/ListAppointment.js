import React from "react";
import "../Style/ListAppointment.css";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import {RiDeleteBin7Fill , RiDeleteBinLine} from 'react-icons/ri'
import {MdDeleteOutline} from "react-icons/md"
import {TiUserDeleteOutline} from "react-icons/ti"
const ListAppointment = (props) => {
  if (props.appointments.length === 0) {
    return (
      <ul className="list-group list-group-flush text-center container-fluid formPart">
        <li className="list-group-item h1 listclass">No Appointment Today</li>
      </ul>
    );
  }

  return (
   
    <ul className="list-group list-group-flush  container-fluid  formPartwithul">
      {props.appointments.map((appointment, index) => (
        <li
          className="list-group-item  h4 listpartli row"
          key={index}
        >
          <span className="badge-primary badge-pill spanflix col-1 ">
            {appointment.appointment_id}
          </span>
          <span className="checkup_type_app spanflix col-1 innerboxcheckup">{appointment.checkup_type}</span>
          <span className="spanflix col-1  innerboxName"> {appointment.patient_name} </span>

          <span className=" spanflix col-1  innerboxDate"> {appointment.appointment_date}</span>
          <span className="spanflix col-1  innerboxPhone">{appointment.patient_phone}</span>

          {/*  <span className="offset-1"> {appointment.patient_id} </span> */}
   <span className="spanflix col-2 offset-1 innerboxStatus">
         <span >
            <input
              className="input_checkbox"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={() => {
                props.completedAppointment(appointment.appointment_id);
              }}
            />
          </span>
          <span
          className="offset-1 innerbox"
           
            onClick={() => {
              props.deleteAppointment(appointment.appointment_id);
            }}
          >
            <a
              style={{
                border: "none",
                backgroundColor: "none",
                color: "#d46565",
                fontSize: "28px",
                marginLeft: "5px",
              }}
            >
              <MdDeleteOutline />
            
            </a>
          </span>
          </span>
        </li>
      ))}
            </ul>  
  

  
  );
};

export default ListAppointment;
