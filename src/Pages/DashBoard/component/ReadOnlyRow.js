import React from "react";

const ReadOnlyRow = ({ index , resdata, handleEditClick, deleteAssistant }) => {
  return (
    <tr key={index}>
    <td scope="row">{resdata.assistant_id}</td>
    <td>{resdata.assistant_name}</td>
    <td>{resdata.assistant_email}</td>
    <td>{resdata.assistant_pass}</td>
    <td>{resdata.assistant_number}</td>
    <td>{resdata.assistant_gender}</td>
    <td>{resdata.assistant_age}</td>
    <td>{resdata.assistant_address}</td>
    <td><button  className="btn " id="btn_material" type="button" onClick={(event) => handleEditClick(event, resdata)}>Edit</button> </td>
    <td><button  className="btn " id="btn_material" onClick={() => deleteAssistant(resdata.assistant_id)}>Delete</button></td>
    </tr>

  );
};

export default ReadOnlyRow;