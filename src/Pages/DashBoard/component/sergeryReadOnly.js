import React from "react";

const SurgeryReadOnlyRow = ({ index , resdata, handleEditClick, handledeleteSurgery }) => {
  return (
    <tr key={index}>
    <td>
            {index+1}
            </td>
    <td>{resdata.surgery_name}</td>
    <td>{resdata.surgery_price}</td>
    <td>{resdata.surgery_description}</td>
    <td><button  className="btn " id="btn_material" type="button" onClick={(event) => handleEditClick(event, resdata)}>Edit</button> </td>
    <td><button  className="btn " id="btn_material" onClick={() => handledeleteSurgery(resdata.surgery_id)}>Delete</button></td>
    </tr>
  );
};

export default SurgeryReadOnlyRow;