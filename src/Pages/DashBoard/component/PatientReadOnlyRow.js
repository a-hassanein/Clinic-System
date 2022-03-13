import React from "react";

const PatientReadOnlyRow = ({ index , resdata, handleEditClick, handledeletePatient }) => {
  return (
    <tr key={index}>
        <td>
                {index+1}
                </td>
        <td>{resdata.patient_name}</td>
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