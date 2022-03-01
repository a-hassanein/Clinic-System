// import "../../Style/dashpage.css";
import { useState,useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import {Link} from "react-router-dom";
import {
  HiPlusCircle,
  HiMinusCircle
} from "react-icons/hi";


const Surgery = () => {

  const[inputFields, setInputfields] =  useState([
    { activity:'',price:'' },
  ])

const componentRef = useRef()
const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


const handleChangeInput = (index, event) => {
  // console.log(index, event.target.name)
  const values = [...inputFields];
  values[index][event.target.name] = event.target.value;
  setInputfields(values); 
}

const handlesubmit = (e) => {
    e.preventDefault()
    console.log("inputFields", inputFields); 
}

const handleAddFields = () =>{
  setInputfields([...inputFields, { activity:'',price:'' }])
}

const handleRemoveFields = (index) => {
  const values = [...inputFields];
  values.splice(index, 1);
  setInputfields(values);
}
    return (
      <>
        <div className="home-section">
        <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                    <h1>Surgery</h1>
        </div>

        <div className='container-fluid formPart' >
          <form method="post" onSubmit={(e) => {handlesubmit(e)}}>

          { inputFields.map((inputField, index) => (
            <div className="row" key={index}>
              <div className="col-lg-6">
                  <label className="form-label">Surgery Name</label>
                  <input type='text' className='form-control' name="activity" value={inputField.surgery} onChange={event => handleChangeInput(index, event)}/>
              </div>
              <div className="col-lg-6">
                  <label className="form-label">Price</label>
                  <input type='text' className='form-control' name="price" value={inputField.price} onChange={event => handleChangeInput(index, event)}/>
              </div>
            </div>
          ))}

          <div className="row">
                  <div className="col-lg-12">
                      <label className="form-label">Description</label>
                      <textarea type='text' className='form-control' name="appointment_id"  />
                  </div>
          </div>

          <div className="row text-center">
              <div className="col-lg-12" style={{marginTop:"30px"}}>
                  <input type="submit" className="btn prescriptionButton" value="submit" onClick={handlesubmit}/>
              </div>
          </div>
          </form>
        </div>

        <div className="frame_nav d-flex justify-content-center">
                    <form className="d-flex" >
                        <input className="form-control me-2" type="search" placeholder="Search For Patient" aria-label="Search" id="searchfield" />
                        <button className="btn" id="searchbtn" type="submit">Search</button>
                    </form>
        </div>
        
        <table class="table" id="table_container">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">MATERIAL NAME </th>
                            <th scope="col">USAGE</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">SUMMARY</th>
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
                            <td>This for dental fillings</td>
                            <td><a href="#" className="btn " id="btn_material">Delete</a></td>
                            <td><a href="/updatematerial" className="btn " id="btn_material">Update</a> </td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Amalgam burnisher</td>
                            <td>For dentals</td>
                            <td>90 EGP</td>
                            <td>This for dental fillings</td>
                            <td><a href="#" className="btn " id="btn_material">Delete</a></td>
                            <td><a href="/updatematerial" className="btn " id="btn_material">Update</a> </td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Rubber dam clamp</td>
                           <td>For dentals</td>
                            <td>150 EGP</td>
                            <td>This for dental fillings</td>
                            <td><a href="#" className="btn " id="btn_material">Delete</a></td>
                            <td><a href="/updatematerial" className="btn " id="btn_material">Update</a></td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Crown remover</td>
                            <td>For dentals</td>
                            <td>75 EGP</td>
                            <td>This for dental fillings</td>
                            <td><a href="#" className="btn " id="btn_material">Delete</a></td>
                            <td><a href="/updatematerial" className="btn " id="btn_material">Update</a></td>

                        </tr>
 			<tr>
                            <th scope="row">5</th>
                            <td>Cement spatula</td>
                            <td>For dentals</td>
                            <td>100 EGP</td>
                            <td>This for dental fillings</td>
                            <td><a href="#" className="btn " id="btn_material">Delete</a></td>
                            <td><a href="/updatematerial" className="btn " id="btn_material">Update</a></td>

                        </tr>
                    </tbody>
                </table>

        </div>
      </>
    );
  };
  
  export default Surgery;