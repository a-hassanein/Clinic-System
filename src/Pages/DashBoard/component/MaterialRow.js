import React from "react";

const MaterialRow = ({ index , materialsedit, handleEditClick, handledeleteMaterial, material }) => {
  return (
    <tr key={index}>
    <td scope="row">{materialsedit.material_id}</td>
    <td>{materialsedit.material_name}</td>
    <td>{materialsedit.material_usage}</td>
    <td>{materialsedit.material_price}</td>
    <td><button  className="btn " id="btn_material" type="button" onClick={(event) => handleEditClick(event, materialsedit)}>Update</button> </td>
    <td><button  className="btn " id="btn_material" onClick={() => handledeleteMaterial(materialsedit.material_id)}>Delete</button></td>
    </tr>

  );
};

export default MaterialRow;
