import React from "react";

const EdiSurgerytableRow = ({
  editSurgeryData,
  handleEditFormChange,
  handleCancelClick,
  resdata,
  index,
}) => {
  return (
    <tr>
        <td>
            {index+1}
            </td>
      <td>
        <input
          className='form-control'
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="surgery"
          value={editSurgeryData.surgery}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="text"
          required="required"
          placeholder="Enter an price..."
          name="price"
          value={editSurgeryData.price}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="text"
          required="required"
          placeholder="Enter a description..."
          name="surgery_description"
          value={editSurgeryData.surgery_description}
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

export default EdiSurgerytableRow;