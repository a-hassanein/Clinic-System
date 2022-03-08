import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  resdata,
}) => {
  return (
    <tr>
      <td>
         {resdata.assistant_id}
      </td>
      <td>
        <input
          className='form-control'
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="text"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="password"
          required="required"
          placeholder="Enter a password..."
          name="pass"
          value={editFormData.pass}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="text"
          required="required"
          placeholder="Enter a mobile number..."
          name="mobile"
          value={editFormData.mobile}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
            <select class="custom-select" id="inputGroupSelect01" name="gender"  onChange={handleEditFormChange} >
                    <option value={resdata.assistant_gender}>{resdata.assistant_gender}</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
      </td>
      
      <td>
        <input
          className='form-control'
          type="text"
          required="required"
          placeholder="Enter a age..."
          name="age"
          value={editFormData.age}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="text"
          required="required"
          placeholder="Enter a address..."
          name="address"
          value={editFormData.address}
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

export default EditableRow;