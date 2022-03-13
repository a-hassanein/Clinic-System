import React from "react";
import { Link } from "react-router-dom";

const PatientReadOnlyRow = ({ index , resdata, handleEditClick, handledeletePatient }) => {
  return (
    
    <tr >
        <td>
          {resdata.patient_id}
        </td>
        <Link to={`/dashboard/patient/patientinfo/${resdata.patient_id}`} style={{textDecoration:"none",color:"#000"}}>
        <td>{resdata.patient_name}</td>
        </Link>
        <td>{resdata.patient_phone}</td>
        <td>{resdata.patient_email}</td>
        <td>{resdata.patient_age}</td>
        <td>{resdata.doctor}</td>
        <td>{resdata.current_disease}</td>
        <td><button  className="btn " id="btn_material" type="button" onClick={(event) => handleEditClick(event, resdata)}>Edit</button> </td>
        <td><button  className="btn " id="btn_material" onClick={() => handledeletePatient(resdata.patient_id)}>Delete</button></td>
    </tr>
    
  );
};

export default PatientReadOnlyRow; 