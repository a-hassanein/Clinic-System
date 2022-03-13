import React from 'react'
// import Addmaterial from '../DashBoard/addmaterial';
import "../../Style/materials.css";

function Addmaterial() {
  return (

    <div id='addmaterial'>
        <center><h1 id="hhh">add your material</h1></center>
        <div className="container">
<div id="formm">
          <form>
    <div className="mb-3">
      <label for="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" />
    </div>
     <div className="mb-3">
      <label for="usage" className="form-label">Usage</label>
      <input type="text" className="form-control" id="usage" />
    </div>
     <div className="mb-3">
      <label for="summary" className="form-label">Summary</label>
      <input type="text" className="form-control" id="summary" />
    </div>
    
    <button id="btn_form_add" type="submit" className="btn btn-primary">Add Material</button>
    </form>
    </div>
    </div>
    </div>
    
  )
}

export default Addmaterial
