import React from "react";
import "../../Style/scan_lab.css";
import { Link , Switch ,Route,Router} from "react-router-dom";
import { useState, useRef,useEffect } from "react";
import { useReactToPrint } from 'react-to-print';
import {
    AiFillStar
} from "react-icons/ai";
import ScanFav from './ScanFav'
import axios from "axios";

function Scan_labs() {
    const [labs, setLabs] = useState([])
    const getLabs = async () => {
        try {
            const response = await axios.get('/favlabs/favlabs/')
            const { data } = response
            console.log(data)
            setLabs(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getLabs()
  }, [])

  const [scans, setScans] = useState([])
    const getScans = async () => {
        try {
            const response = await axios.get('/favlabs/favscans/')
            const { data } = response
            console.log(data)
            setScans(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getScans()
  }, [])


  const [labscans, setLabscans] = useState([])
  const [addLabData, setAddLabData] = useState({
    patientname: "",
    patientmobile: "",
    patientage: "",
    appointmentid: "",
    patientlab: "",
    patientscan: "",
    activity: "",
});


const handleAddBillChange = (event) => {
    event.preventDefault();
    
    const name = event.target.getAttribute("name");
    const value = event.target.value;

    const newLabData = { ...addLabData };
    newLabData[name] = value;
    setAddLabData(newLabData);
  };
  console.log("add data ",addLabData)

  const [labprint, setLabprint] = useState([{
      labs:''
  }])


  const handleAddLabSubmit = (event) => {
    event.preventDefault();
    // if(event.target.name==="patientlab"){
    //     setAddLabData({...addLabData,activity: event.target.value})
    // }
    setLabprint([...labprint,{
        labs:event.target[6].value
    }])
    const newData = {
      appointment_id: addLabData.appointmentid,
      Lab_name: document.getElementById("avtivityID").value,    
    };

    const newDatas = [...labscans, newData];
    
    setLabscans(newDatas);

    try{
        console.log(document.getElementById("avtivityID").value)
        axios.post('/labs/labs/', newData).then((response)=>{
            console.log(response.data)
        })

    }catch(error){
        console.log(error)
    }
  };

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (

        <>
            <section className='home-section' style={{ marginTop: '20px' }} >
            

                <div className="container-fluid text-center">
                    <h1>Scan & Labs</h1>
                </div>
                <div>

                    <div className='container-fluid  formcontainer' >
                        <form onSubmit={handleAddLabSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label">Patient Name</label>
                                    <input type='text' className='form-control' name="patientname" required onChange={handleAddBillChange}/>
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label">Patient Phone Number </label>
                                    <input type='text' className='form-control' name="patientmobile" required onChange={handleAddBillChange}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label">Patient Age</label>
                                    <input type='number' className='form-control' name="patientage" required  onChange={handleAddBillChange}/>
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label">Appointment ID </label>
                                    <input type='text' className='form-control' name="appointmentid" required onChange={handleAddBillChange}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label">Lab Name</label>
                                    <select className="form-select" name="patientlab" onChange={handleAddBillChange}>
                                            <option value="0">choose Lab</option>
                                        {labs.map((lab) => (
                                            <option value={ lab.Lab_name }>{ lab.Lab_name }</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label">Scan Name</label>
                                    <select className="form-select" name="patientscan" onChange={handleAddBillChange}>
                                            <option value="0">choose Scan</option>
                                        {scans.map((scan) => (
                                            <option value={ scan.Scan_name }>{ scan.Scan_name }</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <label className="form-label">Lab Name</label>
                                    <input type='text' className='form-control' id="avtivityID" name="activity" value={addLabData.patientlab || addLabData.patientscan } onChange={handleAddBillChange} required />
                                </div>
                            </div>
                           
                           

                                <div className="align-items-center text-center">
                            <button type="submit" id="submitbtn" style={{ marginTop: "20px", width: "200px" }} className="btn align-items-center">Add</button>
                            </div>
                        </form>
                    <Link to={"/dashboard/scan_labs/addfav"} className="btn" id="submitbtn" style={{ width: "45px", fontSize: "10px",float: "right" ,marginBottom: "25px" }}><AiFillStar style={{fontSize: "20px" }}></AiFillStar></Link>
                    </div>
                    <div className="container prescriptionPart" ref={componentRef}>
                        <div className="row  doctor-presc-info">
                            <div className="col-lg-6 ">
                                <h2 className="clinic-info">Clinic name</h2>
                            </div>
                            <div className="col-lg-6 ">
                                <h2 className="clinic-info">Doctor name</h2>
                            </div>
                            <div className="col-lg-6 ">
                                <h3 className="clinic-info">clinic numbers</h3>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="clinic-info">Doctor info</h3>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="clinic-info">clinic address</h3>
                            </div>
                        </div>

                        <div className="row prescription-body" dir="rtl">
                            <div className="col-lg-4">
                                <h5 className="patient-prescription-info">الاسم:</h5>
                            </div>

                            <div className="col-lg-4">
                                <h5 className="patient-prescription-info">السن:25</h5>
                            </div>
                            <div className="col-lg-4">
                                <h5 className="patient-prescription-info">التاريخ:25-2-2022</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4" >
                                <img src={require('../../Images/RX.png')} alt="" className="img-fluid prescription-image" />
                            </div>
                        </div>
                        <div className="row text-center" style={{ fontSize: "24px" }}>
                            {labprint.map((lab) => {
                                return (
                                    <>
                                        <div className="col-lg-12" >
                                            <p className="Labs" style={{fontSize:'40px',fontWeight:'600'}}>{lab.labs}</p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className="container-fluid presc-button-container" >
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <button className="btn printButton" style={{ marginLeft: "auto", marginRight: "auto", width: "200px" }} onClick={handlePrint}>Print Prescription</button>
                            </div>
                        </div>
                    </div>



            </div>

        </section >
        </>


    );



}
export default Scan_labs;