import { useState,useRef } from "react";
import "../../Style/prescription.css"
import { useReactToPrint } from 'react-to-print';
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { adddrug } from "../../PrescriptionRedux/Action";
import PatientTable from "../../Components/PatientTable";





const Prescripe = () => {
    const favdrugs = useSelector((state)=>state.drugs)
    console.log(favdrugs)
    const dispatch = useDispatch();

    const addfav = ()=>{
        dispatch(adddrug())
    }
    const[drugs,setDrugs] = useState([{
        patientname:"",
        patientmobile:"",
        drugname:"",
        dose:"",
        dosageform:"",
        frequency:"",
        noofdays:"",
        duration:"",
        foodrelation:"",
        instructions:"",
        between:"",
        note:""
    }])

    const[data,setData] = useState([{
        appointmentid:"",
        drugname:"",
        dose:"",
        dosageform:"",
        frequency:"",
        noofdays:"",
        duration:"",
        foodrelation:"",
        insrtuctions:"",
    }])

    const[patient,setPatient] = useState({
        patientname:"",
    })

    const patientValidate = (e) => {
        if (e.target.name === 'patientname'){
            setPatient({
                ...patient,
                patientname:e.target.value
            })
        }
    }


    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const name = event.target.getAttribute("name");
        const value = event.target.value;
    
        const newFormData = { ...data };
        newFormData[name] = value;
    
        setData(newFormData);
      };
      console.log(data)
    

    

    const handlesubmit = (e) => {
        setDrugs([...drugs,{
            patientmobile:e.target[1].value,
            drugname:e.target[2].value,
            dose:e.target[3].value,
            dosageform:e.target[4][e.target[4].selectedIndex].text,
            frequency:e.target[5].value,
            noofdays:e.target[6].value,
            duration:e.target[7][e.target[7].selectedIndex].text,
            foodrelation:e.target[8][e.target[8].selectedIndex].text,
            instructions:e.target[9].value,
            between:"لمده",
            
            
        }])
        try{
            Axios.post("/prescription/prescription/",{
                appointment_id:data.appointmentid,
                drug_name:data.drugname,
                drug_dose:data.dose,
                drug_dosage_form:data.dosageform,
                frequency:data.frequency,
                number_of_days:data.noofdays,
                duration:data.duration,
                instructions:data.insrtuctions,
        })
        .then(res => {
            console.log(res.data)
        })}
        catch(error){
            console.log(error)
        }
    }
    return(
        <>
            <section className='home-section' >
                <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                    <h1>Prescription</h1>
                </div>
                <div className='container-fluid formPart' >
                    <form  onSubmit={(e) => {handlesubmit(e)}}>
                    <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Patient Name</label>
                                <input type='text' className='form-control' name="patientname" onChange={(e)=>{patientValidate(e)}}/>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Patient Mobile No.</label>
                                <input type='text' className='form-control' name="appointmentid" onChange={(event)=>{handleAddFormChange(event)}}/>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Drug Name</label>
                                <input type='text' className='form-control' name="drugname"  onChange={(event)=>{handleAddFormChange(event)}}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <label className="form-label">Doses</label>
                                <input type='text' className="form-control" name="dose" onChange={(event)=>{handleAddFormChange(event)}} />
                            </div>
                            <div className="col-lg-4">
                            <label className="form-label">Dosage Form</label>
                                <select className="form-select" name="dosageform" onChange={(event)=>{handleAddFormChange(event)}}>
                                    <option value="شراب">شراب</option>
                                    <option value="اقراض">اقراص</option>
                                    <option value="كبسول">كبسول</option>
                                    <option value="حقن">حقن</option>
                                    <option value="لبوس">لبوس</option>
                                    <option value="مرهم">مرهم</option>
                                    <option value="كريم">كريم</option>
                                    <option value="ملحلول">محلول</option>
                                    <option value="قطره">قطره</option>
                                    <option value="غسول فم">غسول فم</option>
                                </select>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Frequency</label>
                                <input type='text' className="form-control" name="frequency" onChange={(event)=>{handleAddFormChange(event)}}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <label className="form-label">No of Days</label>
                                <input type="number" className="form-control" name="noofdays" onChange={(event)=>{handleAddFormChange(event)}}/>
                            </div>
                            <div className="col-lg-3">
                                <label className="form-label">Duration</label>
                                <select className="form-select" name="duration" onChange={(event)=>{handleAddFormChange(event)}}>
                                    <option value="يوم">يوم</option>
                                    <option value="ايام">ايام</option>
                                    <option value="اسبوع">اسبوع</option>
                                    <option value="اسابيع">اسابيع</option>
                                    <option value="شهر">شهر</option>
                                    <option value="اشهر">اشهر</option>
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Food Relation</label>
                                <select className="form-select" name="foodrelation" onChange={(event)=>{handleAddFormChange(event)}}>
                                    <option value="قبل الاكل">قبل الاكل</option>
                                    <option value="بعدالاكل">يعد الاكل</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Instructions</label>
                                <input type="text" className="form-control" name="instructions" onChange={(event)=>{handleAddFormChange(event)}}/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"30px"}}>
                                <input type="submit" className="btn prescriptionButton" value="submit"/>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="container prescriptionPart"  ref={componentRef}>
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
                            <img src={require('../../Images/RX.png')} alt="" className="img-fluid prescription-image"/>
                        </div>
                    </div>
                    <div className="row text-center" style={{fontSize:"24px"}}>
                        {drugs.map((drug) => {
                            return(
                                <>
                                    <div className="col-lg-6">
                                        <p className="drugs">{drug.drugname} {drug.dose} {drug.dosageform}</p>
                                    </div>
                                    <div className="col-lg-6" dir="rtl">
                                        <p className="drugs">{drug.frequency} {drug.between} {drug.noofdays} {drug.duration}</p>
                                    </div>
                                    <div className="col-lg-12" dir="rtl">
                                        <p className="drugs"> {drug.instructions}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    {/* <div className="row prescription-footer" >
                        <div className="col-lg-12 text-center" >
                            <h2 className="presc-footer-text">عيادتي </h2>
                        </div>
                    </div> */}
                    
                </div>
                <div className="container-fluid presc-button-container" >
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <button className="btn printButton" onClick={handlePrint}>Print Prescription</button>
                        </div>
                    </div>
                </div>
                <button className="btn btn-danger" onClick={addfav}>add</button>
                
                  <table class="table" id="table_container">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Drug Name </th>
                                <th scope="col">Dose</th>
                                <th scope="col">Dosage Form</th>
                                <th scope="col">Frequency</th>
                                <th scope="col">Duration</th>
                                <th scope="col">No of days</th>
                                <th scope="col">Food Relation</th>
                                <th scope="col">Instructions</th>


                            </tr>
                        </thead>
                        <tbody>
                            {favdrugs.map((favdrug, index) => (
                                  <tr>

                                  <td>
                                    {index+1}
                                  </td>
                                  <td>{favdrug}</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                    
                                </tr>

                            )
                            )}
                        </tbody>

                    </table>
                
            </section>


        </>
    )

}

export default Prescripe



