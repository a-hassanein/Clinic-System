import React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useReactToPrint } from 'react-to-print';
import { Link } from "react-router-dom";

const PatientHistory = (props) => {
    let sum=0

    const billRef = useRef()
    const handleBillPrint = useReactToPrint({
        content: () => billRef.current,
    });

    const labRef = useRef()
    const handleLabPrint = useReactToPrint({
        content: () => labRef.current,
    });

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [data, setData] = useState([])
    const getBillData = async () => {
        try {
            const response = await axios.get(`/bill/bill/${props.match.params.id}`)
            const { data } = response
            console.log(data)
            setData(data)
        } catch (err) {
            console.log(err)
        }
    }


const [labs, setLabs] = useState([])
const getLabData = async () => {
    try {
        const responsedata = await axios.get(`/patient/labList/${props.match.params.id}`)
        console.log(responsedata.data)
        const { labdata } = responsedata.data
        console.log(labdata)
        setLabs(responsedata.data)
    } catch (err) {
        console.log(err)
    }
}


const [prescription, setPrescription] = useState([])
const getPrescriptionData = async () => {
    try {
        const response = await axios.get(`/patient/prescriptionList/${props.match.params.id}`)
        const { prescription } = response
        console.log(prescription)
        setPrescription(response.data)
    } catch (err) {
        console.log(err)
    }
}


useEffect(() => {
    getBillData()
    getLabData()
    getPrescriptionData()
  }, [])

    return (
        <>
            <section className='home-section' style={{ marginTop: '20px' }} >
                <div className="container-fluid text-center" >
                    <h1>Appointment</h1>
                    <div className="row">

                        {/* Bill */}
                        <div className="col-4">
                            <div className="col-12 prescriptionPart" ref={billRef}>

                                <div className="doctor-presc-info">
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <h1 className="clinic-info" style={{fontSize:"2em"}}><b>BILL</b></h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" style={{ fontSize: "24px", textTransform: "capitalize" }}>
                                    {data.map((resdata, index) => (
                                        <div className="row" key={index}>
                                            <div className="col-lg-6" style={{float:"left" ,left:"0px",display:"inline-block"}}>
                                                <p className="drugs">{resdata.activity_name}</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="drugs" style={{float:"right" ,right:"0px",display:"inline-block"}}>{resdata.activity_price}</p>
                                                <p style={{ visibility: "hidden" }}> {sum = sum + resdata.activity_price} </p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="row" >
                                        <div className="col-lg-12">
                                            <hr />
                                            <p className="drugs"><b>Total Price</b> {sum}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="row prescription-footer" >
                                    <div className="col-lg-12 text-center" style={{backgroundColor:"var(--first_color)",width:"100%",bottom:"0px",position:"absolute"}}>
                                        <h2 className="presc-footer-text" style={{color:"#fff",fontWeight:"bold",padding:"5px"}}>عيادتي </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-lg-12">
                                    <button className="btn printButton" onClick={handleBillPrint}>Print Bill</button>
                                </div>
                            </div>

                        </div>

                        {/* lab */}
                        <div className="col-4">
                            <div className="col-12 prescriptionPart" ref={labRef}>
                                <div className="row  doctor-presc-info">
                                <div className="row">
                                        <div className="col-lg-12 ">
                                            <h1 className="clinic-info" style={{fontSize:"2em"}}><b>Scan & Labs</b></h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-4" >
                                        <img src={require('../../Images/RX.png')} alt="" className="img-fluid prescription-image" />
                                    </div>
                                </div>
                                <div className="row text-center" style={{ fontSize: "24px" }}>
                                    {labs.map((lab, index) => (
                                        <div className="col-lg-12">
                                            <p className="drugs">{lab.Lab_name}</p>
                                        </div>
                                        ))}
                                </div>
                                <div className="row prescription-footer" >
                                    <div className="col-lg-12 text-center" style={{backgroundColor:"var(--first_color)",width:"100%",bottom:"0px",position:"absolute"}}>
                                        <h2 className="presc-footer-text" style={{color:"#fff",fontWeight:"bold",padding:"5px"}}>عيادتي </h2>
                                    </div>
                                </div>

                            </div>

                            <div className="row text-center">
                                <div className="col-lg-12">
                                    <button className="btn printButton" onClick={handleLabPrint}>Print Labs</button>
                                </div>
                            </div>

                        </div>

                        {/* prescription */}
                        <div className="col-4">
                            <div className="col-12 prescriptionPart" ref={componentRef}>
                                <div className="row  doctor-presc-info">
                                <div className="row">
                                        <div className="col-lg-12 ">
                                            <h1 className="clinic-info" style={{fontSize:"2em"}}><b>Prescription</b></h1>
                                        </div>
                                    </div>
                                </div>

                               
                                <div className="row">
                                    <div className="col-lg-4" >
                                        <img src={require('../../Images/RX.png')} alt="" className="img-fluid prescription-image" />
                                    </div>
                                </div>
                                <div className="row text-center" style={{fontSize:"24px"}}>
                                    {prescription.map((drug) => {
                                            return (
                                                <> 
                                                    <div className="col-lg-6">
                                                        <p className="drugs">{drug.drug_name} {drug.drug_dose} {drug.drug_dosage_form}</p>
                                                    </div>
                                                    <div className="col-lg-6" dir="rtl">
                                                        <p className="drugs">{drug.frequency} {"لمده"} {drug.number_of_days} {drug.duration}</p>
                                                    </div>
                                                    <div className="col-lg-12" dir="rtl">
                                                        <p className="drugs"> {drug.instructions}</p>
                                                    </div>
                                                
                                                </>
                                            )
                                        })}
                                </div>
                                <div className="row prescription-footer" >
                                    <div className="col-lg-12 text-center" style={{backgroundColor:"var(--first_color)",width:"100%",bottom:"0px",position:"absolute"}}>
                                        <h2 className="presc-footer-text" style={{color:"#fff",fontWeight:"bold",padding:"5px"}}>عيادتي </h2>
                                    </div>
                                </div>

                            </div>

                            <div className="row text-center">
                                <div className="col-lg-12">
                                    <button className="btn printButton" onClick={handlePrint}>Print Prescription</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                {/* <h1>Patient History {props.match.params.id}</h1> */}
            </section>
        </>
    )
}
export default PatientHistory; 