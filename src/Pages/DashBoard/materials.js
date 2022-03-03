import React from 'react'
import Addmaterial from '../DashBoard/addmaterial';
import Updatematerial from '../DashBoard/updatematerial';
import "../../Style/materials.css";
import { useState,useRef } from "react";

function Materials() {
  return (
    <section className="home-section">
    {/* <div id='materials'> */}
      <center><h1 style={{ marginTop: '20px' }}>Your Materials</h1></center>

      <div className='container-fluid formPart' >
                    <form >
                        
                        <div className="row">
                            <div className="col-lg-12">
					<center><h2 id="h2t">New Material</h2></center>
                                <label className="form-label">Material Name</label>
                                <input type='text' className='form-control' name="materialname"  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Usage</label>
                                <input type='text' className="form-control" name="usage"  />
                            </div>
                            
                            <div className="col-lg-6">
                                <label className="form-label">Price</label>
                                <input type='text' className="form-control"/>
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
                            <th scope="col">ID</th>
                            <th scope="col">MATERIAL NAME </th>
                            <th scope="col">USAGE</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">DELETE</th>
                            <th scope="col">UPDATE</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Amalgam gun</td>
                            <td>For dentals</td>
                            <td>50 EGP</td>
                            <td><a href="#" className="btn " id="btn_material">Delete</a></td>
                            <td><a href="/updatematerial" className="btn " id="btn_material">Update</a> </td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Amalgam burnisher</td>
                            <td>For dentals</td>
                            <td>90 EGP</td>
                            <td><a href="#" className="btn " id="btn_material">Delete</a></td>
                            <td><a href="/updatematerial" className="btn " id="btn_material">Update</a> </td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Rubber dam clamp</td>
                           <td>For dentals</td>
                            <td>150 EGP</td>
                            <td><a href="#" className="btn " id="btn_material">Delete</a></td>
                            <td><a href="/updatematerial" className="btn " id="btn_material">Update</a></td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Crown remover</td>
                            <td>For dentals</td>
                            <td>75 EGP</td>
                            <td><a href="#" className="btn " id="btn_material">Delete</a></td>
                            <td><a href="/updatematerial" className="btn " id="btn_material">Update</a></td>

                        </tr>
 			<tr>
                            <th scope="row">5</th>
                            <td>Cement spatula</td>
                            <td>For dentals</td>
                            <td>100 EGP</td>
                            <td><a href="#" className="btn " id="btn_material">Delete</a></td>
                            <td><a href="/updatematerial" className="btn " id="btn_material">Update</a></td>

                        </tr>
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
