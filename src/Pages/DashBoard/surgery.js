// import "../../Style/dashpage.css";
import { useState,useRef,useEffect } from "react";
import { useReactToPrint } from 'react-to-print';
import {Link} from "react-router-dom";
import SurgeryTable from "../../Components/SurgeryTable";
import axios from "axios";


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

    return (
      <>
        <div className="home-section">
        <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                    <h1>Surgery</h1>
        </div>

        <div className='container-fluid formPart' >
          <form method="post">

            <div className="row">
              <div className="col-lg-6">
                  <label className="form-label">Surgery Name</label>
                  <input type='text' className='form-control' name="activity"/>
              </div>
              <div className="col-lg-6">
                  <label className="form-label">Price</label>
                  <input type='text' className='form-control' name="price"/>
              </div>
            </div>

          <div className="row">
                  <div className="col-lg-12">
                      <label className="form-label">Description</label>
                      <textarea type='text' className='form-control' name="appointment_id"  />
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
                    <form className="d-flex" >
                        <input className="form-control me-2" type="search" placeholder="Search For Patient" aria-label="Search" id="searchfield" />
                        <button className="btn" id="searchbtn" type="submit">Search</button>
                    </form>
        </div>
        
        <table class="table" id="table_container"> 
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
                            {surgeries.map((surgery, index) => (

                                <SurgeryTable surgery={surgery}  index={index}/>
                            )
                            )}
                        </tbody>
                    </table>
        </div>
      </>
    );
  };
  
  export default Surgery;