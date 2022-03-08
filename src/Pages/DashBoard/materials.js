import React from 'react'
import Addmaterial from '../DashBoard/addmaterial';
import Updatematerial from '../DashBoard/updatematerial';
import MaterialTable from "../../Components/MaterialTable";
import axios from "axios";
import "../../Style/materials.css";
import { useState,useRef,useEffect } from "react";
import { useHistory } from 'react-router-dom';

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


//post 
    const [addMaterialData, setAddMaterialData] = useState({
        materialname: "",
        usage: "",
        price: "",
    });


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
                console.log(response.data)
            })

        }catch(error){
            console.log(error)
        }
      };

      console.log(materials)


      //delete
      const handledeleteMaterial = async (material_id) => {
        try {
          await axios.delete(`http://127.0.0.1:8000/materials/materials/${material_id}/`);
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

                <table class="table" id="table_container"> 
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">MATERIAL NAME </th>
                              <th scope="col">MATERIAL USAGE</th>
                              <th scope="col">MATERIAL PRICE</th>
                              <th scope="col">DELETE MATERIAL</th>
                              <th scope="col">UPDATE MATERIAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materials.map((material, index) => (

                                <MaterialTable material={material}  index={index} handledeleteMaterial={(material_id) =>{handledeleteMaterial(material.material_id)}}/>
                            )
                            )}
                        </tbody>
                    </table>




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
