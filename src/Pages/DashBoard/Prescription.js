import { useState,useRef } from "react";
import "../../Style/prescription.css"
import { useReactToPrint } from 'react-to-print';


const Prescripe = () => {
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
    

    const handlesubmit = (e) => {
        e.preventDefault()
        setDrugs([...drugs,{
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
        console.log(e)
        console.log(drugs)
    }
    return(
        <>
            <section className='home-section' >
                <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                    <h1>Prescription</h1>
                </div>
                <div className='container-fluid formPart' >
                    <form method="post" onSubmit={(e) => {handlesubmit(e)}}>
                    <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Patient Name</label>
                                <input type='text' className='form-control' name="patientname" onChange={(e)=>{patientValidate(e)}}/>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Patient Mobile No.</label>
                                <input type='text' className='form-control' name="patientmobile" />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Drug Name</label>
                                <input type='text' className='form-control' name="drugname"  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <label className="form-label">Doses</label>
                                <input type='text' className="form-control" name="dose"  />
                            </div>
                            <div className="col-lg-4">
                            <label className="form-label">Dosage Form</label>
                                <select className="form-select">
                                    <option value="1">شراب</option>
                                    <option value="2">اقراص</option>
                                    <option value="2">كبسول</option>
                                    <option value="3">حقن</option>
                                    <option value="4">لبوس</option>
                                    <option value="5">مرهم</option>
                                    <option value="6">كريم</option>
                                    <option value="7">محلول</option>
                                    <option value="8">قطره</option>
                                    <option value="9">غسول فم</option>
                                </select>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Frequency</label>
                                <input type='text' className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <label className="form-label">No of Days</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="col-lg-3">
                                <label className="form-label">Duration</label>
                                <select className="form-select">
                                    <option value="1">يوم</option>
                                    <option value="2">ايام</option>
                                    <option value="2">اسبوع</option>
                                    <option value="2">اسابيع</option>
                                    <option value="2">شهر</option>
                                    <option value="2">شهور</option>
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Food Relation</label>
                                <select className="form-select">
                                    <option value="1">قبل الاكل</option>
                                    <option value="2">يعد الاكل</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Instructions</label>
                                <input type="text" className="form-control"/>
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
            </section>


        </>
    )

}

export default Prescripe



