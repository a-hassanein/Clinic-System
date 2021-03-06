// import "../../Style/dashpage.css";
import { useState,useRef,useEffect,Fragment } from "react";
import { useReactToPrint } from 'react-to-print';
import {Link} from "react-router-dom";
import SurgeryTable from "../../Components/SurgeryTable";
import axios from "axios";
import SurgeryReadOnlyRow from "./component/sergeryReadOnly";
import EdiSurgerytableRow from "./component/EditSurgeryTableRow";
import myAxios from "../token"
import load_user from "../../actions/auth"
import "../../Style/assistant.css"


const Surgery = () => {

  const [surgeries, setSurgeries] = useState([])
  const getSurgeries = async () => {
      try {
          const response = await axios.get('/surgery/surgery/')
          const { data } = response
          console.log(data)
          setSurgeries(data)
      } catch (err) {
          console.log(err)
      }
  }
  useEffect(() => {
    getSurgeries()
}, [])


const [errorMessage, setErrorMessage] = useState('');


const [addSurgeryData, setAddSurgeryData] = useState({
    surgery: "",
    price: "",
    surgery_description: "",
});

const [editSurgeryData, setEditSurgeryData] = useState({
  surgery: "",
  price: "",
  surgery_description: "",
});

const [editSurgeryID, seteditSurgeryID] = useState(null);

const handleEditSurgeryChange = (event) => {
  event.preventDefault();

  const name = event.target.getAttribute("name");
  const value = event.target.value;

  const newSurgeryData = { ...editSurgeryData };
  newSurgeryData[name] = value;

  setEditSurgeryData(newSurgeryData);
};

const handleEditSurgerySubmit = (event) => {
  event.preventDefault();

  const newData = {
    surgery_name: editSurgeryData.surgery,
    surgery_price: editSurgeryData.price,
    surgery_description: editSurgeryData.surgery_description,    
  };

  const newDatas = [newData];
  
  setSurgeries(newDatas);

  try{
      axios.put(`/surgery/surgery/${editSurgeryID}/`, {
        surgery_name: editSurgeryData.surgery,
        surgery_price: editSurgeryData.price,
        surgery_description: editSurgeryData.surgery_description, 
      }).then((response)=>{
          getSurgeries()
          console.log(response.data)

      })

  }catch(error){
      console.log(error)
  }
  seteditSurgeryID(null);
};

const handleEditClick = (event , resdata) => {
  event.preventDefault();
  //console.log(typeof(resdata.assistant_id))
  seteditSurgeryID(resdata.surgery_id);

  const formValues = {
      surgery: resdata.surgery_name,
      price: resdata.surgery_price,
      surgery_description: resdata.surgery_description,
  };

  console.log(formValues)

  setEditSurgeryData(formValues);
};

const handleCancelClick = () => {
  seteditSurgeryID(null);
};

const handleAddSurgeryChange = (event) => {
    event.preventDefault();

    const name = event.target.getAttribute("name");
    const value = event.target.value;

    const newSurgeryData = { ...addSurgeryData };
    newSurgeryData[name] = value;

    setAddSurgeryData(newSurgeryData);
  };


  const handleAddSurgerySubmit = (event) => {
    event.preventDefault();


    let surgery = document.getElementById('surgery').value;
    let price = document.getElementById('price').value;
    let surgery_description = document.getElementById('surgery_description').value;
    //let flag = 0;
    let err = document.getElementById('error')
    //var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(surgery === null || surgery === ""){
        setErrorMessage("surgery is required")
        err.style.visibility = "visible"
    }else if(price === null || price === ""){
        setErrorMessage("price is required")
        err.style.visibility = "visible"
    }else if(isNaN(price)){
        setErrorMessage("price should be a number not text")
        err.style.visibility = "visible"
    }else if(surgery_description === null || surgery_description === ""){
        setErrorMessage("surgery_description is required")
        err.style.visibility = "visible"
    }
    else {

    const newData = {
      surgery_name: addSurgeryData.surgery,
      surgery_price: addSurgeryData.price,
      surgery_description: addSurgeryData.surgery_description,    
    };

    const newDatas = [...surgeries, newData];
    
    setSurgeries(newDatas);

    try{
        axios.post('/surgery/surgery/', newData, load_user(getSurgeries)).then((response)=>{
          err.style.visibility = "hidden"
            console.log(response.data)
        })

    }catch(error){
        console.log(error)
    }

  }
  };

  const handledeleteSurgery = async (surgery_id) => {
    try {
      await axios.delete(`/surgery/surgery/${surgery_id}/`);
      getSurgeries();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(surgeries)

    return (
      <>
        <div className="home-section">
        <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                    <h1>Surgery</h1>
        </div>

        <div className='container-fluid formPart' >

        <div align="center" className="col-12 text-center" id="error" style={{marginLeft:"auto" ,marginRight:"auto"}}>
                  <span>{errorMessage}</span>
                  <br/>
                  </div>

          <form onSubmit={handleAddSurgerySubmit}>

            <div className="row">
              <div className="col-lg-6">
                  <label className="form-label">Surgery Name</label>
                  <input type='text' className='form-control' name="surgery" id='surgery'onChange={handleAddSurgeryChange}/>
              </div>
              <div className="col-lg-6">
                  <label className="form-label">Price</label>
                  <input type='text' className='form-control' name="price" id="price" onChange={handleAddSurgeryChange}/> 
              </div>
            </div>

          <div className="row">
                  <div className="col-lg-12">
                      <label className="form-label">Description</label>
                      <textarea type='text' className='form-control' id="surgery_description" name="surgery_description" onChange={handleAddSurgeryChange}/>
                  </div>
          </div>

          <div className="row text-center">
              <div className="col-lg-12" style={{marginTop:"30px"}}>
                  <input type="submit" className="btn prescriptionButton" value="submit"/>
              </div>
          </div>
        </form>
        </div>

        <div className="frame_nav d-flex justify-content-center">
        </div>
        <div className="container-fluid">
          <div className="row">
          <div className="col-12">
        <form onSubmit={handleEditSurgerySubmit}>
        <table className="table" id="table_container"> 
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">SURGERY NAME </th>
                                <th scope="col">SURGERY PRICE</th>
                                <th scope="col">SURGERY Desciption</th>
                                <th scope="col">UPDATE SURGERY</th>
                                <th scope="col">DELETE SURGERY</th>
                            </tr>
                        </thead>
                        <tbody>

                        {surgeries.map((resdata, index)=> (
                                <Fragment key={index}>
                                {editSurgeryID === resdata.surgery_id ? (
                                    <EdiSurgerytableRow
                                    editSurgeryData={editSurgeryData}
                                    handleEditFormChange={handleEditSurgeryChange}
                                    handleCancelClick={handleCancelClick}
                                    resdata={resdata}
                                    handleEditFormSubmit={handleEditSurgerySubmit}
                                    index={index}
                                    />
                                ) : (
                                    <SurgeryReadOnlyRow  index={index} resdata={resdata}
                                    handleEditClick={handleEditClick} handledeleteSurgery={handledeleteSurgery}/>
                                )}
                                </Fragment>
            ))}
                            {/* {surgeries.map((surgery, index) => (

                                <SurgeryTable surgery={surgery}  index={index} handledeleteSurgery={() =>{handledeleteSurgery(surgery.surgery_id)}}/>
                            )
                            )} */}
                        </tbody>
                    </table>
                    </form>
                    </div>
                    </div>
                    </div>
        </div>
      </>
    );
  };
  
  export default Surgery;