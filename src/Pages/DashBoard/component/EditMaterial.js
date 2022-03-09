import React from "react";

const EditMaterial = ({
  editMaterialData,
  handleEditMaterialChange,
  handleCancelClick,
  materialsedit,
}) => {
  return (
    <tr>
      <td>
         {materialsedit.material_id}
      </td>
      <td>
        <input
          className='form-control'
          type="text"
       
          name="materialname"
          value={editMaterialData.materialname}
          onChange={handleEditMaterialChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="text"
 
          name="usage"
          value={editMaterialData.usage}
          onChange={handleEditMaterialChange}
        ></input>
      </td>
      <td>
        <input
          className='form-control'
          type="text"

          name="price"
          value={editMaterialData.price}
          onChange={handleEditMaterialChange}
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

export default EditMaterial;
