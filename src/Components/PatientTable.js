import React from "react";
import "../Style/patient.css";
function PatientTable({ patient ,index }) {
  return (
   
            <tr>

              <td>
                {index+1}
              </td>
              <td>{ patient.patient_name }</td>
              <td>{ patient.patient_phone}</td>
              <td>{ patient.patient_email}</td>
              <td>{ patient.patient_age}</td>
              <td>{ patient.doctor}</td>
              <td>{ patient.current_disease}</td>
              <td>@mdo</td>

            </tr>

      
  );
}

export default PatientTable;
