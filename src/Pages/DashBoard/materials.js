import React from 'react'
import Addmaterial from '../DashBoard/addmaterial';
import Updatematerial from '../DashBoard/updatematerial';
import MaterialTable from "../../Components/MaterialTable";
import axios from "axios";
import "../../Style/materials.css";
import { useState,useRef,useEffect, Fragment } from "react";
import { useHistory } from 'react-router-dom';
import EditMaterial from "./component/EditMaterial";
import MaterialRow from "./component/MaterialRow";


function Materials() {

  const [materials, setMaterials] = useState([])
  const getMaterials = async () => {
      try {
          const response = await axios.get('/materials/materials/')
          const { data } = response
          console.log(data)
          setMaterials(data)
      } catch (err) {
          console.log(err)
      }
  }
  useEffect(() => {
    getMaterials()
}, [])


    const [addMaterialData, setAddMaterialData] = useState({
        materialname: "",
        usage: "",
        price: "",
    });

    const [editMaterialData, setEditMaterialData] = useState({
      materialname: "",
      usage: "",
      price: "",
    });
  
    const [editDataId, setEditDataId] = useState(null);

    const handleEditMaterialChange = (event) => {
      event.preventDefault();
  
      const name = event.target.getAttribute("name");
      const value = event.target.value;
  
      const newMaterialData = { ...editMaterialData };
      newMaterialData[name] = value;
  
      setEditMaterialData(newMaterialData);
    };

    const handleAddMaterialChange = (event) => {
        event.preventDefault();
    
        const name = event.target.getAttribute("name");
        const value = event.target.value;
    
        const newMaterialData = { ...addMaterialData };
        newMaterialData[name] = value;
    
        setAddMaterialData(newMaterialData);
      };


      const handleAddMaterialSubmit = (event) => {
        event.preventDefault();
    
        const newData = {
          material_name: addMaterialData.materialname,
          material_usage: addMaterialData.usage,
          material_price: addMaterialData.price,      
        };

        const newDatas = [...materials, newData];
      
        setMaterials(newDatas);

        try{
            axios.post('/materials/materials/', newData).then((response)=>{
              getMaterials();  
              console.log(response.data)
            })
        }catch(error){
            console.log(error)
        }
      };


      const handleEditClick = (event , materialsedit) => {
        event.preventDefault();
        setEditDataId(materialsedit.material_id);
    
        const formValues = {
          materialname: materialsedit.material_name,
          usage: materialsedit.material_usage,
          price: materialsedit.material_price,
        };

        console.log(formValues)
    
        setEditMaterialData(formValues);
      };


      const handleEditMaterialSubmit = (event) => {
        event.preventDefault();

        try{
            axios.put(`/materials/materials/${editDataId}/` ,  {
              material_name: editMaterialData.materialname,
              material_usage: editMaterialData.usage,
              material_price: editMaterialData.price, 
              }).then((response)=>{
                getMaterials()
                console.log(response.materials)
            })

        }catch(error){
            console.log(error)
        }
        setEditDataId(null);
      };

      const handleCancelClick = () => {
        setEditDataId(null);
      };


      const handledeleteMaterial = async (material_id) => {
        try {
          await axios.delete(`/materials/materials/${material_id}/`);
          getMaterials();
        } catch (error) {
          console.log(error);
        }
      };
    
      console.log(materials)

  return (
    <section className="home-section">
    {/* <div id='materials'> */}
      <center><h1 style={{ marginTop: '20px' }}>Your Materials</h1></center>

      <div className='container-fluid formPart' >
                    <form  onSubmit={handleAddMaterialSubmit}>
                        
                        <div className="row">
                            <div className="col-lg-12">
					<center><h2 id="h2t">New Material</h2></center>
                                <label className="form-label">Material Name</label>
                                <input type='text' className='form-control' name="materialname" onChange={handleAddMaterialChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Usage</label>
                                <input type='text' className="form-control" name="usage" onChange={handleAddMaterialChange} />
                            </div>
                            
                            <div className="col-lg-6">
                                <label className="form-label">Price</label>
                                <input type='text' className="form-control" name="price" onChange={handleAddMaterialChange} />
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"15px"}}>
                                <input type="submit" className="btn materialButton" value="ADD"/>
                            </div>
                        </div>
                    </form>

                </div>
                <form onSubmit={handleEditMaterialSubmit} > 
                <table class="table" id="table_container"> 
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">MATERIAL NAME </th>
                              <th scope="col">MATERIAL USAGE</th>
                              <th scope="col">MATERIAL PRICE</th>
                              <th scope="col">UPDATE MATERIAL</th>
                              <th scope="col">DELETE MATERIAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {materials.map((material, index) => (

                                <MaterialTable material={material}  index={index} handledeleteMaterial={() =>{handledeleteMaterial(material.material_id)}}/>
                            )
                            )} */}

                                {materials.map((materialsedit, index,material)=> (
                                <Fragment>
                                {editDataId === materialsedit.material_id ? (
                                    <EditMaterial
                                    editMaterialData={editMaterialData}
                                    handleEditMaterialChange={handleEditMaterialChange}
                                    handleCancelClick={handleCancelClick}
                                    materialsedit={materialsedit}
                                    handleEditMaterialSubmit={handleEditMaterialSubmit}
                                    />
                                ) : (
                                    <MaterialRow  index={index} materialsedit={materialsedit} material={material}
                                    handleEditClick={handleEditClick} handledeleteMaterial={handledeleteMaterial}/>
                                )}
                                </Fragment>
            ))}
                        </tbody>
                    </table>
                    </form>




{/* 
      <div className="container">
        <div className="row">
          <div className='services_all'>
            <div className="row">
              <div className="col-sm-4" id="c1">
                <div className="card " id="cc" style={{ border: "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <div>
                    </div>

                    <h3 className="card-title " >MATERIAL 1</h3>
                    <hr />
                    <p className="card-text ">
                    Useage: for dentel 
                    <br/>
                    Price: 50 EGP 
                    <p>Summary: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    </p>
                    <a href="#" className="btn " id="btn_services">show details</a> 
                    <a href="#" className="btn " id="btn_services">Delete</a>
                    <a href="/updatematerial" className="btn " id="btn_services">Update</a> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    
    </section>
  )
}

export default Materials
