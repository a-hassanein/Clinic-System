import { useState,useRef,useEffect } from "react";
import "../../Style/prescription.css"
import { useReactToPrint } from 'react-to-print';
import axios from "axios";
import { Link } from "react-router-dom";
import {
    AiFillStar
} from "react-icons/ai";
import "../../Style/scan_lab.css";



const Prescripe = () => {
    const [favdrugs,setFavdrugs] = useState([])
    const [drugdata,setDrugdata] = useState({
        appointmentid:"",
        drugname:"",
        favdrugname:"",
        dose:"",
        dosageform:"",
        frequency:"",
        noofdays:"",
        duration:"",
        foodrelation:"",
        // insrtuctions:"",
    })
    const[drugs,setDrugs] = useState([{
        patientname:"",
        appointmentid:"",
        drugname:"",
        favdrugname:"",
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
    const [data1, setData1] = useState([])
    const getUser = async () => {
        try {
            const response = await axios.get('/auth/users/2/')
            const { data } = response
            console.log(data)
            setData1(data)
           
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getUser()
  }, [])


const getdrugs = async() => {
    try{
        const response = await axios.get('/favdrugs/favdrugs/')
        const {data} = response
        setFavdrugs(data)
    }
    catch(err){
        console.log(err)

    }
}
useEffect(()=>{
    getdrugs()
},[])


const handleAddFormChange = (event)=>{
    const name = event.target.getAttribute('name')
    const value = event.target.value

    const newformdata = {...drugdata}
    newformdata[name]= value
    setDrugdata(newformdata)
}

const [patient,setPatient] = useState({
    patientname:""
})
const patientValidate = (e)=>{
    if(e.target.name==='patientname'){
        setPatient({
            ...patient,
            patientname:e.target.value
        })
    }
}

const[errmsg,setErrmsg] = useState('')

const handlesubmit = (e)=>{
    e.preventDefault()

    let name = document.getElementById('patientname').value
    let appointid = document.getElementById('id').value
    let drugnames = document.getElementById('drug').value
    let doses = document.getElementById('doses').value
    let dosage = document.getElementById('dosage').value
    let freq = document.getElementById('freq').value
    let numb = document.getElementById('number').value
    let durations = document.getElementById('durat').value
    let foodrel = document.getElementById('food').value
    let favs = document.getElementById('favs').value
    let err = document.getElementById('error')

    // debugger;
    if(name === null||name === ""){
        setErrmsg('Name is required')
        err.style.visibility = 'visible'
    }
    else if(appointid === null || appointid === ""){
        setErrmsg('AppointmentID is required')
        err.style.visibility = 'visible'
    }
    else if((drugnames === null || drugnames  === "")&&(favs === '0')){
        setErrmsg('Enter a drug name in drug name field or choose from favourites')
        err.style.visibility='visible'
    }
    else if((doses === null || doses === "")&&(favs === '0')){
        setErrmsg('Drug Dose is required')
        err.style.visibility = 'visible'
    }
    else if( dosage === "0"){
        setErrmsg('Should choose dosage form ')
        err.style.visibility = 'visible'
    }
    else if(freq === null || freq === ""){
        setErrmsg('Drug frequence is required')
        err.style.visibility = 'visible'
    }
    else if(numb === null || numb === ""){
        setErrmsg('Number of days is required')
        err.style.visibility = 'visible'
    }
    else if( durations === "0"){
        setErrmsg('Drug Duration is required')
        err.style.visibility = 'visible'
    }
    else if(foodrel === "0"){
        setErrmsg('Drug relation with food is required')
        err.style.visibility = 'visible'
    }
    else{
    setDrugs([...drugs,{
        appointmentid:e.target[1].value,
        drugname:e.target[2].value,
        favdrugname:e.target[3][e.target[3].selectedIndex].text,
        dose:e.target[4].value,
        dosageform:e.target[5][e.target[5].selectedIndex].text,
        frequency:e.target[6].value,
        noofdays:e.target[7].value,
        duration:e.target[8][e.target[8].selectedIndex].text,
        foodrelation:e.target[9][e.target[9].selectedIndex].text,
        instructions:e.target[10].value,
        between:"لمده",
        
        
    }])
        if(e.target[3][e.target[3].selectedIndex].value==='0'){
        try{
            axios.post("/prescription/prescription/", {
                appointment_id:drugdata.appointmentid,
                drug_name:drugdata.drugname,
                drug_dose:drugdata.dose,
                drug_dosage_form:drugdata.dosageform,
                frequency:drugdata.frequency,
                number_of_days:drugdata.noofdays,
                duration:drugdata.duration,
                instructions:drugdata.insrtuctions,
            }).then((response)=>{
                getdrugs()
                setErrmsg('')
                err.style.visibility = "hidden"})
        }catch(err){
            console.log(err)
        }
    }
        else{
            try{
                axios.post("/prescription/prescription/",{
                    appointment_id:drugdata.appointmentid,
                    drug_name:drugdata.favdrugname,
                    drug_dose:drugdata.dose,
                    drug_dosage_form:drugdata.dosageform,
                    frequency:drugdata.frequency,
                    number_of_days:drugdata.noofdays,
                    duration:drugdata.duration,
                    instructions:drugdata.insrtuctions,
            })
            .then(res => {
                console.log(res.data)

            })}
            catch(error){
                console.log(error)}

    }
    }

}
console.log(errmsg)



const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
        
    return(
        <>
            <section className='home-section' >
                <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                    <h1>Prescription</h1>
                </div>
                <div className='container-fluid formPart' >
                <div align="center" className="col-12 text-center" id="error" style={{marginLeft:"auto" ,marginRight:"auto"}}>
                  <span>{errmsg}</span>
                  <br/>
                  </div>
                    <form  onSubmit={(e) => {handlesubmit(e)}}>
                    <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Patient Name</label>
                                <input type='text' id='patientname' className='form-control' name="patientname" onChange={(e)=>{patientValidate(e)}}/>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">ِAppointment ID</label>
                                <input type='text' id='id' className='form-control' name="appointmentid" onChange={(event)=>{handleAddFormChange(event)}}/>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Drug Name</label>
                                <input type='text'  id='drug' className='form-control' name="drugname" placeholder="Type a drug name or choose from Favourites" onChange={(event)=>{handleAddFormChange(event)}}/>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Favourite Drugs</label>
                                <select className="form-select" id='favs' name="favdrugname" onChange={(event)=>{handleAddFormChange(event)}}>
                                    <option value='0' selected='selected'>Choose From Favourite Drugs</option>
                                {favdrugs.map((favdrug)=>{
                                    return(
                                            <option value={favdrug.favname}>{favdrug.favname}</option>
                                    )
                                })}
                                </select>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Doses</label>
                                <input type='text' id='doses' className="form-control" name="dose" placeholder="EX:500 mg" onChange={(event)=>{handleAddFormChange(event)}} />
                            </div>
                            {/* <div className="col-lg-4">
                                <label className="form-label">Favourite Doses</label>
                                <select className="form-select" name="favdrugdose" onChange={(event)=>{handleAddFormChange(event)}}>
                                    <option value='0' selected='selected'>Choose From Favourite Doses</option>
                                {favdrugs.map((favdrug)=>{
                                    return(
                                            <option value={favdrug.favdose}>{favdrug.favdose}</option>
                                    )
                                })}
                                </select>
                            </div> */}
                            <div className="col-lg-6">
                            <label className="form-label">Dosage Form</label>
                                <select className="form-select" id='dosage' name="dosageform" onChange={(event)=>{handleAddFormChange(event)}}>
                                   <option value='0'>Choose Dosage Form</option>
                                    <option  value="شراب">شراب</option>
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
                            
                        </div>
                        <div className="row">
                        <div className="col-lg-4">
                                <label className="form-label">Frequency</label>
                                <input type='text'  id='freq' className="form-control" placeholder=" EX: قرص كل 8 ساعات" name="frequency" onChange={(event)=>{handleAddFormChange(event)}}/>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">No of Days</label>
                                <input type="number" id='number' className="form-control" name="noofdays" onChange={(event)=>{handleAddFormChange(event)}}/>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Duration</label>
                                <select className="form-select" id='durat' name="duration" onChange={(event)=>{handleAddFormChange(event)}}>
                                    <option value='0'>Choose Duration</option>
                                    <option value="يوم">يوم</option>
                                    <option value="ايام">ايام</option>
                                    <option value="اسبوع">اسبوع</option>
                                    <option value="اسابيع">اسابيع</option>
                                    <option value="شهر">شهر</option>
                                    <option value="اشهر">اشهر</option>
                                </select>
                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="col-lg-6">
                                <label className="form-label">Food Relation</label>
                                <select className="form-select"  id='food' name="foodrelation" onChange={(event)=>{handleAddFormChange(event)}}>
                                    <option value='0'>Choose Food Relation</option>
                                    <option value="قبل الاكل">قبل الاكل</option>
                                    <option value="بعدالاكل">يعد الاكل</option>
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Instructions</label>
                                <input type="text" className="form-control" name="instructions" placeholder="Type more instructions if needed" onChange={(event)=>{handleAddFormChange(event)}}/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"30px"}}>
                                <input type="submit" className="btn prescriptionButton" value="submit"/>
                            </div>
                        </div>
                    </form>
                    <Link to={"/dashboard/prescription/drugfav"} className="btn" id="submitbtn" style={{ width: "45px", fontSize: "10px",float: "right"  }}><AiFillStar style={{fontSize: "20px" }}></AiFillStar></Link>
                </div>
                <div className="container prescriptionPart"  ref={componentRef}>
                    <div className="row text-center">
                        <div className="col-lg-12 ">
                            <h1 className="clinic-info"><b>Prescription</b></h1>
                        </div>
                    </div>
                    <div className="row  doctor-presc-info">
                        <div className="col-lg-6 ">
                            <h2 className="clinic-info">DR: {data1.name}</h2>
                        </div>
                        <div className="col-lg-6 ">
                            <h3 className="clinic-info">Tel No: {data1.phone}</h3>
                        </div>
                    </div>
                    
                    <div className="row prescription-body" dir="rtl">
                        <div className="col-lg-6">
                            <h5 className="patient-prescription-info">الاسم:{patient.patientname}</h5>
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
                                        <p className="drugs">{drug.drugname||drug.favdrugname} {drug.dose} {drug.dosageform}</p>
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
                    <div className="row prescription-footer" >
                        <div className="col-lg-12 text-center" >
                            <h2 className="presc-footer-text">عيادتي </h2>
                        </div>
                    </div> 
                    
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



