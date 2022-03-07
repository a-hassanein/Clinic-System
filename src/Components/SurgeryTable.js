import React from "react";
import "../Style/patient.css";
function SurgeryTable({ surgery ,index, handledeleteSurgery }) {
  return (
   
            <tr>

              <td>
                {index+1}
              </td>
              <td>{ surgery.surgery_name }</td>
              <td>{ surgery.surgery_price}</td>
              <td>{ surgery.surgery_description}</td>
              <td><a href="/updatematerial" className="btn " id="btn_material">Update</a> </td>
              <td><span onClick={handledeleteSurgery}><a className="btn " id="btn_material">Delete</a></span></td>
              

            </tr>

      
  );
}

export default SurgeryTable;