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
        </div>
      </>
    );
  };
  
  export default Surgery;