import React from "react";
import "../Style/patient.css";
function SurgeryTable({ surgery ,index }) {
  return (
   
            <tr>

              <td>
                {index+1}
              </td>
              <td>{ surgery.surgery_name }</td>
              <td>{ surgery.surgery_price}</td>
              <td>{ surgery.surgery_description}</td>
              <td><a href="/updatematerial" className="btn " id="btn_material">Update</a> </td>
              <td><a href="#" className="btn " id="btn_material">Delete</a></td>
              

            </tr>

      
  );
}

export default SurgeryTable;