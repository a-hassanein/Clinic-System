import React from "react";
import "../Style/ListAppointment.css";
import {MdDeleteOutline} from "react-icons/md"
import {FaRegCopy} from "react-icons/fa"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ListAppointment = (props) => {
  if (props.appointments.length === 0) {
    return (
      <ul className="list-group list-group-flush text-center container-fluid formPart">
        <li className="list-group-item h1 listclass">You Don't Have Any Apopointment Yet!  </li>
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
          <span className="badge-info badge-pill spanflix col-1 innerId" >
            {appointment.appointment_id}
          </span>
          <CopyToClipboard text={appointment.appointment_id}>
          <a
              style={{
                border: "none",
                backgroundColor: "none",
                color: "var(--first_color)",
                fontSize: "28px",
                marginLeft: "5px",
              }}
            >
              <FaRegCopy/>
            
            </a>
            </CopyToClipboard>
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
              checked = {appointment.completed}
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
                color: "#528298", 
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
