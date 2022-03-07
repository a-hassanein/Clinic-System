import React from "react";
import "../Style/patient.css";
function MaterialTable({ material ,index ,handledeleteMaterial}) {
  return (

            <tr>

              <td>
                {index+1}
              </td>
              <td>{ material.material_name }</td>
              <td>{ material.material_price}</td>
              <td>{ material.material_usage}</td>
              <td><a href="/updatematerial" className="btn " id="btn_material">Update</a> </td> 
              {/* <td><a href="#" className="btn " id="btn_material">Delete</a></td> */}
              <td><span onClick={handledeleteMaterial}><a className="btn " id="btn_material">Delete</a></span></td>


            </tr>


  );
}

export default MaterialTable;
