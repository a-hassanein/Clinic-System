import React from "react";
import "../../Style/scan_lab.css";
import { Link , Switch ,Route,Router} from "react-router-dom";
import { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import {
    AiFillStar
} from "react-icons/ai";
import ScanFav from './ScanFav'
const Labs = [
    {
        id: 1,
        selected: false,
        name: "lab1",
    },
    {
        id: 2,
        selected: false,
        name: "lab2",

    },
    {
        id: 3,
        selected: false,
        name: "lab3",

    },
    {
        id: 4,
        selected: true,
        name: "lab4",

    },
    {
        id: 5,
        selected: false,
        name: "lab5",

    },
];
function Scan_labs() {
    const [labs, setLabs] = useState([{
        patientname: "",
        patientmobile: "",
        doctorname: "",
        scanname: "",
        labname: "",
    }])

    const [patient, setPatient] = useState({
        patientname: "",
    })

    const patientValidate = (e) => {
        if (e.target.name === 'patientname') {
            setPatient({
                ...patient,
                patientname: e.target.value
            })
        }
    }


    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    const handlesubmit = (e) => {
        e.preventDefault()
        setLabs([...labs, {
            scanname: e.target[2].value,
            labname: e.target[2].value,


        }])

    }
    //     constructor(props) {
    //       super(props);
    //       this.state = {
    //         List: Labs,
    //         MasterChecked: false,
    //         SelectedList: [],
    //       };
    //     }   
    //    onMasterCheck (e) {
    //         let tempList = this.state.List;
    //         // Check/ UnCheck All Items
    //         tempList.map((lab) => (lab.selected = e.target.checked));

    //         //Update State
    //         this.setState({
    //             MasterChecked: e.target.checked,
    //             List: tempList,
    //             SelectedList: this.state.List.filter((e) => e.selected),
    //         });
    //     }
    //     onItemCheck  (e, item) {
    //         let tempList = this.state.List;
    //         tempList.map((lab) => {
    //             if (lab.id === item.id) {
    //                 lab.selected = e.target.checked;
    //             }
    //             return lab;
    //         });
    //         const totalItems = this.state.List.length;
    //         const totalCheckedItems = tempList.filter((e) => e.selected).length;

    //         // Update State
    //         this.setState({
    //             MasterChecked: totalItems === totalCheckedItems,
    //             List: tempList,
    //             SelectedList: this.state.List.filter((e) => e.selected),
    //         });
    //     }

    //     // Event to get selected rows(Optional)
    //      getSelectedRows (){
    //         this.setState({
    //             SelectedList: this.state.List.filter((e) => e.selected),
    //         });
    //     }

    // patientValidate (e) {
    //     if (e.target.name === 'patientname') {
    //         setPatient({
    //             ...patient,
    //             patientname: e.target.value
    //         })
    //     }
    // }




    return (

        <>
            <section className='home-section' style={{ marginTop: '20px' }} >
            

                <div className="container-fluid text-center">
                    <h1>Scan & Labs</h1>
                </div>
                <div>

                    <div className='container-fluid  formcontainer' >
                        <form method="post" onSubmit={(e) => { handlesubmit(e) }}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label">Patient Name</label>
                                    <input type='text' className='form-control' name="patientname" required onChange={(e) => { patientValidate(e) }} />
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label">Patient Phone Number </label>
                                    <input type='text' className='form-control' name="patientmobile" required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label">Patient Age</label>
                                    <input type='number' className='form-control' name="patientage" required  />
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label">Appointment ID </label>
                                    <input type='text' className='form-control' name="appointmentid" required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label">Lab Name</label>
                                    <select className="form-select">
                                        <option value="1">Lab1</option>
                                        <option value="2">Lab2</option>
                                        <option value="2">Lab3</option>
                                        <option value="3">Lab4</option>
                                        <option value="4">Lab5</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label">Scan Name</label>
                                    <select className="form-select" >
                                        <option value="1">Scan1</option>
                                        <option value="2">Scan2</option>
                                        <option value="2">Scan3</option>
                                        <option value="3">Scan4</option>
                                        <option value="4">Scan5</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className="col-md-12">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        checked={this.state.MasterChecked}
                                                        id="mastercheck"
                                                        onChange={(e) => this.onMasterCheck(e)}
                                                    />
                                                </th>
                                                <th scope="col"> Lab Name</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.List.map((user) => (
                                                <tr key={user.id} className={user.selected ? "selected" : ""}>
                                                    <th scope="row">
                                                        <input
                                                            type="checkbox"
                                                            checked={user.selected}
                                                            className="form-check-input"
                                                            id="rowcheck{user.id}"
                                                            onChange={(e) => this.onItemCheck(e, user)}
                                                        />
                                                    </th>
                                                    <td>{user.name}</td>
                                                   
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <button
                                        className="btn btn-primary"
                                    onClick={() => this.getSelectedRows()}
                                    >
                                        Get Selected Items {this.state.SelectedList.length}
                                    </button>
                                    <div className="row">
                                        <b>All Row Items:</b>
                                        <code>{JSON.stringify(this.state.List)}</code>
                                    </div>
                                    <div className="row">
                                        <b>Selected Row Items(Click Button To Get):</b>
                                        <code>{JSON.stringify(this.state.SelectedList)}</code>
                                    </div>
                                </div> */}
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
                                <h5 className="patient-prescription-info">الاسم:{patient.patientname}</h5>
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
                            {labs.map((lab) => {
                                return (
                                    <>
                                        <div className="col-lg-6">
                                            <p className="Labs">{lab.labname} </p>
                                        </div>
                                        <div className="col-lg-6" dir="rtl">
                                            <p className="Scan">{lab.scanname} </p>
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