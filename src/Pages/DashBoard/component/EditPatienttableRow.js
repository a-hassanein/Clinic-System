import React from "react";

const EditPatienttableRow = ({
  editPatient,
  handleEditFormChange,
  handleCancelClick,
  resdata,
  index,
}) => {
  return (
    <tr key={index}>
        <td>
            {index+1}
            </td>
      <td>
        <input
          className='form-control'
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullname"
          value={editPatient.fullname}
          onChange={handleEditFormChange} 
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="phonenumber"
          required="required"
          placeholder="Enter phone..."
          name="phone"
          value={editPatient.phone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="email"
          required="required"
          placeholder="Enter email..."
          name="email"
          value={editPatient.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="number"
          required="required"
          placeholder="Enter age..."
          name="age"
          value={editPatient.age}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="number"
          required="required"
          placeholder="Enter doctor number..."
          name="doctorname"
          value={editPatient.doctorname}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="text"
          required="required"
          placeholder="Enter current disease..."
          name="currentdisease"
          value={editPatient.currentdisease}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit"  className="btn " id="btn_material">Save</button>
        
      </td>
      <td>
        <button type="button"  className="btn " id="btn_material" onClick={handleCancelClick}>
          Cancel
        </button>
        </td>
    </tr>
  );
};

export default EditPatienttableRow;